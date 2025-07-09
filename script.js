// Mostrar formulario por tipo
function mostrarFormulario(tipo) {
    const formWhatsapp = document.getElementById("form-whatsapp");
    const formEmail = document.getElementById("form-email");

    if (tipo === "whatsapp") {
        formWhatsapp.classList.remove("oculto");
        formEmail.classList.add("oculto");
    } else {
        formEmail.classList.remove("oculto");
        formWhatsapp.classList.add("oculto");
    }
}

// Enviar por WhatsApp
document.getElementById("form-whatsapp").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("wa-nombre").value;
    const email = document.getElementById("wa-email").value;
    const mensaje = document.getElementById("wa-mensaje").value;
    const texto = `Hola, soy ${nombre}. Mi correo es ${email}. Quiero consultarte: ${mensaje}`;
    const telefono = "5491127755747";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});

// Acordeón: abrir uno a la vez
const acordeonItems = document.querySelectorAll(".acordeon .item");

acordeonItems.forEach((item) => {
    const btn = item.querySelector(".titulo");
    btn.addEventListener("click", () => {
        acordeonItems.forEach((el) => {
            const contenido = el.querySelector(".contenido");
            if (el === item) {
                contenido.classList.toggle("activo");
            } else {
                contenido.classList.remove("activo");
            }
        });
    });
});

// Estrellas fugaces
function crearEstrellaFugaz() {
    const estrella = document.createElement("div");
    estrella.classList.add("shooting-star");

    estrella.style.top = Math.random() * 60 + "%";
    estrella.style.left = (60 + Math.random() * 30) + "%";
    estrella.style.animationDelay = Math.random() * 10 + "s";

    document.querySelector(".particle-background").appendChild(estrella);

    setTimeout(() => estrella.remove(), 2000);
}

setInterval(crearEstrellaFugaz, 4000);
