const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal-btn');

modalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onEscapeClick);

function closeModal() {
    backdrop.classList.add('is-hidden'); 
};

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
};

function onEscapeClick(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    
    if(isEscKey) {
        closeModal();
    }
};

setTimeout(() => {
    console.log("modal");
    backdrop.classList.remove('is-hidden'); 
}, 2000);