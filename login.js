function login() {
  const username = document.querySelector("#name");
  localStorage.setItem("userName", username.value);
  window.location.href = "play.html";
}
