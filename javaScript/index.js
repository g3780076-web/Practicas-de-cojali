const italic = document.querySelector(".as");
italic.addEventListener("click", function(){
    const a = document.querySelector("#datospersonales");
    a.style.fontStyle = "italic";
});

const a = document.body;

let count = 0;
const oscuro = document.querySelector(".oscuro");
oscuro.addEventListener("click",function(){
    if (localStorage.getItem("Modo") === "oscuro") {

        localStorage.setItem("Modo", "claro");
        a.style.backgroundColor = "white";
        a.style.color = "black";

    } else {

        localStorage.setItem("Modo", "oscuro");
        a.style.backgroundColor = "rgb(54, 51, 51)";
        a.style.color = "white";
    }
});

const enviar = document.querySelector("#text");
const summit = document.querySelector("#enviar");


function mostrarTexto(){
    let texto = enviar.value;
    let estudios = [texto];

    for(let i = 0; i< estudios.length;i++){
        if(estudios[i]== null){

        }else{
            document.querySelector("#parrafo")
        .innerHTML +=estudios[i]+"<br>";
        }
    }
}





 async function buscarUsuario() {
      const username = document.getElementById("username").value.trim();
      const card = document.getElementById("card");
      const error = document.getElementById("error");

      card.style.display = "none";
      error.style.display = "none";

      if (!username) {
        error.textContent = "⚠️ Debes escribir un usuario";
        error.style.display = "block";
        return;
      }

      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
          throw new Error("Usuario no encontrado");
        }

        const data = await response.json();
        document.getElementById("name").textContent = data.name || data.login;
        document.getElementById("bio").textContent = data.bio || "Sin bio disponible";
        const lista = document.getElementById("repos");
lista.innerHTML = "";

data.forEach(repo => {
  lista.innerHTML += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
});


        card.style.display = "block";

      } catch (err) {
        error.textContent = "❌ " + err.message;
        error.style.display = "block";
      }
    }