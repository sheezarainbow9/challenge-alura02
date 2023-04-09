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
  .addEventListener("submit", (evento) => {
 const formulario = evento.target;
 validarDados(formulario);
 formulario.nome.value = "";
 formulario.email.value = "";
 formulario.assunto.value = "";
 formulario.mensagem.value = "";
  })