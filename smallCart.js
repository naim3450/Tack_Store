export const samllCart = () => {
    let samllCart = document.querySelector('.samllCart')

    let getLocal = JSON.parse(localStorage.getItem('cartProductLS'))
    let addquantity = getLocal.map((cuc) => {
        return cuc.quantity;
    }).reduce((accumulator, currentValue) => {
        return accumulator = accumulator + currentValue
    }, 0);
    samllCart.innerHTML = `<i class="fa-solid fa-cart-plus"></i> ${addquantity}`
}