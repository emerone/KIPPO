console.log(document.querySelector('body'))

const cardsElements = document.querySelectorAll('.cards')
const btnMeh = document.querySelector('.bxs-meh-alt')
const btnHeart = document.querySelector('.bxs-heart')

let curentActive = 0

const heartFunction = () => {
    const lastElement = cardsElements.length - 1
    const nextActive = curentActive == lastElement ? 0 : curentActive + 1
    
    cardsElements[curentActive].classList.add('to-a')
    cardsElements[nextActive].classList.add('from-b')

    setTimeout(() => {
        cardsElements[curentActive].classList.remove('to-a')
        cardsElements[curentActive].setAttribute('statut', 'not-active')
        cardsElements[nextActive].setAttribute('statut', 'active')
        setTimeout(() => {
            cardsElements[nextActive].classList.remove('from-b')
            setTimeout(() => {
                btnHeart.addEventListener('click', heartFunction,{once: true})
                curentActive == lastElement ? curentActive = 0 : curentActive++
            }, 25);
        }, 25);
    }, 425);

}

const mehFunction = () => {
    const lastElement = cardsElements.length - 1
    const nextActive = curentActive == 0 ? lastElement : curentActive - 1
    
    cardsElements[curentActive].classList.add('to-b')
    cardsElements[nextActive].classList.add('from-a')

    setTimeout(() => {
        cardsElements[curentActive].classList.remove('to-b')
        cardsElements[curentActive].setAttribute('statut', 'not-active')
        cardsElements[nextActive].setAttribute('statut', 'active')
        setTimeout(() => {
            cardsElements[nextActive].classList.remove('from-a')
            setTimeout(() => {
                btnMeh.addEventListener('click', mehFunction,{once: true})
                curentActive == 0 ? curentActive = lastElement : curentActive--
            }, 25);
        }, 25);
    }, 425);

}

btnHeart.addEventListener('click', heartFunction,{once: true})

btnMeh.addEventListener('click', mehFunction,{once: true})