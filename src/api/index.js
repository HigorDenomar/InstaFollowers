const Instagram  = require('instagram-web-api')

module.exports =  class Insta{

    constructor( username, password){
        this.username = username;
        this.password = password; 
        this.client; 
    }

    async auth(){
       this.client  = new Instagram({ 
           username: this.username,
           password: this.password
       }); 
       const autentification = await this.client.login().then((e) => {
           if(e){
               return e
           }
       });
       return autentification
    }

}