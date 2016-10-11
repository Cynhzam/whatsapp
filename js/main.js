window.addEventListener("load", function(){
	
	var avatar = document.getElementsByClassName("avatar");
	var inputEnviar = document.getElementById("mensajes");
	
	inputEnviar.addEventListener("keyup", function(e){
		e.preventDefault();
		if(event.keyCode == 13){
			publicar();
			inputEnviar.value = "";
		}
	});

	function publicar(){
		var containerChat = document.getElementById("chat");
		var container = document.createElement("div");
		var nuevoMensaje = document.createElement("div");
		var texto = document.createElement("p");
		var hora = document.createElement("div");
		var horaPub = horaPubli();

		container.classList.add("w-message", "w-message-out");
		nuevoMensaje.classList.add("w-message-text");
		hora.classList.add("time");

		containerChat.appendChild(container);
		container.appendChild(nuevoMensaje);
		nuevoMensaje.appendChild(texto);
		nuevoMensaje.appendChild(hora);

		texto.innerText = inputEnviar.value;
		hora.innerText = horaPub;
	}


	function horaPubli(){
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		var horaPub = hora + ":" + minuto;
		return horaPub;
	}

});
	


		













	
