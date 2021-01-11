let router = require('express').Router();

//setup router
router.get('/', function(req, res){
    res.json({

        Nama : 'Yuli Prihati',
        TanggalLahir : ' 24 Juli 1994',
        JenisKelamin : 'Perempuan',
        Alamat : 'Purworejo'
    });
});

var siswaController = require('./siswaController');

router.route('/datasiswa')
.get(siswaController.index)
.post(siswaController.tambah);


router.route('/datasiswa/:siswa_id')
.get(siswaController.liat_data)
.put(siswaController.update)
.delete(siswaController.hapus); 

module.exports = router;