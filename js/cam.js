// Variável que guarda o modo de câmera atual ('environment' para traseira, 'user' para frontal)
let currentFacingMode = 'environment';

// Elemento de vídeo onde será exibida a prévia da câmera
const videoPreview = document.querySelector('#video-preview');

// Função para iniciar a câmera com um determinado modo (padrão: 'environment')
const startCamera = (facingMode = 'environment') => {
    stopCamera(); // Para a câmera antes de iniciar novamente

    // Obtém acesso à câmera do usuário
    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode, // Modo de câmera (traseira ou frontal)
            width: {
                max: 1980, // Largura máxima desejada
                ideal: 1024 // Largura ideal desejada
            },
            height: {
                max: 1080, // Altura máxima desejada
                ideal: 768 // Altura ideal desejada
            }
        }
    }).then((stream) => {
        videoPreview.srcObject = stream; // Define o stream da câmera para o elemento de vídeo
    })
}

// Função para parar a câmera
const stopCamera = () => {
    if (videoPreview.srcObject) { // Verifica se há um stream de vídeo ativo
        const stream = videoPreview.srcObject;
        stream.getTracks().forEach((track) => track.stop()); // Para todos os tracks do stream
    }
}

// Botão para capturar uma foto da câmera
const btnCamera = document.querySelector('#btn-camera');
const canvas = document.querySelector('#canvas');
const videoPreviewContainer = document.querySelector('#video-preview-container');
const photoPreviewContainer = document.querySelector('#photo-preview-container');
const photoPreview = document.querySelector('#photo-preview');
const dialogCamera = document.querySelector('#dialog-camera');

btnCamera.addEventListener('click', () => {
    canvas.width = videoPreview.videoWidth; // Define a largura do canvas como a largura do vídeo
    canvas.height = videoPreview.videoHeight; // Define a altura do canvas como a altura do vídeo
    const context = canvas.getContext('2d');

    // Desenha o frame atual do vídeo no canvas
    context.drawImage(videoPreview, 0, 0);

    // Converte o conteúdo do canvas em um Blob (formato de arquivo)
    canvas.toBlob((blob) => {
        // Define a URL do Blob como a origem da imagem na prévia da foto
        photoPreview.src = URL.createObjectURL(blob);
        photoPreviewContainer.classList.replace('hidden', 'flex'); // Mostra o container da prévia da foto
        videoPreviewContainer.classList.toggle('hidden'); // Esconde o container da prévia do vídeo
    });
});

// Botão para alternar entre câmera frontal e traseira
const btnToggleCamera = document.querySelector('#btn-toggle-camera');
btnToggleCamera.addEventListener('click', () => {
    // Alterna entre 'environment' (traseira) e 'user' (frontal)
    currentFacingMode = (currentFacingMode == 'environment') ? 'user' : 'environment';
    startCamera(currentFacingMode); // Reinicia a câmera com o novo modo
})

// Botão para abrir o diálogo da câmera
const btnOpenCamera = document.querySelector('#btn-open-camera');
btnOpenCamera.addEventListener('click', () => {
    dialogCamera.classList.toggle('hidden'); // Alterna a visibilidade do diálogo da câmera
    startCamera(currentFacingMode); // Inicia a câmera com o modo atual
})

// Botão para fechar o diálogo da câmera
const btnCloseDialog = document.querySelector('#btn-close-dialog');
btnCloseDialog.addEventListener('click', () => {
    dialogCamera.classList.toggle('hidden'); // Alterna a visibilidade do diálogo da câmera
    stopCamera(); // Para a câmera
});

// Botão para repetir a captura de foto
const btnRepeat = document.querySelector('#btn-repeat');
btnRepeat.addEventListener('click', () => {
    photoPreview.src = ''; // Limpa a prévia da foto
    photoPreviewContainer.classList.replace('flex', 'hidden'); // Esconde o container da prévia da foto
    videoPreviewContainer.classList.toggle('hidden'); // Mostra o container da prévia do vídeo
});

// Botão de OK após a captura da foto
const btnOk = document.querySelector('#btn-ok');
btnOk.addEventListener('click', () => {
    dialogCamera.classList.toggle('hidden'); // Alterna a visibilidade do diálogo da câmera
    photoPreviewContainer.classList.replace('flex', 'hidden'); // Esconde o container da prévia da foto
    videoPreviewContainer.classList.toggle('hidden'); // Mostra o container da prévia do vídeo
    stopCamera(); // Para a câmera
});
