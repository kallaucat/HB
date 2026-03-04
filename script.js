function crearParticulas() {
    const contenedor = document.getElementById('particle-container');
    const simbolos = ['❤️', '✨', '🎂', '💻', '🌸', '🎉']; 
    
    // Crea 15 partículas por cada ciclo
    for (let i = 0; i < 15; i++) {
        const particula = document.createElement('span');
        particula.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
        particula.className = 'particula';
        
        particula.style.left = Math.random() * 100 + 'vw';
        particula.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particula.style.opacity = Math.random() * 0.5 + 0.5;
        particula.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        contenedor.appendChild(particula);
        
        // Elimina el elemento después de que cae para no gastar memoria
        setTimeout(() => {
            particula.remove();
        }, 6000);
    }
}

// Inicia la lluvia cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    crearParticulas(); // Primera oleada
    setInterval(crearParticulas, 2500); // Nuevas oleadas cada 2.5 segundos
});

// Mensaje secreto en la consola para Gris
console.log("%c ¡FELIZ CUMPLEAÑOS GRIS! ", "color: #ff4d4d; font-size: 30px; font-weight: bold;");
console.log("Acceso concedido a los archivos del corazón de Adrian.");