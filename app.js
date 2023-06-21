console.log('Conectado')
const galeria = document.getElementById('galeria');
window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const decimalX = mouseX / window.innerWidth;
    const decimalY = mouseY / window.innerHeight;

    const maxX = galeria.offsetWidth - window.innerWidth;
    const maxY = galeria.offsetHeight - window.innerHeight;

    const panX = maxX * decimalX * -1;
    const panY = maxY * decimalY * -1;

    galeria.animate({
        transform: `translate(${panX}px,  ${panY}px)`

    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })



}