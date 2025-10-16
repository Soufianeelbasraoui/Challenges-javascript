const prompt=require('prompt-sync')();
let nombre=prompt("enter un nomber: ");
for(let i=1;i<=nombre;i++){
    let ligne = "";
    for(let j=1;j<=i;j++){
        ligne += "*";
    }
    console.log(ligne);
}