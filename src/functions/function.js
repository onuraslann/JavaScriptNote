let student = {Firstname : "Onur",Surname:"Aslan"}
function save(s){

console.log(s.Firstname)
console.log(s.Surname)

}
save(student)

//Fonskiyonun name default hale getirdik
function save1(name="besir",puan){

console.log(name+" İsimli öğrecinin aldığı puan : " +puan)


}
save1(20)

//name ve puanın yerlerini değiştirelim
 function save2(puan,name="besir"){

     console.log(name+" İsimli öğrecinin aldığı puan : " +puan)
    
    
     }
    save2(20)
    
function addToCart(productName){

    console.log(productName+" Ürün sepete eklendi")
}
addToCart()//Undefined 

function addToCart1(productName){

    console.log(productName+" isimli ürün sepete eklendi")
}
addToCart1("Bilgisayar")

function addToCart2(productName="Telefon",quantity){

    console.log(productName+" isimli ürün sepete eklendi " +quantity+ " adet eklendi")
}
addToCart2(30 )
addToCart2("Kalem",20)


//Objeler referans tiplidir değişim hem stackte hem heapte olur

let product1={productName:"Elma",UnitPrice:10,quantity:50}
let product2={productName:"Karpuz",UnitPrice:10,quantity:50}
product1=product2
product2.productName="Kiraz"

console.log(product1.productName)

//Sayılar değer tiplidir değişim sadece stackte olur

let sayi1= 10
let sayi2=20
sayi1=sayi2;
sayi2=100
console.log(sayi1)
