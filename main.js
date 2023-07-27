console.log("hello world")

document.getElementById("botao").addEventListener("click", (event) => {
    document.querySelectorAll(".NameMe").forEach(h1 => h1.style.color = "#4E9F3D");
    document.querySelectorAll(".button").forEach(btn => btn.style.backgroundColor = "#4E9F3D");
    document.querySelectorAll(".body").forEach(body => body.style.background = "rgb(30, 81, 40)");
    document.querySelectorAll(".ProvPhoto").forEach(img => img.style.boxShadow = "0 0 20px 10px #4E9F3D");
    document.querySelectorAll(".cabeçalho").forEach(header => header.style.backgroundColor = "#4E9F3D");
});

const botaoDownload = document.getElementById("botao-download");
const avisoDownload = document.querySelector(".aviso-download");

botaoDownload.addEventListener("click", function () {
  // Mostrar a mensagem de aviso
  avisoDownload.style.display = "block";

  // Após 2 segundos, esconder a mensagem
  setTimeout(function () {
    avisoDownload.style.display = "none";
  }, 2000); // Tempo de exibição da mensagem (2 segundos)
});