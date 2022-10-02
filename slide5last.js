

const productContainers5 = [...document.querySelectorAll('.product1-container5')];
const nxtBtnny = [...document.querySelectorAll('.nxt-btn5')];
const preBtnny= [...document.querySelectorAll('.pre-btn5')];

productContainers5.forEach((item, i) => {
    let containerDimensions5 = item.getBoundingClientRect();
    let containerWidth5 = containerDimensions5.width;

    nxtBtnny[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth5;
    })

    preBtnny[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth5;
    })
})