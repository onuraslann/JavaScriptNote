console.log("Hello")

var x = 10
x="Ankara";
console.log(x)

//JavaScripte tip güvenliği yoktur 

var dolar1 =9.20
var dolar2=9.30 
{

   var dolar1=10.00
}
console.log(dolar1)
let dolar11 =9.20
let dolar22=9.30 
{

   let dolar1=10.00
}
console.log(dolar11)

//Javascripte var yerine let kullanılır

let credis = ["KonutKredisi","TaşıtKredisi","ÖzelKredi"]
for(let i=0;i<credis.length;i++){

    console.log(credis)
}
function save(){

}
console.log(typeof save)
function save1(productName){

    console.log("Ürünün ismi : "+productName)
}

save1("Bilgisayar")

function save2(productName ="Telefon",UnitInStock){

    console.log("Ürünün ismi : "+productName+" Fiyatı : " +UnitInStock)
}

save2(20)

function save3(UnitInStock,productName ="Telefon"){

    console.log("Ürünün ismi : "+productName+" Fiyatı : " +UnitInStock)
}

save3(20)


//Rest Sprea Destructure

//Rest gönderdiğimiz parametreyi array haline getirir 

let showProducts= function(id, ...products){


console.log(products)



}

showProducts(20,"Elma","Karpuz")

let add = function(...numbers){

    console.log(numbers)
}
add(20,30,40,50)

//Spread : Ayrıştırma 

let points =[..."abc",..."de",..."12","4"]

console.log(points)

let points2 = [Math.max( 10,20,30,40)]
console.log(points2)
//Destructuring : array değerini değişkene atar

let population = [100,200,300]

let [small,medium,high]=population;
console.log(small);
console.log(medium)

let[icAnadolu,Marmara,Ege]=[
    {name:"icAnadolu",Population:"7M"},
    {name:"Marmara",Population:"27M"},
]
console.log(icAnadolu)

//Değertip vs Referanstip

//Değertiplerde değişim sadece steakte olur heap değişmez
let deger1=30;
let deger2=40
deger1=deger2;
deger2=100
console.log(deger1)

let product1={productName:"Elma",quantity:10}
let product2={productName:"Karpuz",quantity:8}

product1=product2
product2.productName="Kiraz";
console.log(product1.productName)

//objeler referans tiptir değişim hep steak hemde heapte olur