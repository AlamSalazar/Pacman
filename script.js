var miBody;
var nombre;
var activado = false;
var rebotador = document.getElementById("rebotador");
var blinky = false, pinky = false, inky = false, clyde = false;
var who;

window.onload = function () {
    var imag1 = document.getElementById("imag1");
    var imag2 = document.getElementById("imag2");
    var imag3 = document.getElementById("imag3");
    var imag4 = document.getElementById("imag4");
    var imag5 = document.getElementById("imag5");

    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondoP");
}
function desactivar() {
    blinky = false;
    pinky = false;
    inky = false;
    clyde = false;
}
function cualEs() {
    if (blinky) who = "blinky.png"
    else if (inky) who = "inky.png"
    else if (pinky) who = "pinky.png"
    else if (clyde) who = "clyde.png"
}
function seleccionado() {
    miBody[0].setAttribute("class", "fondoP");
    document.getElementById("nombre").innerHTML = "";
    document.getElementById("fantasma").innerHTML = "";
    rebotador.setAttribute("src", "./images/" + who )
    rebotador.style.opacity = "1";
    activado = true;
    mueve();
}



//BLINKY
imag1.onmousedown = function () {
    miBody[0].setAttribute("class", "fondo2");
    desactivar();
    blinky = true;
    cualEs();
    document.getElementById("nombre").innerHTML = "<h1 class='letras' id='BYNKY'>BLINKY</h1>";
    document.getElementById("fantasma").innerHTML = "<img src='./images/" + who + "' id='imag5'>";
    rebotador.style.opacity = "0";

    activado = false;
}
imag1.onmouseup = function () {
    seleccionado();
}
//PINKY
imag2.onmousedown = function () {
    miBody[0].setAttribute("class", "fondo2");
    desactivar();
    pinky = true;
    cualEs();
    document.getElementById("nombre").innerHTML = "<h1 class='letras' id='PINKY'>PINKY</h1>";
    document.getElementById("fantasma").innerHTML = "<img src='./images/" + who + "' id='imag5'>";
    rebotador.style.opacity = "0";

    activado = false;
}
imag2.onmouseup = function () {
    seleccionado();
}
//INKY
imag3.onmousedown = function () {
    miBody[0].setAttribute("class", "fondo2");
    desactivar();
    inky = true;
    cualEs();
    document.getElementById("nombre").innerHTML = "<h1 class='letras' id='INKY'>INKY</h1>";
    document.getElementById("fantasma").innerHTML = "<img src='./images/" + who + "' id='imag5'>";
    rebotador.style.opacity = "0";

    activado = false;
}
imag3.onmouseup = function () {
    seleccionado();
}
//CLYDE
imag4.onmousedown = function () {
    miBody[0].setAttribute("class", "fondo2");
    desactivar();
    clyde = true;
    cualEs();
    document.getElementById("nombre").innerHTML = "<h1 class='letras' id='CLYDE'>CLYDE</h1>";
    document.getElementById("fantasma").innerHTML = "<img src='./images/" + who + "' id='imag5'>";
    rebotador.style.opacity = "0";
    activado = false;
}
imag4.onmouseup = function () {
    seleccionado();
}
var mouseX, mouseY;
const punto = document.querySelector("#circulo");
const mira = document.querySelector("#mira");
punto.addEventListener('mousemove', () => {
    mouseX = Math.floor(event.clientX - punto.getBoundingClientRect().left) * 2;
    mouseY = Math.floor(event.clientY - punto.getBoundingClientRect().top) * 2;
    mira.style.opacity = "1";
    mira.style.left = mouseX + "px";
    mira.style.top = mouseY + "px";
    //console.log("X: " + mouseX + "   Y: " + mouseY);
    //console.log("X: " + x + "   Y: " + y);
    if (activado)rebotador.setAttribute("src", "./images/asustado.png")
});
punto.addEventListener("mouseout", () => {
    mira.style.opacity = "0";
    rebotador.setAttribute("src", "./images/" + who )
});
punto.onmousedown = function () {
    muerte();
}
punto.onmouseup = function () {

}
//sección que se hace cargo del rebote

const contenedor = document.querySelector(".contenedor");
const img = document.querySelector("#rebotador");

const rebWidth = img.clientWidth;
const rebHeight = img.clientHeight;
const contWidth = contenedor.clientWidth - rebWidth;
const contHeight = contenedor.clientHeight - rebHeight;

let x, y, speedX, speedY;
function mueve() {  //Inicializa la animación y sobre todo, da valores aleatorios para la aparicion y direccion del fantasma
    const aleX = Math.floor(Math.random() * (250 - 100) + 100);
    const aleY = Math.floor(Math.random() * (250 - 100) + 100);
    const aleDirX = Math.random() < 0.5 ? -1 : 1;
    const aleDirY = Math.random() < 0.5 ? -1 : 1;
    x = aleX;
    y = aleY;
    speedX = 2 * aleDirX;
    speedY = 2 * aleDirY;
    animacion();
}   //la animación de desplazamiento diagonal de los fantasmas
function animacion() {
    if (activado) {
        x += speedX;
        y += speedY;
        if (x > contWidth || x < 0) speedX = -speedX;
        if (y > contHeight || y < 0) speedY = -speedY;
        img.style.left = x + "px";
        img.style.top = y + "px";
        requestAnimationFrame(animacion);
    } else { cancelAnimationFrame(animacion); }
}
function muerte() {
    if (activado) {
        if (mouseX - 25 <= x + 25 && mouseX + 25 >= x - 25) {
            if (mouseY - 25 <= y + 25 && mouseY + 25 >= y - 25) {
                activado = false;
                who = "fuego.webp";
                rebotador.setAttribute("src", "./images/"+who)
            }
        }
    }
}




