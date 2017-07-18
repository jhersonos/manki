$(document).ready(function(){
    var contenido = {
        es:{
            body:"¡Hola! <br> Soy Manki, tu Smart Travel Buddy en Facebook Messenger. Te ayudo con información y recomendaciones de manera gratuita para tus viajes. Escríbeme para comenzar a planear juntos tu viaje."
        },
        en:{
            body:"Hi!<br> I'm Manki, your Smart Travel Buddy on Facebook Messenger, I help you with information and recommendations for your travels for free. Message me to start planning your trip together."
        },
        back:[
            "http://www.latinotravel.com.pe/wp-content/uploads/2015/08/Ruinas_majestuosas.jpg",
            "http://www.latinotravel.com.pe/wp-content/uploads/2015/08/Ruinas_majestuosas.jpg",
            "http://www.viajestdh.com.ar/wp-content/uploads/cuzco-plaza-armas.jpg",
            "https://s.latamstatic.com/destinosudamerica/wp-content/uploads/2015/09/Calle-de-Cuzco-1024x683.jpg"
        ]
    }
    function random(){
        var x = Math.floor((Math.random() * 3) + 1);
        var str = contenido.back[x];
        $('body .container .bg').css('background-image','url('+str+')');
    }
    random();
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