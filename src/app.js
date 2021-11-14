console.log("Hello")
//javascripte tipe güvenliği yoktur
var x1 = 10;
x1 = "Ankara"
console.log(x1)

//var operatörü yerine let operatörünü kullanırız

var dolaryesterday = 9.38
var dolartoday = 10.01
{
    var dolartoday = 10.30
}
console.log(dolartoday)
let dolaryesterday1 = 9.38
let dolartoday1 = 10.01
{
    let dolartoday1 = 10.30
}
console.log(dolartoday1)

let credis = ["KamuKredisi", "TaşıtKredisi", "KonutKredisi"]
for (let i = 0; i < credis.length; i++) {
    console.log(credis[i])
}

let student = { id1: 1, name: "Onur" }

 function SaveFunction(ogrenci,puan=100) {

    console.log(ogrenci.id1)
    console.log(ogrenci.name+"Aldığı puan:"+puan)

}



SaveFunction(student)
console.log(typeof SaveFunction)

//Rest c# params değerleri arraye çeviriyor

let  showProducts=function name(id,...product) {
    

    console.log(product)
   
}
showProducts(2,"Elma","Armut")

//Spread : ayrıştırma

let points = [..."abc","d",..."efg"]
console.log(points)
console.log(Math.max(10,2,1114,423,34,12))

//Destructuring elimizdeki arrayi bir değişkene atıyoruz

let population  = [1000,2000,3000,[4000,5000]]
let [small,medium,high,[verify,low]]=population;
console.log(small)
console.log(medium)
console.log(high)
console.log(verify)
console.log(low)
