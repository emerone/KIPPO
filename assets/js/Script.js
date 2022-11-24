console.log(document.querySelector('body'))

const cardsElements = document.querySelectorAll('.cards')
const btnMeh = document.querySelector('.bxs-meh-alt')
const btnHeart = document.querySelector('.bxs-heart')

let curentActive = 0

const heartFunction = () => {
    const lastElement = cardsElements.length - 1
    const nextActive = curentActive == lastElement ? 0 : curentActive + 1
    
    cardsElements[curentActive].setAttribute('statut', 'not-active')
    cardsElements[nextActive].setAttribute('statut', 'active')

    curentActive == lastElement ? curentActive = 0 : curentActive++
}

const mehFunction = () => {
    const lastElement = cardsElements.length - 1
    const nextActive = curentActive == 0 ? lastElement : curentActive - 1
    
    cardsElements[curentActive].setAttribute('statut', 'not-active')
    cardsElements[nextActive].setAttribute('statut', 'active')

    curentActive == 0 ? curentActive = lastElement : curentActive--
}

btnHeart.addEventListener('click', heartFunction)

btnMeh.addEventListener('click', mehFunction)