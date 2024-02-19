document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.github.com/users/KaykyDion")
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Erro no momento da requisição: URL inválida!");
      } else {
        return response.json();
      }
    })
    .then((json) => {
      document.querySelector(".profile-avatar").src = json.avatar_url;
      document.querySelector(".profile-name").innerText = json.login;
      document.querySelector(".profile-username").innerText = `@${json.name}`;
      document.querySelector(".repositories").innerText = json.public_repos;
      document.querySelector(".followers").innerText = json.followers;
      document.querySelector(".following").innerText = json.following;
      document.querySelector(".profile-link").href = json.html_url;
    });
});
