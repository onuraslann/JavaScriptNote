console.log("Hello")

var dolaryesterday=9.38
var dolartoday=10.01
console.log(dolartoday)
//javascripte tip güvenliği yoktur
var a =10;
var a ="Ankara";

console.log(a)

//undefined
var x=10;
console.log(y)
var y=20;

var euroyesterday=10.30;
var eurotoday=11.00;
{
    var euroyesterday=10.45;
}
console.log(euroyesterday)


//Javascripte var yerine let kullanılır 

let c=10.3;
let b=5;
{
    let c=20;
}
console.log(c);

document.write("<li>")
let credis =["Konut Kredisi","Taşıt Kredisi","Kamu Kredisi"]
for(let i=0;i<credis.length;i++){
    
   console.log(credis[i])
   
}

// let x1=a;
// let x1="Onur";
// console.log(x1)

let student={id:1,name:"Onur"}

function save(ogrenci,puan=20) {
    
    // console.log(ogrenci.name+""+puan)
}
save(student,200)

let array = [student, 1,2,3,4,5];
for(let i =0;i<array.length;i++){

    // console.log(array[i]);      
}
//rest parametresi array oluşturur 
let showProducts= function (id,...products) {
    
console.log(id)
console.log(products)
}
showProducts(20,"Elma","armut")

//spread ayrıştırma işlemi sağlar
let points=[..."abc","d",..."ef","g"];
console.log(points)

//Destructuring elimizde arrayin değerini değişkene atarız
let population =[1000,2000,3000,[4000,5000]]
let [small,medium,high,[verify,max]]=population;
console.log(small)
console.log(medium)
console.log(high)
console.log(verify)
console.log(max)
function someFunction([small1]) {
    
    console.log(small1)
}
someFunction(population)


