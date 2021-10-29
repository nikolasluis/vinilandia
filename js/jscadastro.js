/* Comentários
(Função Procurar e Função CriarConta)
*/
storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"))||"[]";
var usuarios2 = dadosDoStorage;

function pag_login01() {
	document.getElementById("img_login").value;
	location.href = "http://localhost/vinilandia/pag/login.html";
}

function pag_sacola() {
	document.getElementById("img_sacola").value;
	location.href = "http://localhost/vinilandia/pag/sacola-de-compras.html";
}

function pag_login02() {
	document.getElementById("b_login").value;
	location.href = "http://localhost/vinilandia/pag/login.html";
}

function cadastrar(){
	var aux=[];

	var usuario = document.getElementById("usuario").value;
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var confirmarSenha = document.getElementById("confirmarSenha").value;


	for(var i=0; i<usuarios2.length; i++){
		if(usuario == usuarios2[i][0]){
			usuaritos();
			carinha.usuario.focus();
			return false;
		}
	}

	apagarCampoUser();

	for(var i=0; i<usuarios2.length; i++){
		if(email == usuarios2[i][1]){
			emailzito();
			confirmationEmail.email.focus();
			return false;
		}
	}

	apagarCampoMail();

	if(senha!=confirmarSenha){
		senhas();
		senhazinha.confirmarSenha.focus();
		return false;
	}

	aux.push(usuario);
	aux.push(email);
	aux.push(senha);


	if(!(usuarios2 instanceof Array)){
    	usuarios2 = [usuarios2]; 
	}

	usuarios2.push(aux);

	storage.setItem("dados",JSON.stringify(usuarios2));

	console.log(usuarios2);
	window.location.href = document.location="http://localhost/vinilandia/index.html";
}

function senhas(){
	document.getElementById("pass").innerHTML = " ";
	document.getElementById("pass").innerHTML += "<div> Senhas não correspondem - Tente novamente </div>";
}

function usuaritos(){
	document.getElementById("user").innerHTML = " ";
	document.getElementById("user").innerHTML += "<div> Usuário já existente - insira um diferente </div>";
}

function emailzito(){
	document.getElementById("mail").innerHTML = " ";
	document.getElementById("mail").innerHTML += "<div> E-mail já cadastrado - insira um diferente </div>";
}

function apagarCampoUser(){
	document.getElementById("user").innerHTML = " ";
}

function apagarCampoMail(){
	document.getElementById("mail").innerHTML = " ";
}