import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/log.js";
import User from "../oop/User.js";
import UserService from "../Services/UserService.js";

let logger1 =new ElasticLogger()
let userService = new UserService(logger1)
let user = new User(1,"Onur","Aslan","Diyarbakır")
let user2 = new User(2,"Doğukan","Kazan","Malatya")
userService.add(user)
userService.add(user2)
console.log(userService.List())