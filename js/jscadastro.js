/* Comentários
(Função Procurar e Função CriarConta)
*/

usuarios=[];

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

var usuarios = [];

function cadastrar(){
	var aux=[];

	var usuario = document.getElementById("usuario").value;
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var confirmarSenha = document.getElementById("confirmarSenha").value;

	if(senha!=confirmarSenha){
		senhas();
		senhazinha.confirmarSenha.focus();
		return false;
	}

	aux.push(usuario);
	aux.push(email);
	aux.push(senha);
	alert("cadastro realizado");

	usuarios.push("aux");
}

function senhas(){
	document.getElementById("pass").innerHTML = " ";
	document.getElementById("pass").innerHTML += "<div> Senhas não correspondem - Tente novamente </div>";

}