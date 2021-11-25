
console.log("Hello")

//JavaScripte tip güvenliği yoktur 

var dolar1= 9.10
var dolar2 = 9.85
dolar1="Ankara"
console.log(dolar1)

//Javascripte var yerine let kullanılır
var euro1=11.00
var euro2=11.23
{
    var euro2=12.00
}
console.log(euro2)

let euro11=11.00
let euro21=11.23
{
    let euro2=12.00
}
console.log(euro21)

console.log("Ürün sepete eklendi!")

function addToCart1(product){

    console.log(product+"isimli ürün eklendi")
}

function addToCart2(product,quantity){

    console.log(product+" isimli ürün eklendi " +quantity+" adet eklendi" )
}
addToCart2("Silgi",20)

//Default değeri kalem yaptık
function addToCart3(quantity,product="Kalem"){

    console.log(product+" isimli ürün eklendi " +quantity+" adet eklendi" )
}
addToCart3(20)

let student= {id:1,Name:"Beşir"}

function save(s){
console.log(s.Name)
console.log(s.id)

}
save(student)
//objeler referans tiplidir değişimler hem stack hemde heapte olur
let product2 = {productname:"karpuz",UnitPrice:150,quantity:10}
let product3 = {productname:"elma",UnitPrice:120,quantity:10}

product2=product3;
product2.Name="Armut";
console.log(product3.Name)






//Sayılar değer tiptir değer tip olduğu için heapte herhangibi bir değişim olmaz tüm değişim stackte
let sayi1 =10
let sayi2=20
sayi1=sayi2;
sayi2=100
console.log(sayi1)


let sayHello= ()=>{

    console.log("Hello World")

}
sayHello()

//Rest : girdiğin değerleri array haline getirir 

let showProducts = function(id,...product){

    console.log(id)
    console.log(product)
}
console.log(typeof showProducts)

showProducts(1,"Elma","Karpuz")

//Spread Ayrıştırma yapıyor 
let points = [..."abc",..."de","f","g",..."hkl"]
console.log(points)


//Destructuring elimizdeki array değerini değişkene atarız

let population = [1000,2000,3000,[4000,5000]]

let[small,meduim,high,[x,y]]=population

console.log(small)
console.log(meduim)
console.log(high)
console.log(x)
console.log(y)

function addToCart5(x){

console.log(productss)
}
let productss = [
 {productname:"karpuz",UnitPrice:150,quantity:10},
  {productname:"elma",UnitPrice:120,quantity:10}
]
addToCart5(productss)


function add1(number1,number2) {
    console.log(number1+number2)
}


add1(3,4)
//birden fazla toplama yapmak isteyebilirim
//Rest gönderilen değeri array içerisine alır
function add2(...numbers) {
    console.log( numbers)
    }

add2(20,30,40)
add2(20,30,40,50,60,70)
function add3(bisey,...numbers) {
    console.log( numbers)
    console.log(bisey )
    }

add3(100,200)

//Spread ayrıştırma yapar
console.log(Math.max(20,55,47,98,63,47,12,36))

let numbers= [30,40,60,70]
console.log(Math.max(...numbers))

//Destructuring :arrayin değerini değişkene atar

let [icAnadolu,Marmara,Ege,[İcAnadoluSehir]]=[
    {name:"İçAnadolu",population:"20M"}
    ,{name:"Marmara",population:"15M"},
    {name:"Ege",population:"7M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"]
    ]
]
console.log(icAnadolu)
console.log(İcAnadoluSehir)