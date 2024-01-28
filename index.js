const form = document.querySelector("#form");
const total = document.querySelector("#result")
function scope(){
   
    
 function receve (event){
    event.preventDefault();

    let weight = Number(form.querySelector("#Weight").value);
    let height = Number(form.querySelector("#Height").value);
    let imc = weight/(height **2);
    let result = "normal";
     if(imc < 16.9){
       result =" Very under weight";
     } else if(17  == imc && imc<=18.4){
        result =" Under weight";
     }else if(18,5<=imc && imc<=24.9){
        result ="Normal weight";
     }else if(25<=imc && imc<=29.9){
        result ="Obesity";
     }else if(30<=imc && imc<=34.8){
        result ="Obesity 1";
     }else if(35<=imc && imc <=40){
        result ="Obesity 2";
     }else {
        result ="Obesity 3";
     }
   
    total.innerHTML = `<p>This is your result: <strong>${result}</strong></p>`
  
} 

form.addEventListener("submit",receve);
}
scope()