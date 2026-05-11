const italic = document.querySelector(".as");
italic.addEventListener("click", function(){
    const a = document.querySelector("#datospersonales");
    a.style.fontStyle = "italic";
});

const a = document.body;
    if (localStorage.getItem("Modo") === "oscuro") {
    a.style.backgroundColor="rgb(56, 51, 51)";
    a.style.color="white";
    }else{
        a.style.backgroundColor="white";
        a.style.color="black";
    }

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