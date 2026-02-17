
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
document.addEventListener("DOMContentLoaded", function() {

    const boton = document.getElementById("btnAnuncio");
    const modal = document.getElementById("modal");
    const cerrar = document.getElementById("cerrar");

    boton.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

});
