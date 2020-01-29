$(document).ready(() => {
    console.log( 'ready!' )
    console.log('oe')
    setTimeout(() => {
        let containerPoints = document.querySelector('.PCO-info')
        containerPoints.innerHTML = 'Tu Triple Puntaje se verá reflejado a los 3 días después de tu compra y te llegará al correo electrónico.'
    }, 3000)
})