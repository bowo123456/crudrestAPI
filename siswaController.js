//imprt data model
Siswa = require('./siswaModel');

exports.index = function(req, res){
    Siswa.get(function(err, siswax){
        if(err){
            res.json({
                status : "error",
                message : err,
            });
        }
        res.json({
            status : "success",
            message : "Data Siswa berhasil di ambil",
            data : siswax
        });
    });
};

//proses penambahan data
exports.tambah = function(req, res){
    var siswa = new Siswa();

    siswa.nis = req.body.nis ? req.body.nis : siswa.nis;
    siswa.nama = req.body.nama;
    siswa.tanggalLahir = req.body.tanggalLahir;
    siswa.jenisKelamin = req.body.jenisKelamin;
    siswa.alamat = req.body.alamat;

    siswa.save(function(err){

        res.json({
            message : "yosh..data berhasil di buat",
            data : siswa
        });
    });

};

//proses view per id

exports.liat_data = function(req, res){
    Siswa.findById(req.params.siswa_id, function(err, siswa){
        if (err)
        res.send(err);
        res.json({
            message : 'details data siswa sedang di ambil ... ',
            data: siswa
        });
    });
};

//proses update
exports.update = function(req, res){
    Siswa.findById(req.params.siswa_id, function(err, siswa){
        if(err)
        res.send(err);

        siswa.nis = req.body.nis ? req.body.nis : siswa.nis;
        siswa.nama = req.body.nama;
        siswa.tanggalLahir = req.body.tanggalLahir;
        siswa.jenisKelamin = req.body.jenisKelamin;
        siswa.alamat = req.body.alamat;

        //update
        siswa.save(function(err){
            if (err)
            req.json(err)
            res.json({
                message: 'data siswa berhasil di update',
                data : siswa
            });
        });
        
    });
};

//proses delete
exports.hapus = function(req, res){
    Siswa.remove({
        _id : req.params.siswa_id
    },function(err, siswa){
        if (err)
        res.send(err);


        res.json({
            status: 'success',
            message : 'Data siswa berhasil di hapus '
        });
    });
}