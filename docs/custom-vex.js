$(document).ready(() => {
    console.log( 'ready!' )
    setTimeout(() => {
        let containerPoints = document.querySelector('.PCO-info')
        if (containerPoints) containerPoints.innerHTML = '<p>Recuerda que por haber hecho esta compra con Tarjetas Mastercard Éxito y Carulla podrás disfrutar de <strong>tres Puntos Colombia adicionales por cada $1.000</strong>, que se verán reflejados en ocho días.</p>'
    }, 5000)

    setTimeout(() => {        
        let spanTarjeta = document.querySelector('.CFTInfo #ctl00_ctl00_NetSiteContentPlaceHolder_NetFulfillmentContentPlaceHolder_lblCCTitle')
        if (spanTarjeta) spanTarjeta.innerHTML = 'TARJETA ÉXITO o CARULLA - MÁSTER CARD <br> <a href="https://www.tuya.com.co/tarjetas" target="_blank" style="color: #6979F8 !important;font-size: 13px;margin-left: 25px;">¿Aún no la tienes? Adquiérela aquí</a>'

        let spanTarjetaDown = document.querySelector('.divCFTInfo #ctl00_ctl00_NetSiteContentPlaceHolder_NetFulfillmentContentPlaceHolder_lblCCTitle')
        if (spanTarjetaDown) spanTarjetaDown.innerHTML = 'TARJETA ÉXITO o CARULLA - MÁSTER CARD'

        let imgTarjetaPv = document.querySelector('#ctl00_ctl00_NetSiteContentPlaceHolder_NetFulfillmentContentPlaceHolder_liDC .small-5')
        if (imgTarjetaPv) imgTarjetaPv.innerHTML = '<img src="https://www.tuya.com.co/sites/default/files/tarjetas/tarjeta_exito_pv.jpg" style="height: 1.3rem">'

        let imgTarjetaEC = document.querySelector('#ctl00_ctl00_NetSiteContentPlaceHolder_NetFulfillmentContentPlaceHolder_liCC .medium-5')
        if (imgTarjetaEC) imgTarjetaEC.innerHTML = '<img src="https://www.tuya.com.co/sites/default/files/tarjetas/tarjeta_exito_pro.jpg" style="height: 1.3rem;margin-right: 5px;"><img src="https://www.tuya.com.co/sites/default/files/tarjetas/tarjeta_exito_gold.jpg" style="height: 1.3rem;margin-right: 5px;"><img src="https://www.tuya.com.co/sites/default/files/tarjetas/tarjeta_carulla_gold.jpg" style="height: 1.3rem;margin-right: 5px;"><img src="https://www.tuya.com.co/sites/default/files/tarjetas/tarjeta_carulla_black.jpg" style="height: 1.3rem">'
    }, 2000)
})