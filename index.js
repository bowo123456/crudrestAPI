//import express

let express = require('express');

let bodyParser = require('body-parser');

let database = require('mongoose');

//inisialisasi
let app = express();

//ambil api route
let apiRoutes = require('./route-api');

//konfigurasi 
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.use(bodyParser.json());

//konfigurasi database
database.connect('mongodb://localhost/nodecrudAPI');


//buat vort nya
var port = process.env.port || 8090;


app.get('/', (req, res)=> res.send('Hello Word Menggunakan express JS'));

//jalankan api route
app.use('/api', apiRoutes);

app.listen(port, function(){
    console.log("Aplikasi berjalan dengan baik di port " +port);
})