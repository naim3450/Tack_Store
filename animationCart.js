export const animationCart = (actionType, id) => {
    let toast = document.createElement('div')
    toast.classList.add('animationCart')

    if (actionType === "remove") {
        toast.innerHTML = `Product with ID ${id} has been remove`
    }
    else {
        toast.innerHTML = `Product with ID ${id} has been added`
    }

    document.body.append(toast)
    setTimeout(() => {
        toast.remove()
    }, 1500);
}