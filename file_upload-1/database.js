const mongoose = require('mongoose');
const db_url = process.env.DB_URL;


//connection start
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},() => console.log('Database is connected Successfully'));