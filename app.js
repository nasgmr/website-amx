const express = require('express');
const path = require('path');
const app = express();

// Konfigurasi EJS sebagai mesin template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mengatur folder 'public' sebagai tempat aset statis (CSS, Gambar)
app.use(express.static(path.join(__dirname, 'public')));

// Rute (Route) untuk Halaman Utama
app.get('/', (req, res) => {
    res.render('index');
});

// Rute sementara agar saat menu lain diklik tidak muncul pesan error (404 Not Found)
app.get('/*', (req, res) => {
    res.send('<h1 style="text-align:center; margin-top:50px;">Halaman sedang dalam tahap pengembangan.</h1><p style="text-align:center;"><a href="/">Kembali ke Home</a></p>');
});

// Menyalakan server pada Port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server AMX UAV berhasil berjalan di http://localhost:${PORT}`);
});