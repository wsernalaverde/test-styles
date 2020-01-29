$(document).ready(() => {
    console.log( 'ready!' )
    console.log('oe')
    setTimeout(() => {
        let containerPoints = document.querySelector('.PCO-info')
        if (containerPoints) containerPoints.innerHTML = '<p><strong>Tu Triple Puntaje</strong> se verá reflejado a los 3 días después de tu compra y te llegará al correo electrónico.</p>'

        let spanTarjeta = document.querySelector('#ctl00_ctl00_NetSiteContentPlaceHolder_NetFulfillmentContentPlaceHolder_lblCCTitle')
        if (spanTarjeta) spanTarjeta.innerHTML = 'TARJETA ÉXITO o CARULLA - MÁSTER CARD <br> <a href="https://www.tuya.com.co/tarjetas" target="_blank" style="color:#6979F8;">¿Aún no la tienes? Adquiérela aquí</a>'
    }, 5000)
})