async function startCamera() {
    const videoElement = document.createElement('video');
    videoElement.setAttribute('autoplay', '');
    videoElement.setAttribute('muted', '');
    videoElement.setAttribute('playsinline', '');
    document.getElementById('camera').appendChild(videoElement);
  
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.srcObject = stream;
    } catch(err) {
      console.error("Error: ", err);
    }
  }
  
  window.onload = () => startCamera();
  