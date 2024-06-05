export const reducePrice = () => {
    let getLocal = JSON.parse(localStorage.getItem('cartProductLS'))
    if (!getLocal) {
        return []
    }
    let totalPrice = getLocal.map((cuc) => {
        return cuc.price;
    }).reduce((accumulator, currentValue) => {
        return accumulator = accumulator + currentValue
    }, 0);

    let tax = 50

    document.querySelector('.totalpPice').innerHTML = Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumSignificantDigits: 10,
    }).format(totalPrice)

    document.querySelector('.Tax').innerHTML = Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumSignificantDigits: 10,
    }).format(tax)

    document.querySelector('.Fainal').innerHTML = Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumSignificantDigits: 10,
    }).format(totalPrice + tax)

}