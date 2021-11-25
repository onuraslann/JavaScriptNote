console.log("Hello World")

console.log("Onur")
//JavaScripte tip güvenliği yoktur
var dolaryesterday = 10.45;
dolaryesterday ="Ankara";
console.log(dolaryesterday)

//JavaScripte var yerine let kullanılır
var euroyesterday=11.00
var eurotoday = 11.20
{
    var eurotoday=12;
}
console.log(eurotoday)


let euro1=11.35
let euro2=11.45
{
let euro2 = 12;


}
console.log(euro2)

let credis =["Konut Kredisi","Taşıt Kredisi","Özel Kredi","Kamu Kredisi"]
for(let i=0;i<credis.length;i++){

    console.log(credis[i])
}


let student = {id:1,name:"onur"}

function Save(ogr,puan =20) {
    
    console.log( ogr.name+"Aldığı puan : "+puan)
    console.log(ogr.id)
}
Save(student)

//Rest : Array haline getiriyor

let showProducts = function name(idd,...products) 

{
console.log(idd)
console.log(products)

   
    
}
console.log(typeof showProducts)
showProducts(20,"Elma","Karpuz")

//Spread :Ayrıştırma yapar //abc nin önüne ... koyduğumuz zaman a b c olur
let points =[..."abc","d","e","f",..."opr"]

console.log(points)

//Destructuring : elmizdeki arrayin değerini bir değişkene atarız 

let population = [1000,2000,3000,[4000,5000]];
let [small,medium,high,[x,y]]=population;
console.log(small)
console.log(medium)
console.log(high)
console.log(x)
console.log(y)