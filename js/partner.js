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

    $('#send').click(function(){
        var data = {
            name    : $('#nombre').val(),
            email  : $('#correo').val(),
	    company: {
		 extra: {
            numero  : $('#numero').val(),
            comentario  : $('#comentario').val()
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
                if(res.created == true || res.created == "true"){
                    alert("Listo!")
                }else{
                    alert("Falta")
                }        
		    },
                dataType: 'json'
            });
        }else{
            alert('Complete los datos correctamente');
        }
    })
})
