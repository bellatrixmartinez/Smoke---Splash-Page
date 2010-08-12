$(document).ready(function(){
  $("#formu").validate();
});

$(document).ready(function(){
    $("#formu").validate({
       rules: {
         nombre: "required",
         colores: "required",
         telefono: "required",
         email: {
           required: true,
           email: true
         }
       },
       messages: {
         nombre: "¿Cual es tu nombre?",
         colores: "¿Que colores quieres?",
         telefono: "¿Cual es tu telefono?",
         email: {
           required: "Necesitamos tu email para contactarte",
           email: "El formato del email tiene que ser  nombre@dominio.com"
         }
       }
    })
  });
  
$(function() {
	var select = $("#cantidad");
	var slider = $('<div id="slider"></div>').insertAfter("#cantidad_block").slider({
		min: 1,
		max: 40,
		range: "min",
		value: select[0].selectedIndex + 1,
		slide: function(event, ui) {
			select[0].selectedIndex = ui.value - 1;
		}
	});
	$("#cantidad").click(function() {
		slider.slider("value", this.selectedIndex + 1);
	});
});





function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 7000 );
});


$(document).ready(function(){	
	$("#slideros").easySlider({
		auto: false,
		continuous: true,
		numeric: true,
		firstShow: true
	});
  $("#slideros-reciclable").easySlider({
    auto: false,
    continuous: true,
    numeric: true,
    firstShow: true

  });
});


$(document).ready(function() {
	if (document.location.href.match("reciclables")){
		$('#tipo').attr('value', 'reciclables');
		
		var d = document.getElementById("colores");
		d.parentNode.removeChild(d);
		
		var f = document.getElementById("tipo");
		f.parentNode.removeChild(f);
		
		var drop_down = " <label>¿Que modelo te interesa?</label><br/><select id='colores' name='colores' class='drop_cantidad cat_textbox required'><option value='grandes'>Grandes</option><option value='medianas'>Medianas</option><option value='pouch'>Pouch</option><option value='monederos'>Monederos</option><option value='pequenas'>Pequeñas</option></select><input type='hidden' name='tipo' id='tipo' value='reciclables'>"

		document.getElementById('colores_div').innerHTML = drop_down		
	}
});
