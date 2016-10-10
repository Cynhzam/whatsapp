window.addEventListener("load", function(){
	
	var contenedor = document.getElementById("chat");
	var input = document.getElementById("mensajes");
	
	input.addEventListener("click", function(e){
		e.preventDefault();
		var nuevoMensaje = document.createElement("div");
		var mensaje = document.createElement("p");
		var tiempo = document.createElement("div");
		
		nuevoMensaje.classList.add("w-message2");
		tiempo.classList.add("time");
		
	});
});