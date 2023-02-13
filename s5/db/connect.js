const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:1234@db.mhbax.mongodb.net/gl-a-23?retryWrites=true&w=majority')
.then(()=> console.log('MongoDB is connected'))
.catch(err => console.log('MongoDB is down, raison :',err))