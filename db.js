const mangoose=require('mongoose');

const mongoURL = 'mongodb://loacalhost:2701/hotels'

mongoose.connect(mongoURL, {
   useNewUrlParser: true,
   useUnifiedTopology: true 
})

const db= mongoose.connection;