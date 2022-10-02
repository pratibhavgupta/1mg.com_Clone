const productContainers2 = [...document.querySelectorAll('.product1-container2')];
const nxtBtnn = [...document.querySelectorAll('.nxt-btn2')];
const preBtnn= [...document.querySelectorAll('.pre-btn2')];

productContainers2.forEach((item, i) => {
    let containerDimensions2 = item.getBoundingClientRect();
    let containerWidth2 = containerDimensions2.width;

    nxtBtnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth2;
    })

    preBtnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth2;
    })
})