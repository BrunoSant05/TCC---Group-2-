

window.addEventListener('load', function() {
    document.body.classList.add('fade-in-active');
});

document.body.classList.add('fade-in');






$(document).ready(function(){
    $('#telefone').inputmask('+99 (99) 99999-9999');
    $('#cpf').inputmask('999.999.999-99');

    $('#data_nascimento').on('change', function() {
        const dataNascimento = new Date(this.value);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        if (idade >= 0) {
            $('#idade').text(`${idade} anos`);
        } else {
            $('#idade').text('');
        }
    });
});

document.getElementById('upload').onchange = function (e) {
    var reader = new FileReader();
    reader.onload = function () {
        document.getElementById('foto').innerHTML = '<img src="' + reader.result + '" alt="foto_feita">';
    }
    reader.readAsDataURL(e.target.files[0]);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 ||
        /^(.)\1+$/.test(cpf)) return false;
    
    var soma = 0, resto;

    for (var i = 1; i <= 9; i++)
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (var i = 1; i <= 10; i++)
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;

    return true;
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar_senha').value;
    
    var emailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValido.test(email)) {
        event.preventDefault();
        alert('Por favor, forneça um e-mail válido.');
    }

    if (!validarCPF(cpf)) {
        event.preventDefault();
        alert('Por favor, insira um CPF válido.');
    }

    if (senha.length <8) {
        event.preventDefault();
        alert('A senha deve ter pelo menos 8 caracteres.');
    }

    if (senha !== confirmarSenha) {
        event.preventDefault();
        alert('A senha e a confirmação de senha devem ser iguais.');
    }
});

const usuarioInput = document.getElementById('usuario');
usuarioInput.addEventListener('input', () => {
  const usuarioValue = usuarioInput.value;
  const containsNumber = /\d/.test(usuarioValue);
  const containsSpace = /\s/.test(usuarioValue);

  if (!containsNumber || containsSpace) {
    usuarioInput.setCustomValidity('O campo de usuário deve conter pelo menos um número e não pode conter espaços.');
  } else {
    usuarioInput.setCustomValidity('');
  }
});


function moverPupila(eyeId, pupilId, event) {
    const eye = document.getElementById(eyeId);
    const pupil = document.getElementById(pupilId);
    
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    
    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;
    
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(12, Math.hypot(deltaX, deltaY));
    
    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupil.setAttribute('cx', 12 + pupilX);
    pupil.setAttribute('cy', 12 + pupilY);
}


document.addEventListener('mousemove', function(event) {
    moverPupila('olho_fechado_senha', 'pupil_senha', event);
    moverPupila('olho_fechado_confirmar_senha', 'pupil_confirmar', event);
});

// 
function togglePasswordVisibility(passwordFieldId, eyeOpenId, eyeClosedId) {
    const passwordInput = document.getElementById(passwordFieldId);
    const eyeOpen = document.getElementById(eyeOpenId);
    const eyeClosed = document.getElementById(eyeClosedId);
 
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


document.getElementById('olho_senha').addEventListener('click', function() {
    togglePasswordVisibility('senha', 'olho_fechado_senha', 'olho_aberto_senha');
});


document.getElementById('olho_confirmar_senha').addEventListener('click', function() {
    togglePasswordVisibility('confirmar_senha', 'olho_fechado_confirmar_senha', 'olho_aberto_confirmar_senha');
});


document.addEventListener('mousemove', function(event) {
    const eye = document.getElementById('olho_senha');
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


document.addEventListener('mousemove', function(event) {
    const eye = document.getElementById('olho_confirmar_senha');
    const pupil = document.getElementById('pupil_confirmar')
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
