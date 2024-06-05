import { getProducarcFLS } from "./getProducarcFLS";
import { reducePrice } from "./reducePrice";
import { updateCartValue } from "./updateCartValue";

export const addToCartQuantityToggle = (event, id, stock) => {
    let AllProdElem = document.querySelector(`#card${id}`);
    let productQuantity = AllProdElem.querySelector('.productQuantity')
    let productPrice = AllProdElem.querySelector('.productPrice')

    let aaLocalStorageProduct = getProducarcFLS()

    if (event.target.className == "cartIncrement") {
        aaLocalStorageProduct.filter((existP) => {
            if (existP.id == id) {
                let price = existP.price / existP.quantity
                // localStorage Part Start

                // quantity part 
                existP.quantity++
                if (existP.quantity >= stock) {
                    existP.quantity = stock
                }

                // price part 
                existP.price = price * existP.quantity
                // localStorage Part End

                // innerHTML Part Start
                productQuantity.innerHTML = existP.quantity
                productPrice.innerHTML = Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumSignificantDigits: 10,
                }).format(existP.price);
                // innerHTML Part End

            }
            if (productQuantity.innerHTML >= existP.stock) {
                productQuantity.innerHTML = stock
            }
        })
        localStorage.setItem('cartProductLS', JSON.stringify(aaLocalStorageProduct));
    }

    if (event.target.className == "cartDecrement") {
        aaLocalStorageProduct.filter((existP) => {
            if (existP.id == id) {
                let price = existP.price / existP.quantity
                // localStorage Part Start

                // quantity part 
                if (existP.quantity > 1) {
                    existP.quantity--
                }

                // price part 
                existP.price = price * existP.quantity
                // localStorage Part End

                // innerHTML Part Start
                productQuantity.innerHTML = existP.quantity
                productPrice.innerHTML = Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumSignificantDigits: 10,
                }).format(existP.price);
                // innerHTML Part End

            }
        })
        localStorage.setItem('cartProductLS', JSON.stringify(aaLocalStorageProduct));
    }

    updateCartValue()
    reducePrice()

}