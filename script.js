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