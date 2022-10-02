const productContainers4 = [...document.querySelectorAll('.product4-container4')];
const nxtBtnnnn = [...document.querySelectorAll('.nxt-btn4')];
const preBtnnnn= [...document.querySelectorAll('.pre-btn4')];

productContainers4.forEach((item, i) => {
    let containerDimensions4 = item.getBoundingClientRect();
    let containerWidth4 = containerDimensions4.width;

    nxtBtnnnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth4;
    })

    preBtnnnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth4;
    })
})