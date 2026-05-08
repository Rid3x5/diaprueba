const sobre = document.getElementById("sobre");

// Abrir el sobre al hacer clic
sobre.addEventListener("click", () => {
    sobre.classList.toggle("abierto");
});

// Lluvia de corazones (Lenta)
function crearCorazon() {
    const corazones = ["❤️", "💖", "💗", "💕"];
    const c = document.createElement("div");
    c.style.position = "absolute";
    c.style.top = "-50px";
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = Math.random() * 10 + 15 + "px";
    c.style.opacity = "0.7";
    c.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
    
    // Animación de caída lenta
    const duracion = Math.random() * 5 + 7; 
    c.style.transition = `transform ${duracion}s linear`;
    
    document.body.appendChild(c);

    // Pequeño truco para activar la animación de CSS mediante JS
    setTimeout(() => {
        c.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
    }, 50);

    // Borrar corazón después de caer
    setTimeout(() => {
        c.remove();
    }, duracion * 1000);
}

setInterval(crearCorazon, 600);