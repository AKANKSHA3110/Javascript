function SetUsername (username){
   this.username = username;
   console.log("called");
   
}

function createUser(username,email,pass){
    SetUsername.call(this ,username)

    this.email=email
    this.pass =pass
}

const gogo = new createUser("gogo", "gogo123@gmail.com",123)
console.log(gogo);
