function alternarVisibilidad() {
    const enlace = document.getElementById('Mostrar');
    const parrafo = document.getElementById('Salida');
    
    if (parrafo.style.display === 'none' || parrafo.style.display === '') {
        parrafo.style.display = 'block';
        enlace.textContent = 'Ocultar';
    } else {
        parrafo.style.display = 'none';
        enlace.textContent = 'Mostrar';
    }
}
