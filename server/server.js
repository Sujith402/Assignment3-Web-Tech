const {MongoClient} = require('mongodb');

async function main(){
  const uri = 'mongodb+srv://user1:1234@cluster0.qvaie.mongodb.net/Dogs?retryWrites=true&w=majority';
  const client = new MongoClient(uri,{useNewUrlParser:true, useUnifiedTopology: true});

  try{
    await client.connect();
    console.log('Connected');
    
  }
  catch (e){
    console.error(e);
  }
  finally{
    await client.close();
  }

}


async function listDatabases(client){

}

async function createListing(client,newListing){
  const result = await client.db('Dogs').collection("dogTypes").insertMany(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}


main().catch(console.error);