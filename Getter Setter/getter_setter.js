class User{
    constructor(username,email,pass){
        this.username =username,
        this.email= email,
        this.pass =pass
    
    }

    get email(){
        return `${this._email}123`
    }
    set email(value){
        this._email = value
    }

    get pass(){
        return `${this._pass}gogo`
    }
    set pass(value){
        this._pass = value // setter does not return any value 
    }
}

const gogo =new User("dogo","dogo123@gmail.com","dodo")
console.log(gogo.email);
