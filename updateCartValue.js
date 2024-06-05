export const updateCartValue = () => {
    let getLocal = JSON.parse(localStorage.getItem('cartProductLS'))
    if (!getLocal) {
        return []
    }
    let addquantity = getLocal.map((cuc) => {
        return cuc.quantity;
    }).reduce((accumulator, currentValue) => {
        return accumulator = accumulator + currentValue
    }, 0);

    document.getElementById('cardValue').innerHTML = `<i class="fa-solid fa-cart-plus"></i> ${addquantity}`
}