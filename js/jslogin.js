/* Comentários
(Função Procurar e Função Login)
*/

storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"));
var usuarios2 = dadosDoStorage;

function pag_cadastro() {
	document.getElementById("b_cadastro").value
	location.href = "http://localhost/vinilandia/pag/cadastro.html"
}

function pag_sacola() {
	document.getElementById("img_sacola").value
	location.href = "http://localhost/vinilandia/pag/sacola-de-compras.html"
}

function validacaoLogin(){

	var username = document.getElementById("username").value;
	var username_password = document.getElementById("username_password").value;
	var aux = 0;

	for(var i = 0; i< usuarios2.length; i++){
		if(username != usuarios2[i][0]){
			aux++;
			
		}	
	}
	
	if(aux==usuarios2.length){
		usuaritos();
		usuario_login.username.focus();
		return false;
	}
	
	aux=0;

	for(var i = 0; i< usuarios2.length; i++){
		if(username_password != usuarios2[i][2]){
			aux++;
		}	
	}
	
	if(aux==usuarios2.length){
		senhas();
		usuario_senha.username_password.focus();
		return false;
	}

	window.location.href = document.location="http://localhost/vinilandia/index.html";
}

function senhas(){
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Senha não corresponde </div>";
}

function usuaritos(){
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Usuário não cadastrado </div>";
}
