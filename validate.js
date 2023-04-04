function validarDados() {
  event.preventDefault();
  var error = document.querySelector("#error");
  error.style.color = "black";

  var expression = /\w+@\w+\.+[a-z]/;

  var msgError = [];

  if (document.form.nome.value == "") {
    msgError.push("Preenchimento obrigatório!");
    document.form.nome.focus();
  } else if (document.form.email.value == "") {
    msgError.push("Preenchimento obrigatório!");
    document.form.email.focus();
  } else if (document.form.assunto.value == "") {
    msgError.push("Preenchimento obrigatório!");
    document.form.assunto.focus();
  } else if (
    document.form.textarea.value == "" ||
    document.form.textarea.value.length < 50
  ) {
    msgError.push(
      "Campo Mensagem é obrigatório e deve conter pelo menos 50 caracteres."
    );
    document.form.textarea.focus();
  } else if (
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
  ) {
    msgError.push("E-mail inválido!");
  }

  error.innerHTML = msgError.join(",");
}
document.querySelector("form").addEventListener("submit", validarDados);
