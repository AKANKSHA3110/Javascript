// ES6 

class User {
    constructor(username,email,pass){
        this.username =username;
        this.email = email;
        this. pass = pass
    }

    encryptPassword(){
        return(`${this.pass}hjdsklf`)
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const gogo = new User ("gogo","gog123@gmail.com","1234");
console.log(gogo.encryptPassword());
console.log(gogo.changeUsername());

