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





