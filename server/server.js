const {MongoClient} = require('mongodb');

async function main(){
  const uri = 'mongodb+srv://user1:1234@cluster0.qvaie.mongodb.net/Dogs?retryWrites=true&w=majority';
  const client = new MongoClient(uri,{useNewUrlParser:true, useUnifiedTopology: true});

  const List = [
    {
      category: 'GoldenRetriever',
      color: 'fawn',
      age: 2.5,
      description: 'Random text about the dog. Random text about the dog. Random text about the dog'
    },
    {
      category: 'GoldenRetriever',
      color: 'fawn',
      age: 2,
      description: 'Random text about the dog. Random text about the dog. Random text about the dog'
    },
    {
      category: 'GoldenRetriever',
      color: 'fawn',
      age: 2.5,
      description: 'Random text about the dog. Random text about the dog. Random text about the dog'
    },
    {
      category: 'GoldenRetriever',
      color: 'white',
      age: 6.5,
      description: 'Random text about the dog. Random text about the dog. Random text about the dog'
    },
    {
      category: 'GoldenRetriever',
      color: 'white',
      age: 4.5,
      description: 'Random text about the dog. Random text about the dog. Random text about the dog'
    },
    {
      category: 'GoldenRetriever',
      color: 'black',
      age: 4,
      description: 'Random text about the dog. Random text about the dog. Random text about the dog'
    },
  ]
  
  try{
    await client.connect();
    console.log('Connected');
    await createListing(client,List);
  }
  catch (e){
    console.error(e);
  }
  finally{
    await client.close();
  }

}

async function createListing(client,newListing){
  const result = await client.db('Dogs').collection("dogTypes").insertMany(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findDocs(client,category){
  const docs = client.db('Dogs').collection('dogTypes').find({color : category}).limit(3);
  const result = await docs.toArray();
  console.log(result);
}


main().catch(console.error);