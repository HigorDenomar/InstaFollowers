const Insta = require('./index'); 	
const insta = new Insta('user','password');

async function test(){
   await insta.auth(); 
   const res  =  await insta.getFullFollowers().then(e=>console.log(e)); 
}
test()
