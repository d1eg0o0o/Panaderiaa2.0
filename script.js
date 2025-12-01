let modal = document.getElementById("modal");
let btnModal = document.querySelector(".btn-modal");

btnModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

let cerrar = document.querySelector(".cerrar-modal");
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

btnModal.addEventListener("contextmenu", e => {
    e.preventDefault();
    modal.style.display = "flex";
});

let botones = document.querySelectorAll(".acordeon-btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let contenido = boton.nextElementSibling;
        if (contenido.style.display === "block") {
            contenido.style.display = "none";
        } else {
            contenido.style.display = "block";
        }
    });
});

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let contenido = boton.nextElementSibling;
        contenido.classList.toggle("mostrar");
    });
});

let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("resaltar");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("resaltar");
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("animar");
});

let burbujas = document.querySelectorAll(".burbujas");

burbujas.forEach(b => {
    b.addEventListener("click", () => {
        b.classList.add("resaltar");
        setTimeout(() => b.classList.remove("resaltar"), 300);
    });
});

if (!modal || !btnModal) {
    console.warn("Modal o botón modal no encontrado");
}