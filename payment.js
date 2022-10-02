

// $(function() {
//     $('[data-toggle="tooltip"]').tooltip()
//   })

var divs = ["Section1", "Section2", "Section3", "Section4"];
var visibleId = null;
function show(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  hide();
}
function hide() {
  var div, i, id;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}




$('.input-cart-number').on('keyup change', function(){
    $t = $(this);
    
    if ($t.val().length > 3) {
      $t.next().focus();
    }
    
    var card_number = '';
    $('.input-cart-number').each(function(){
      card_number += $(this).val() + ' ';
      if ($(this).val().length == 4) {
        $(this).next().focus();
      }
    })
    
    $('.credit-card-box .number').html(card_number);
  });
   
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
   
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
   
  $('#expire-month, #expire-year').change(function(){
    m = $('#expire-month option').index($('#expire-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#expire-year').val().substr(2,2);
    $('.card-expiration-date div').html(m + '/' + y);
  })
   
  $('#card-ccv').on('focus', function(){
    $('.credit-card-box').addClass('hover');
  }).on('blur', function(){
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function(){
    $('.ccv div').html($(this).val());
  });
   
  setTimeout(function(){
    $('#card-ccv').focus().delay(1000).queue(function(){
      $(this).blur().dequeue();
    });
  }, 500);



  function paynow(){
   
    setTimeout(() => {
        alert("Your Order Is Successfully Placed")
        alert("Thank You!")
    }, 0);
    
    // setTimeout(() => {
    //     alert("Thank You!")
    // }, 3000);
  }



