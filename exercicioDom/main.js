const fieldA = document.getElementById("field-A");
const fieldB = document.getElementById("field-B");
const form = document.getElementById("form-numbers");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const verifiedMessage = document.querySelector(".verified-message");
  const errorMessage = document.querySelector(".error-message");
  const warningMessage = document.querySelector(".warning-message");

  const verifiedTxt = `Verificação completa: ${fieldB.value} é maior que ${fieldA.value}`;
  const errorTxt = `Erro: ${fieldB.value} é menor que ${fieldA.value}`;
  const warningTxt = `Erro: valores dos campos são iguais`;

  if (fieldB.value > fieldA.value) {
    verifiedMessage.innerHTML = verifiedTxt;
    verifiedMessage.style.display = "block";
    errorMessage.style.display = "none";
    warningMessage.style.display = "none";
  } else if (fieldA.value > fieldB.value) {
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
