const Insta = require('./index'); 
const insta = new Insta('kaioprates','teste123456');

async function auth(){
    const res   =  await insta.auth().then(e => e); 
    console.log(res)
}

auth(); 