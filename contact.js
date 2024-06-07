let menu = false

let bars = document.querySelector('.bars')
let small = document.querySelector('.small')

bars.addEventListener('click', () => {
    menu = !menu
    if (menu == true) {
        bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        small.style.display = `block`
        small.classList.add('animationCart2')


        let samllCart = document.querySelector('.samllCart')

        let getLocal = JSON.parse(localStorage.getItem('cartProductLS'))
        let addquantity = getLocal.map((cuc) => {
            return cuc.quantity;
        }).reduce((accumulator, currentValue) => {
            return accumulator = accumulator + currentValue
        }, 0);
        samllCart.innerHTML = `<i class="fa-solid fa-cart-plus"></i> ${addquantity}`
    } else {
        bars.innerHTML = `<i class="fa-solid fa-bars"></i>`
        small.style.display = `none`
    }
})
