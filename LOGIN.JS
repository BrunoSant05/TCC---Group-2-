
window.addEventListener('load', function() {
    document.body.classList.add('fade-in-active');
});

document.body.classList.add('fade-in');

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('senha');
    const eyeOpen = document.getElementById('eye-open');
    const eyeClosed = document.getElementById('eye-closed');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
}

document.getElementById('eye-icon').addEventListener('click', togglePasswordVisibility);
 
document.addEventListener('mousemove', function(event) {
    const eye = document.getElementById('eye-icon');
    const pupil = document.getElementById('pupil');
    
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    
    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;
    
    const angle = Math.atan2(deltaY, deltaX);

    const distance = Math.min(4, Math.hypot(deltaX, deltaY));

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupil.setAttribute('cx', 12 + pupilX);
    pupil.setAttribute('cy', 12 + pupilY);
});




//Agora faça API em PHP completa para o usuário efetuar o login direto no Gmail ou no Facebook




