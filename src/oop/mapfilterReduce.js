let cart = [
    {id:1,productName:"Telefon",quantity:10,unitPrice:5000},
    {id:2,productName:"Bilgisayar",quantity:7,unitPrice:7500},
    {id:3,productName:"Bardak",quantity:1,unitPrice:20}


]

//map : Listeyi tek tek dolaşır 

cart.map(product=>{
    console.log(product.productName  + " fiyatı : " +product.unitPrice)
})

//filter filtre vermemizi sağlar

let unitPriceFilter = cart.filter(product=>product.unitPrice>1000 && product.quantity>8)
console.log(unitPriceFilter)

//Reduce toplam değeri bulamızı sağlar

let total  = cart.reduce((acc,product)=>acc+product.unitPrice,0);
console.log("Toplam Fiyat  : "+total)


//Referans tipte atamalar adres üzerinden gerçekleşir 
function addToCart(sepet){

    sepet.push({id:4,productName:"Klaveye",quantity:11,unitPrice:120})
}
addToCart(cart)
console.log(cart)

//Değer tipteki atamalarda değer atanır adres atanmaz . 

let sayi = 10;
function AddToNumber(number){

    number = number+1;
}
AddToNumber(sayi);
console.log(sayi)