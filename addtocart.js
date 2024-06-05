import { getProducarcFLS } from "./getProducarcFLS";
import { updateCartValue } from "./updateCartValue";

export const addtocart = (event, id, category, image, name, stock) => {
    let aaLocalStorageProduct = getProducarcFLS()

    let currentProdElem = document.querySelector(`#card${id}`)
    let quantity = Number(currentProdElem.querySelector('.productQuantity').textContent);
    let price = Number(currentProdElem.querySelector('.productPrice').textContent);
    let updatePrice = price

    let existingProduct = aaLocalStorageProduct.find((curentElm) => curentElm.id === id)
    if (existingProduct) {

        aaLocalStorageProduct.filter((existP) => {
            if (existP.id == id) {
                quantity = existP.quantity + quantity
                price = existP.price = price * quantity

                existP.quantity = quantity
                existP.price = price

                if (existP.quantity >= existP.stock) {
                    existP.quantity = stock
                    existP.price = stock * updatePrice
                }
            }
        })

        localStorage.setItem('cartProductLS', JSON.stringify(aaLocalStorageProduct));
    }

    if (!existingProduct) {
        quantity = quantity
        price = price * quantity
        aaLocalStorageProduct.push({ id, quantity, price, category, image, name, stock })

        localStorage.setItem('cartProductLS', JSON.stringify(aaLocalStorageProduct));
    }

    updateCartValue()

}