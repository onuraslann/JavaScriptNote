let cart = [
    {id:1,productName:"Telefon",quantity:10,unitPrice:5000},
    {id:2,productName:"Bilgisayar",quantity:7,unitPrice:7500},
    {id:3,productName:"Bardak",quantity:1,unitPrice:20}


]
//map listeki elemanları tek tek dolaşır 

cart.map(product=>{
    console.log(product.productName + "  Fiyatı : " +product.unitPrice)
})

//filter : filtreleme işlemlerini gerçekleştirir


 let CartOver2 = cart.filter(product=>product.quantity>5  && product.unitPrice>5000)
console.log(CartOver2)

//Reduce : Toplam değeri ekrana getirir

let total  =cart.reduce((acc,product)=>acc+product.unitPrice,0)
console.log("Toplam Fiyat : " +total)

//Referans tiplerde eklediğimiz listenin adresi atanır . 
function addToCart(sepet){
    sepet.push( {id:3,productName:"Kalem",quantity:13,unitPrice:18}
    )
}
addToCart(cart)
console.log(cart)

//Değer tiplerde değer atandıktan sonra işi biter 

let sayi =10
function NumberTotal(number){
    number = number+1
}
NumberTotal(sayi)
console.log(sayi    )