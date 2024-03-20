const mongoose = require("mongoose");

const uri = "mongodb+srv://MongoDb:123@eticaretdb.oh2dn.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb"


const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("Bağlantı başarılı!"))
    .catch((err)=> console.log(err));
}

module.exports = connection;