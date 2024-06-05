export const homeQuantityToggle = (event, id, stock) => {
    let currentCardElement = document.querySelector(`#card${id}`)

    let productQuantity = currentCardElement.querySelector('.productQuantity')

    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1

    if (event.target.classList.contains('cartIncrement')) {
        if (quantity < stock) {
            productQuantity.dataset.quantity = quantity++
        }
        else if (quantity == stock) {
            quantity = stock
        }
    }
    if (event.target.classList.contains('cartDecrement')) {
        if (quantity > 1) {
            productQuantity.dataset.quantity = quantity--
        }
    }

    productQuantity.textContent = quantity
    productQuantity.setAttribute('data-quantity', quantity.toString())
    return quantity

}