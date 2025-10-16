const prompt=require('prompt-sync')();
let nomber=prompt("Enter un nomber:");
let tab=[];
let max=0;
let min=0;
for(let i=1;i<tab.length;i++){
    tab.push(nomber)
    if(tab[i]>max){
        max=tab[i]
    }
    else{
     min=tab[i]
    }
   
} 
console.log("le max est:",max);
console.log("le min est :",min)