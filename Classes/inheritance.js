class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username);
        this.email = email;
        this.pass =pass;
    }
    addCourse(){
        console.log(`This course was added by ${this.username}`);
    }

}

const gogo = new Teacher('gogo','gogo123gmail.com',3263475)
gogo.addCourse()

const dodo = new User("dodo")
dodo.logMe()