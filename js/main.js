$(document).ready(function(){

    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var contenido = {
        es:{
            body:"¡Hola! <br> Soy Manki, tu Smart Travel Buddy en Facebook Messenger. Te ayudo con información y recomendaciones de manera gratuita para tus viajes. Escríbeme para comenzar a planear juntos tu viaje."
        },
        en:{
            body:"Hi!<br> I'm Manki, your Smart Travel Buddy on Facebook Messenger, I help you with information and recommendations for your travels for free. Message me to start planning your trip together."
        },
        back:[
            "https://www.apuntesdehistoria.net/wp-content/uploads/2016/04/rio-amazonas.jpg",
            "https://www.latinotravel.com.pe/wp-content/uploads/2015/08/Ruinas_majestuosas.jpg",
            "https://s.latamstatic.com/destinosudamerica/wp-content/uploads/2015/09/Calle-de-Cuzco-1024x683.jpg",
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

    $('#send').click(function(){
        var data = {
            name    : $('#nombre').val(),
            email  : $('#correo').val(),
	    company: {
		 extra: {
            numero      : $('#numero').val(),
            comentrario  : $('#comentario').val()
		 },
		 name : $('#empresa').val()
	    }
        }
        var url = "";
        if(data.name != "" && data.empresa != "" && data.correo !="" && data.numero !=""){
            $.ajax({
                type: "POST",
                url: 'https://sprint01.mankiapp.com/partner',
                data: data,
                success: function(res) {
                console.log(res)
                // if(){}        
		    },
                dataType: 'json'
            });
        }else{
            alert('Complete los datos correctamente');
        }
    })
})