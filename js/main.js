$(document).ready(function(){
    var contenido = {
        es:{
            body:"Hola! <br> Soy Manki, tu Smart Travel Buddy en Facebook Messenger. Te ayudo con información y recomendaciones de manera gratuita para tus viajes. Escríbeme para comenzar a planear juntos tu viaje."
        },
        en:{
            body:"Hi!<br> I'm Manki, your Smart Travel Buddy on Facebook Messenger, I help you with information and recommendations for your travels for free. Message me to start planning your trip together."
        }
    }
    $('.type').on('click',function(){
        var lang = $(this).attr('id') ;
        console.log(lang)
        if(lang == "es"){
            $('.text').html(contenido.es.body);
            $('#es').addClass('active');
            $('#en').removeClass('active');
        }else if(lang == "en"){
            $('.text').html(contenido.en.body);
            $('#es').removeClass('active');
            $('#en').addClass('active');
        }
    })
})