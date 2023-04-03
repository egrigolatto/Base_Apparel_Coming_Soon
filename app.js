let btn = document.getElementById('card__btn');
let mensajeError = document.querySelectorAll('.mensaje_error');
let input = document.getElementById("correo");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let email = input.value;
    validarCorreo(email);  
});
const validarCorreo = (a)=>{
    let expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let verificar = expReg.test(a);
    if(!verificar){
        mensajeError[1].innerHTML = "Please provide a valid email"
        mensajeError[0].style.display = "flex";
        mensajeError[1].style.display = "flex";
    } else{
        mensajeError[1].style.display = "flex";
        mensajeError[1].innerHTML = "Mensaje enviado"
        mensajeError[0].style.display = "none";
    }
};