$(document).ready(() => {
    console.log( 'ready!' )
    console.log('oe')
    setTimeout(() => {
        let containerPoints = document.querySelector('.PCO-info')
        containerPoints.innerHTML = '<p><strong>Tu Triple Puntaje</strong> se verá reflejado a los 3 días después de tu compra y te llegará al correo electrónico.</p>'
    }, 5000)
})