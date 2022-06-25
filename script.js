"use strict";

const datas = {
  "gabrielganji01011010@gmail.com": "01011010",
  "ccc": "123",
}

function page(){
  const signin = function() {
    console.log('OK');
    window.location.href = 'http://127.0.0.1:8080/signin.html';
  };
  
  const signup = function() {
    console.log('OK');
    window.location.href = 'http://127.0.0.1:8080/signup.html';
  
  };

  document
  .querySelector('#buttonSignin')
  .addEventListener("click", signin);

  document
  .querySelector('#buttonSignup')
  .addEventListener("click", signup);

}

function login(){

  const signinP = function() {
    let email = document.querySelector("#email");
    let emailValue = String(email.value);
    let password = document.querySelector("#password");
    let passwordValue = String(password.value);

    if (datas.hasOwnProperty(emailValue) && passwordValue === datas[emailValue]){
      window.location.href = 'http://127.0.0.1:8080/main.html';
    } else{
      alert('Ops, Usuário ou Senha Incorreto.')
    }
    
  }
  
  document.querySelector("#buttonLog").addEventListener("click", signinP);
}

function register() {

  const verifyFields = function() {
    const name = document.querySelector('#name');
    const email = document.querySelector("#email");
    const password1 = document.querySelector("#password1");
    const password2 = document.querySelector("#password2");

    if (datas.hasOwnProperty(email.value)){
      alert('E-mail já cadastrado! Acesse sua conta.')
    }
    else if (!name.value || !email.value || !password1.value || !password2.value) {
      alert("Campos com * são obrigatórios");
    }
    else if (password1.value !== password2.value) {
      alert("Senhas diferentes. Para continuar confirme sua senha.");
    }
    else if (password1.value.length < 6){
      alert('Senha curta. Digite uma senha com 6 digitos ou mais');
    } 
    else if (password1.value === password2.value && password1.value.length > 6) {
      datas[email.value] = password1.value;
      console.log(datas);
      window.location.href = 'http://127.0.0.1:8080/main.html';
    }
  };
  
  document.addEventListener('keydown', function(e){
    if (e.key == "Enter") {
      verifyFields; 
    } else {
      console.log();
    }
  });
  
  document.querySelector("#buttonCad").addEventListener("click", verifyFields);
  
    
}
