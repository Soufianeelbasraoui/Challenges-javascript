const prompt=require('prompt-sync' )();
let nombres=prompt( 'Enter un nombre:' ); 
let somme=0;
let max=0;

while(nombres<100  ){ 
  nombres++;
  if(nombres>max){ 
    max=nombres; 
  }
   somme=somme+nombres; 
}
console.log( 'la somme est:' ,somme);
console.log( 'le maximum est:' ,max);
