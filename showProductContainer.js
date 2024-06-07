import { addtocart } from "./addtocart";
import { animationCart } from './animationCart';
import { homeQuantityToggle } from "./homeQuantityToggle";
import { samllCart } from "./smallCart";

const procductContainer = document.querySelector('.procductContainer')
const productTemplet = document.getElementById('productTemplet')

export const showProductContainer = (products) => {
    if (!products) {
        return false
    }

    // let search = document.querySelector('.search')
    // let searchText = search.value.toLowerCase()
    // search.addEventListener('input', () => {
    //     products.filter((cuc) => {
    //         if (cuc.name.toLowerCase().includes(searchText)) {
    //             console.log(cuc);
    //         }
    //     })
    // })


    products.filter((curentElm) => {
        const { id, category, image, name, description, price, stock } = curentElm
        const productColone = document.importNode(productTemplet.content, true);
        productColone.querySelector('#cardValue').setAttribute('id', `card${id}`)
        productColone.querySelector('span').textContent = category
        productColone.querySelector('.productImage').src = image
        productColone.querySelector('.productName').textContent = name
        productColone.querySelector('.productDescribtion').textContent = description
        productColone.querySelector('.productPrice').textContent = `${price}`
        productColone.querySelector('.productDelPrice').textContent = price * 3
        productColone.querySelector('.productStoc').textContent = `Total Stcok : ${stock}`
        productColone.querySelector('.stoctElm').addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock)
        });
        productColone.querySelector('.addTocart').addEventListener('click', (event) => {
            addtocart(event, id, category, image, name, stock)
            animationCart("add", id)
            samllCart()
        });

        procductContainer.append(productColone)

    })
}