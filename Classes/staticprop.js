class User{
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}
const dogo =new User("doogo")
// dogo.logMe()
// console.log(dogo.createId());


class Techer extends User {
    constructor(username,email){
        super(username)
        this.email =email
    }

}
const dodo = new Techer("GOGO","dodo123@gmail.com")
console.log(dodo.logMe());
