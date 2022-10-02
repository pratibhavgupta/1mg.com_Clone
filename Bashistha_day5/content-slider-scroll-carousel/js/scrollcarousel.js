(function($) {

	/* debouncer */
	var debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    var ScrollCarousel = (function() {

    	function ScrollCarousel(element, options) {
    		var _ = this;

    		_.defaultOptions = {
	            snapOffset: 0,
	            snapAlignment: 'left',
	            snapLeeway: 5,
				preventEdgeSnapping: true,
				buttonType: 'arrows',
	            fadeObscured: false,
	            fadeOpacity: 0.5,
	            animationLength: 250,
	            debounce: 200
	        }

			var dataObject = $(element).data('carousel') || {};

	        _.options = $.extend({}, _.defaultOptions, dataObject, options);

	        _.carousel = element;
			_.$carousel = $(element);
			_.$container = _.$carousel.parent();
	        _.$carouselItems = _.$carousel.children();

	        _.viewportChangeHandler = $.proxy(_.viewportChangeHandler, _);
	        _.scrollHandler = $.proxy(_.scrollHandler, _);

	        _.init();
	    }

	    return ScrollCarousel;
    })();

	/* init method, creates & appends buttons/styling/bindings */
    ScrollCarousel.prototype.init = function() {
		var _ = this;

		console.log(_.$container);
		
		/* 
		generate buttons and append them to the carousel
		======
			@notes: position: relative is place on the carousel's container;
			i.e. 2 levels removed from the items. so ya probably want to 
			ensure that programmatically if im gonna be generating buttons
			and positioning them absolutely
		======
		*/
		if (_.options.buttonType === 'arrows') {
			$('<button/>', {
				class: "wc__next-button wc__button",
				text: "",
				click: function() {
					var buttonDirection = 'right';
					_.scrollHandler(buttonDirection);
				}
			}).appendTo(_.$carousel);
			
			$('<button/>', {
				class: "wc__prev-button wc__button",
				text: "",
				click: function() {
					var buttonDirection = 'left';
					_.scrollHandler(buttonDirection);
				}
			}).prependTo(_.$carousel);
		}
		else if (_.options.buttonType === 'indicators') {
			$('<div/>', {
				class: "wc__indicator-container"
			}).appendTo(_.$carousel);
			_.$carouselItems.each(function(_index, item) {
				$('<button/>', {
					class: "wc__indicator-button",
					text: _index + 1,
					// should probably extract this function? idk
					click: function() {
						var $item = $(item),
							scrollAdjust,
							itemMargin;
						
						if (_.options.snapAlignment === 'left') {
							itemMargin = parseInt($item.css('marginLeft'));
							scrollAdjust = _.childrenLeftBounds[_index] + _.options.snapOffset - itemMargin;
						}
						else if (_.options.snapAlignment === 'right') {
							itemMargin = parseInt($item.css('marginRight'));
							scrollAdjust = (_.childrenLeftBounds[_index] + $item.outerWidth() + _.options.snapOffset + itemMargin) - _.carouselWidth;
						}
						else if (_.options.snapAlignment === 'center') {
							scrollAdjust = (_.childrenLeftBounds[_index] + ($item.outerWidth() / 2) + _.options.snapOffset) - (_.carouselWidth / 2);
						}

						_.$carousel.animate({
							scrollLeft: scrollAdjust
						}, _.options.animationLength);
					}
				}).appendTo($('.wc__indicator-container'));
			});
		}

		_.viewportChangeHandler();

		/* bind window changes */
		var debouncedResizeHandler = debounce(_.viewportChangeHandler, _.options.debounce);
		var debouncedScrollHandler = debounce(_.scrollHandler, _.options.debounce);

        $(window).on('resize', debouncedResizeHandler);
        $(window).on('orientationchange', debouncedResizeHandler);
        _.$carousel.on('scroll', debouncedScrollHandler);
    };

	/* handles carousel dimension changes */
    ScrollCarousel.prototype.viewportChangeHandler = function() {
    	var _ = this;

    	/* get width & positioning properties */
        _.carouselWidth = _.$carousel.width();
        _.carouselCenter = (_.carouselWidth / 2);
        _.carouselOffset = _.$carousel.offset().left;
        _.carouselScrollWidth = _.carousel.scrollWidth;
        _.childrenLeftBounds = _.$carouselItems.map(function(_index, child) {
        	return $(child).offset().left + _.$carousel.scrollLeft() - _.carouselOffset;
		}).get();
		
		/* should handle misalignments after resizes at the end of this function */
    };

	/* handles post-scroll functionality; alignment, fading obscured items, animation etc */
    ScrollCarousel.prototype.scrollHandler = function(buttonDirection) {
		if (typeof buttonDirection !== 'string') {
			buttonDirection = null;
		}
    	var _ = this,
    		scrollPosition = _.$carousel.scrollLeft(),
    		closestDistance,
    		scrollAdjust,
    		snapIndex;

		/* big looper that calculates item positioning & applies changes accordingly */
    	_.$carouselItems.each(function(_index, item) {
    		var distanceLeft = $(item).offset().left - _.carouselOffset,
				distanceRight = distanceLeft + ($(item).outerWidth());

    		/* opacity checker THIS WILL NEED UPDATING */
    		if (_.options.fadeObscured === true) {
    			if (distanceLeft <= -1 || distanceRight >= (_.carouselWidth +1)) {
    				$(item).css('opacity', _.options.fadeOpacity);
    			}
    			else {
    				$(item).css('opacity', 1);
    			}
    		}

    		if (_.options.snapAlignment === 'center') {
				var centerAlignment = _.alignCenter(_index, item, scrollPosition, distanceLeft, closestDistance, buttonDirection);
				if (!!centerAlignment) {
					closestDistance = centerAlignment.closestDistance;
					scrollAdjust = centerAlignment.scrollAdjust;
					snapIndex = centerAlignment.snapIndex;
				}
    		}
    		else if (_.options.snapAlignment === 'left') {
				var leftAlignment = _.alignLeft(_index, item, scrollPosition, distanceLeft, closestDistance, buttonDirection);
				if (!!leftAlignment) {
					closestDistance = leftAlignment.closestDistance;
					scrollAdjust = leftAlignment.scrollAdjust;
					snapIndex = leftAlignment.snapIndex;
				}
    		}
    		else if (_.options.snapAlignment === 'right') {
				var rightAlignment = _.alignRight(_index, item, scrollPosition, distanceRight, closestDistance, buttonDirection);
				if (!!rightAlignment) {
					closestDistance = rightAlignment.closestDistance;
					scrollAdjust = rightAlignment.scrollAdjust;
					snapIndex = rightAlignment.snapIndex;
				}
    		}
    	});

		/* need to update indicator button checking here */

		/* prevent all snapping if scroll ends on boundary (enabled by default)*/
		if (!buttonDirection) {
			if (_.options.preventEdgeSnapping && scrollPosition <= 2 || _.options.preventEdgeSnapping && (scrollPosition + _.carouselWidth) >= (_.carouselScrollWidth - 2)) {
				return false;
			}
		}

    	/* check against margin for scroll reposition, animate reposition */
    	if (closestDistance >= _.options.snapLeeway) {
    		_.$carousel.animate({
    			scrollLeft: scrollAdjust
    		}, _.options.animationLength);
    	}
	};
	
	ScrollCarousel.prototype.alignCenter = function(index, item, scrollPosition, distanceLeft, closestDistance, buttonDirection) {
		var _ = this,
			distanceCenter = distanceLeft + ($(item).outerWidth() / 2),
			relDistanceCenter = _.carouselCenter - distanceCenter,
			absDistanceCenter = Math.abs(relDistanceCenter);

		if (buttonDirection === 'left') {
			if (Math.floor(relDistanceCenter) > 0 && (closestDistance === undefined || absDistanceCenter < closestDistance)) {
				return {
					closestDistance: absDistanceCenter,
					scrollAdjust: (scrollPosition - absDistanceCenter + _.options.snapOffset),
					snapIndex: index
				}
			}
		}
		else if (buttonDirection === 'right') {
			if (Math.ceil(relDistanceCenter) < 0 && (closestDistance === undefined || absDistanceCenter < closestDistance)) {
				return {
					closestDistance: absDistanceCenter,
					scrollAdjust: (scrollPosition + absDistanceCenter + _.options.snapOffset),
					snapIndex: index
				}
			}
		}
		else {
			if (distanceCenter > 0 && distanceCenter <= _.carouselWidth) {
				if (closestDistance === undefined || closestDistance >= absDistanceCenter) {
					return {
						closestDistance: absDistanceCenter,
						scrollAdjust: (scrollPosition - relDistanceCenter + _.options.snapOffset),
						snapIndex: index
					}
				}
			}
		}
	}
	
	ScrollCarousel.prototype.alignLeft = function(index, item, scrollPosition, distanceLeft, closestDistance, buttonDirection) {
		var _ = this,
			itemMargin = parseInt($(item).css('marginLeft')),
			absDistanceLeft = Math.abs(distanceLeft);

		if (buttonDirection === 'left') {
			if ((Math.ceil(distanceLeft) - itemMargin) < 0 && (closestDistance === undefined || absDistanceLeft < closestDistance)) {
				return {
					closestDistance: absDistanceLeft,
					scrollAdjust: (scrollPosition - absDistanceLeft + _.options.snapOffset - itemMargin),
					snapIndex: index
				}
			}
		}
		else if (buttonDirection === 'right') {
			if ((Math.floor(distanceLeft) - itemMargin) > 0 && (closestDistance === undefined || absDistanceLeft < closestDistance)) {
				return {
					closestDistance: absDistanceLeft,
					scrollAdjust: (scrollPosition + absDistanceLeft + _.options.snapOffset - itemMargin),
					snapIndex: index
				}
			}
		}
		else {
			if (closestDistance === undefined || closestDistance >= absDistanceLeft) {
				return {
					closestDistance: absDistanceLeft,
					scrollAdjust: (scrollPosition + distanceLeft + _.options.snapOffset - itemMargin),
					snapIndex: index
				}
			}
		}
	}
	
	ScrollCarousel.prototype.alignRight = function(index, item, scrollPosition, distanceRight, closestDistance, buttonDirection) {
		var _ = this,
			relDistanceRight = _.carouselWidth - distanceRight,
			itemMargin = parseInt($(item).css('marginRight')),
			absDistanceRight = Math.abs(relDistanceRight);

		if (buttonDirection === 'left') {
			if ((Math.floor(relDistanceRight) - itemMargin) > 0 && (closestDistance === undefined || absDistanceRight < closestDistance)) {
				return {
					closestDistance: absDistanceRight,
					scrollAdjust: (scrollPosition - absDistanceRight + _.options.snapOffset + itemMargin),
					snapIndex: index
				}
			}
		}
		else if (buttonDirection === 'right') {
			if ((Math.ceil(relDistanceRight) - itemMargin) < 0 && (closestDistance === undefined || absDistanceRight < closestDistance)) {
				return {
					closestDistance: absDistanceRight,
					scrollAdjust: (scrollPosition + absDistanceRight + _.options.snapOffset + itemMargin),
					snapIndex: index
				}
			}
		}
		else {
			if (closestDistance === undefined || closestDistance >= absDistanceRight) {
				return {
					closestDistance: absDistanceRight,
					scrollAdjust: (scrollPosition - relDistanceRight + _.options.snapOffset + itemMargin),
					snapIndex: index
				}
			}
		}
	}

    $.fn.scrollCarousel = function() {
    	var _ = this,
    		opt = arguments[0],
    		args = Array.prototype.slice.call(arguments, 1),
    		l = _.length,
    		i = 0;

    	for (i; i < l; i++) {
    		if (typeof opt == 'object' || typeof opt == 'undefined') {
    			_[i].scrollCarousel = new ScrollCarousel(_[i], opt);
    		}
    		else {
    			throw new Error('Type of argument is not object');
    		}
    	}

    	return _;

    }
})(jQuery);


/*
= = = = =
UNCOMMENT THIS FOR TESTING
= = = = =
*/

$('.carousel').scrollCarousel({snapAlignment: 'left'});






import {navbar} from "./navbar.js";
document.getElementById("navbar").innerHTML=navbar();