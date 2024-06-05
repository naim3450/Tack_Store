import { getProducarcFLS } from "./getProducarcFLS";
import { reducePrice } from "./reducePrice";
import { updateCartValue } from "./updateCartValue";


export const removeCart = (event, id) => {
    let cartProduct = getProducarcFLS()
    cartProduct = cartProduct.filter((curentElm) => {
        return curentElm.id !== id
    })
    localStorage.setItem('cartProductLS', JSON.stringify(cartProduct))

    event.target.parentElement.remove();

    updateCartValue()
    reducePrice()
}