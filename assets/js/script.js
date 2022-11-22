
/*------------------Validadorers------------------*/
let validaEmail = false;
let validaSenha = false;


/*----------------------Email--------------------------*/

let email = document.querySelector('#inputEmail');
let erroEmail = document.querySelector('#erroEmail');

function validarEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {erroEmail.innerHTML = 'Email Inválido'
    validaEmail = false;
    }else{
        erroEmail.innerHTML = '';
        validaEmail = true;
    }
}

/*----------------------Senha--------------------------*/

let senha = document.querySelector('#inputSenha');
let erroSenha = document.querySelector('#erroSenha');

function validarSenha(){
    if (senha.value.length < 6){
        erroSenha.innerHTML = 'Senha Inválida'
        validaSenha = false;
    } else {
        erroSenha.innerHTML = '';
        validaSenha = true;
    }
}