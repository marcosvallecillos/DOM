document.addEventListener("DOMContentLoaded", main);

function main() {
    palabras();
    nulla();
    imagen();
    fondo();
    letra();
    boton();
    hora()
}

function palabras(){
    let parrafo = document.getElementsByTagName("p");

    for (let i = 0; i < parrafo.length; i++) {
        
        let palabras = parrafo[i].innerHTML.split(" ");
        let total = palabras.length;
        palabras.push("<br><b>Total palabras: " + total + "</b></br>");
        parrafo[i].innerHTML = palabras.join(" ");
    }
}
function nulla() {
    let parrafo = document.getElementsByTagName("p");
    for (let i = 0; i < parrafo.length; i++) {
        let palabraNulla = parrafo[i].textContent;
        if (palabraNulla = "nulla") {
        parrafo[i].innerHTML = parrafo[i].innerHTML.replace('nulla', '<a href="http://google.com">nulla</a>');
        }
    }
}

function imagen() {
    let parrafo = document.getElementsByTagName('h1');

    for (let i = 0; i < parrafo.length; i++) {
        let image = document.createElement('img');
        image.src = 'https://lledogrupo.com/wp-content/uploads/2019/01/star-256.png';
        image.style.width = '16px';
        image.style.marginLeft = '10px';

        parrafo[i].appendChild(image);
    }
}

function fondo() {
    let parrafos = document.getElementsByTagName('p');
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener('click', function() {
            let isLight = true; 
            if (this.style.backgroundColor === 'lightblue') {
                isLight = false; 
            }
            this.style.backgroundColor = isLight ? 'lightblue' : 'hsl(120, 73%, 75%)';
        });
    }
}
function letra() {
    let parrafos = document.getElementsByTagName('p');
    
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener('click', function() {
            let tamaño = parseFloat(window.getComputedStyle(this).fontSize);
            this.style.fontSize = (tamaño + 1) + 'px';
            if (tamaño >= tamañoInicial * 2) {
                this.style.fontSize = tamañoInicial + 'px';
            } else {
                this.style.fontSize = '1em';
            }
        });
    }
}

function boton() {
    let botones = document.getElementsByClassName("oculta");

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function () {
            let divContiguo = this.nextElementSibling;
            if (divContiguo.style.display === "none" || divContiguo.style.display === "") {
                divContiguo.style.display = "block";
                this.textContent = "Oculta";
            } else {
                divContiguo.style.display = "none";
                this.textContent = "Mostrar";
            }
        });
    }
}

    function hora(){
        let reloj = document.createElement("div");
        reloj.innerHTML = "00:00:00";
        reloj.id = "reloj";
        reloj.setAttribute("style", "position: absolute; display: none; background-color: red; color: white; border: 1px solid black;");
        document.body.appendChild(reloj);
    
        let parrafos = document.getElementsByTagName("p");
        for (let index = 0; index < parrafos.length; index++) {
            parrafos[index].addEventListener("mouseenter", function (e) {
                let reloj = document.getElementById("reloj");
                reloj.style.display = "block";
                let d = new Date();
                reloj.innerHTML = (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
            });
    
            parrafos[index].addEventListener("mousemove", function (e) {
                let reloj = document.getElementById("reloj");
                reloj.style.left = (e.clientX + 5) + "px";
                reloj.style.top = (e.clientY - 5) + "px";
            });
    
            parrafos[index].addEventListener("mouseleave", function (e) {
                let reloj = document.getElementById("reloj");
                reloj.style.display = "none";
                console.log(e.target, e.currentTarget);
            });
        }
    }
