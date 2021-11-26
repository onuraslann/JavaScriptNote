console.log("Hello World")

//JavaScripte tip güvenliği yoktur

var x = 10;
x="Ankara"

console.log(x)

//JavaScripte var yerine let kullanılır 

var y1=10;
var y2=22;
{

  var   y2=20;

    
}
console.log(y2)

let y11=10;
let y22=20;
{

   let  y22=30;

    
}
console.log(y2)


let credis = ["Konut Kredisi","Taşıt Kredisi","İhtiyac Kredisi","Araç Kredisi"]

for(let i = 0;i<credis.length;i++){
    console.log(credis[i])
}