function convFahrenheit (celsius){
    if(celsius === ""){
        return "-";
    }
    return (celsius *1.8)+32;
}

function convKelvin (celsius){
    if(celsius === ""){
        return "-";
    }
    return (celsius*1)+273;
}

function alerta (celsius){
    if(celsius === ""){
        return "Informe um valor!";
    }
    else{
        return "";
    }

}

const fahrenheit = document.querySelector("#tem_fahrenheit");
const kelvin = document.querySelector("#tem_Kelvin");
const input = document.querySelector("input");
const mensagem = document.querySelector("#mensagem");
input.addEventListener("keyup", ()=>{
  const celsius = document.querySelector("#celsius").value;
  fahrenheit.innerHTML = "Fahrenheit:" +" "+ convFahrenheit(celsius);
  kelvin.innerHTML = "Kelvin:" +" "+ convKelvin(celsius);
  mensagem.innerHTML = alerta(celsius);
});
