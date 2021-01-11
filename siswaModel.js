var database = require('mongoose');

//setup scehma

var siswaSchema = database.Schema({
    nis : {
        type : String,
        required : true,
    },
    nama : {
        type : String,
        required : true,
    },
    
        tanggalLahir : String,
    
    jenisKelamin : String,

    alamat : String,

    tanggal_buat : {
        type : Date,
        default : Date.now
    }

});

var siswa = module.exports = database.model('siswa', siswaSchema);

module.exports.get = function(callback, limit){
    siswa.find(callback).limit(limit);
}