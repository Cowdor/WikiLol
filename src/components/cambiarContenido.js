export function cambiarContenido(videoUrl, text) {
    const videoElement = document.getElementById('videoDisplay');
    const descriptionElement = document.getElementById('descripcion');
    
    if (videoElement && descriptionElement) {
      videoElement.src = videoUrl;
      videoElement.load();
      descriptionElement.textContent = text;
    } else {
      console.error('Los elementos videoDisplay o descripcion no existen en el DOM.');
    }
  }
  