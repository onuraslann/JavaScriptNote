console.log("Hello")



var dolar = 9.64
dolar="Amerikan Doları"

console.log(dolar)

//Javascripte tip güvenliği yoktur 
// var number1=10

// console.log(number2)

// var number2=15
//Undefined  hatası ile karşılaşırız

var number1 = 15
var number2=21
{
    var number1=44

}
console.log(number1)
// JavaScripte var yerine Let kullanacağız normalde süslü parantezi görmemesi gerekiyor 

let number3=54
let number4=48
{
    let number3=88
}
console.log(number3) //Lette süslü parantezin içi görünmez

let credis =["KonutKredisi","TaşıtKredisi","KamuKredisi","Özel Kredi"]

console.log("<ul>")
for(let i =0;i<credis.length;i++){
    console.log("<li>"+credis[i]+"</li>")


}
console.log("</ul")

// JavaScripte tip güvenliği yoktur
// const a =20
// a=30
//  Hata alıyorum
// let a = 20
 
// a="Ankara"
// console.log(a)
//Hata almam sebebi javascripte tip güvenliği olmaması

