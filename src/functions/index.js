//Rest Spread Destructuring

//Rest gönderdiğimiz değerleri array haline getirir

function add(...numbers){

    console.log(numbers)
 
}

add(20,30,40,50,60,70,80)

function add1(bisey ,...numbers){

    console.log(numbers)
    console.log(bisey) //ilk değer bisey parametresine atanır diğerleri array haline gelir
 
}

add1(20,30,40,50,60,70,80)


//Spread : gönderdiğimiz değerleri ayrıştırma işlemini sağlar

let points=[10,30,30,40,50]
function add3(x){
console.log(...x)

}
add3(points)

let type = [..."abc","d",..."ef","g",..."12","3"]
console.log(type)

//Destructuring: Gönderilen array değerini değişkene atar

let population =[1000,2000,3000,[4000,5000]]

let [small,medium,high,[x,y]]=population

console.log(small)
console.log(medium)
console.log(high)
console.log(x)
console.log(y)

let[icAnadolu,Marmara,Ege]=[

    {Name:"İcAnadolu",population:"7M"},
    {Name:"Marmara",population:"19M"},
    {Name:"Ege",population:"9M"}
]
console.log(Ege)

