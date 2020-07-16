const Instagram  = require('instagram-web-api'); 

module.exports =  class Insta{

    constructor( username, password){
        this.username = username;
        this.password = password; 
        this.client  = new Instagram({ 
            username: this.username,
            password: this.password
        }); 
    }
    /**
     * Autenticação do usuário
     * ! é necessária a aplicação desse metodo dentro de uma função assincrona
     * @param Não há parametros para esse método, porque a declaração de username, e password
     * são feitas na declaração da classe
     */
    async auth(){
       const autentification = await this.client.login().then((e) => {
           if(e){
               return e
           }
       });
    }

    async getProfileInfo(){
        const profile = await this.client.getProfile().then(e => e); 
        return profile
    }

    async getFullFollowers(){
        // const totalFollowers = await this.client.getFollowers({ userId: '2085502318' } ).then( e => {
        //     return e.count
        // }); 
        const followers = [];
        await this.client.getFollowers({ userId: '32272759085', first: 20})
        .catch(err => console.log(err))
        .then( e => {
            console.log(e)
        });         
        // for(let i = 1; i < 3; i++){
        //     await this.client.getFollowers({ userId: '2085502318', first: i * 49, after: 49 }).then( e => {
        //         if(e.data){
        //             followers.push(e.data);
        //         }
        //     })
        //  }

        console.log(followers)
    }

}