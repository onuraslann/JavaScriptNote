console.log("Merhaba Kodlama.io")
// javascripte tip güvenliği yoktur
var eurodun = 10.25
var eurobugün =10.35
{
    var eurobugün=10.40
}
console.log(eurobugün) // 10.40 degerini alır bu hatalı bir kullanımdır 

// JavaScripte var yerine let kullanılır 
let dolardun=9.20
let dolarbugün=9.25

{
    let dolarbugün=9.30 
}
console.log(dolarbugün)


let konutKredi = ["Konut Kredisi","Emlat Konut Kredisi","Kamu Konut Kredisi"]
//console.log(konutKredi)
console.log("<ul>")
for(let i=0; i<konutKredi.length;i++){
    console.log("<li>"+konutKredi[i]+"<li>")
}
console.log("</ul>")
console.log("Naber")