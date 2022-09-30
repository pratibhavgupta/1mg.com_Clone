
const productContainers3 = [...document.querySelectorAll('.product3-container3')];
const nxtBtnnn = [...document.querySelectorAll('.nxt-btn3')];
const preBtnnn= [...document.querySelectorAll('.pre-btn3')];

productContainers3.forEach((item, i) => {
    let containerDimensions3 = item.getBoundingClientRect();
    let containerWidth3 = containerDimensions3.width;

    nxtBtnnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth3;
    })

    preBtnnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth3;
    })
})