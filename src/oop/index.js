class Customer{

constructor(id,customerno){
   
    this.id=id;
    this.customerno=customerno //This demek instance demek.
}

}

let customer = new Customer("1","1234");
console.log(customer.id)
//Prototyping : bir nesneye bambaşka bir özellik verebiliriz
// customer.name="Onur"
// console.log(customer.name)
console.log(customer.customerno)

class IndividualCustomer extends Customer{
    constructor(id,customerno,firstname){
        super(id,customerno);
        this.firstname=firstname;
    }
}
let customer1= new IndividualCustomer(3,"12","Onur");


console.log(customer1.id)
console.log(customer1.firstname)