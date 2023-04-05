// var nome = document.querySelector("#nome");
// var email = document.querySelector("#email");
// var assunto = document.querySelector("#assunto");
// var mensagem = document.querySelector("#mensagem");

// var botaoEnviar = document.querySelector("contato__botao");
// botaoEnviar.addEventListener("submit", function (event) {
//   event.preventDefault();
//   var error = document.querySelector("#error");
//   error.style.color = "black";
//   var form = document.querySelector("form");
// });
function validarDados(form) {
  event.preventDefault();
  var error = document.querySelector("#error");
  error.style.color = "red";

  var expression = /\w+@\w+\.+[a-z]/;

  var msgError = [];

  if (form.nome.value == "") {
    msgError.push("Preenchimento obrigatório!");
    form.nome.focus();
  } else if (form.email.value == "") {
    msgError.push("Preenchimento obrigatório!");
    form.email.focus();
  } else if (form.assunto.value == "") {
    msgError.push("Preenchimento obrigatório!");
    form.assunto.focus();
  } else if (form.mensagem.value == "") {
    msgError.push("Campo Mensagem é obrigatório.");
    form.mensagem.focus();
  } else if (
    form.email.value.indexOf("@") == -1 ||
    form.email.value.indexOf(".") == -1
  ) {
    msgError.push("Email inválido.");
  }

  error.innerHTML = msgError.join(",");
}

document
  .querySelector("form")
  .addEventListener("submit", (evento) => validarDados(evento.target));

// function validarDados(form) {
//   event.preventDefault();
//   var error = document.querySelector("#error");
//   error.style.color = "black";

//   var expression = /\w+@\w+\.+[a-z]/;

//   var msgError = [];

//   if (form.nome.value == "") {
//     msgError.push("Preenchimento obrigatório!");
//     form.nome.focus();
//   } else if (form.email.value == "") {
//     msgError.push("Preenchimento obrigatório!");
//     form.email.focus();
//   } else if (form.assunto.value == "") {
//     msgError.push("Preenchimento obrigatório!");
//     form.assunto.focus();
//   } else if (
//     form.email.value.indexOf("@") == -1 ||
//     form.email.value.indexOf(".") == -1
//   ) {
//     msgError.push("Email inválido.");
//   }

//   error.innerHTML = msgError.join(",");
// }
// document.querySelector("form").addEventListener("submit", validarDados);

// document
//   .querySelector("form")
//   .addEventListener("submit", (evento) => validarDados(evento.target));
