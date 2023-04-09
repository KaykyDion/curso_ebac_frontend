const fieldA = document.getElementById("field-A");
const fieldB = document.getElementById("field-B");
const form = document.getElementById("form-numbers");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const verifiedMessage = document.querySelector(".verified-message");
  const errorMessage = document.querySelector(".error-message");
  const warningMessage = document.querySelector(".warning-message");

  const verifiedTxt = `Verificação completa: ${fieldA.value} é maior que ${fieldB.value}`;
  const errorTxt = `Erro: ${fieldA.value} é menor que ${fieldB.value}`;
  const warningTxt = `Erro: valores dos campos são iguais`;

  if (fieldA.value > fieldB.value) {
    verifiedMessage.innerHTML = verifiedTxt;
    verifiedMessage.style.display = "block";
    errorMessage.style.display = "none";
    warningMessage.style.display = "none";
  } else if (fieldB.value > fieldA.value) {
    errorMessage.innerHTML = errorTxt;
    errorMessage.style.display = "block";
    verifiedMessage.style.display = "none";
    warningMessage.style.display = "none";
  } else {
    warningMessage.innerHTML = warningTxt;
    warningMessage.style.display = "block";
    errorMessage.style.display = "none";
    verifiedMessage.style.display = "none";
  }
});
