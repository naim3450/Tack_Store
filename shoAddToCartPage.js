import products from './Templet.json'
import { addToCartQuantityToggle } from './addToCartQuantityToggle';
import { animationCart } from './animationCart';
import { getProducarcFLS } from './getProducarcFLS';
import { reducePrice } from './reducePrice';
import { removeCart } from './remove';
import { updateCartValue } from "./updateCartValue"

let cartProduct = getProducarcFLS()

// let copeyproduct = [...new Set(cartProduct)]


let productCartContainer = document.querySelector('.productCartContainer')

const productTemplet = document.querySelector('#productTemplet')

updateCartValue()

cartProduct.filter((element) => {

    let { id, category, image, name, quantity, price, stock } = element;

    let coloneAddProdct = document.importNode(productTemplet.content, true);

    coloneAddProdct.querySelector('#cardValue').setAttribute('id', `card${id}`)
    coloneAddProdct.querySelector('span').textContent = category
    coloneAddProdct.querySelector('.productImage').src = image
    coloneAddProdct.querySelector('.productName').textContent = name
    coloneAddProdct.querySelector('.productQuantity').textContent = quantity
    coloneAddProdct.querySelector('.productPrice').textContent = Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumSignificantDigits: 10,
    }).format(price);

    coloneAddProdct.querySelector('.stoctElm').addEventListener('click', (event) => {
        addToCartQuantityToggle(event, id, stock)
    })

    // remove part start
    coloneAddProdct.querySelector('.removeCart').addEventListener('click', (event) => {
        removeCart(event, id)
        animationCart("remove", id)

    });
    // remove part end
    productCartContainer.append(coloneAddProdct)


})

reducePrice()


