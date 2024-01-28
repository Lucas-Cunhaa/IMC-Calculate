const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputWeight = e.target.querySelector("#Weight");
  const inputHeight = e.target.querySelector("#Height");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

 if(!weight && !height){
   setResult("Invalid Weight and Height",false);
   return;
 }
 if(!weight){
   setResult("Invalid Weight",false);
   return;
 }
 if(!height){
   setResult("Invalid Height",false);
   return;
 }

 const imc = getImc(weight,height);
 const level = getLevelImc(imc);
 const msg = `Your IMC is ${imc} , (${level})`

 setResult(msg, true);
});
const  getLevelImc = (imc) =>{
 const level =["Very under weight","Under Weight","Normal Weight","Overweight","Obesity1","Obesity 2","Obesity 3"];

   if(imc>= 39.9) return level[5];
   if(imc>= 34.9) return level[4];
   if(imc>= 24.9) return level[3];
   if(imc>= 18.5) return level[2];
   if(imc < 18.5) return level[1];
   
}
const getImc  =  (weight,height) => {const imc = weight /(height **2); return imc.toFixed(2);}
const createP = () => { return  document.createElement("p");}
   

 const setResult = (msg,value) => { 
    const result = document.querySelector("#result");
    const p = createP(); 
    result.innerHTML = "";
   if(value){
      p.classList.add("valid")
   } else {
      p.classList.add("unvalid")
      alert("Invalid Enter")
   }

   p.innerHTML =msg;
   result.appendChild(p)
   }


   
   
      
   


  


  
    
 
