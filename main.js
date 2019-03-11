const videoEl = document.getElementById('video');
navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
        facingMode: 'environment'
    }
})
    .then((stream) => {
        videoEl.srcObject = stream;
        videoEl.play();
    })
    .catch(console.error);