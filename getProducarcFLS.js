export const getProducarcFLS = () => {
    let cartProducts = JSON.parse(localStorage.getItem('cartProductLS'))
    if (!cartProducts) {
        return []
    }
    return cartProducts
}