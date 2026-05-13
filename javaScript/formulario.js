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