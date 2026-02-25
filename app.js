const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const productRouter = require('./routes/productRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const resourcesRoutes = require('./routes/resourcesRoutes');
const usecaseRoutes = require('./routes/usecaseRoutes');
const dronepediaRoutes = require('./routes/dronepediaRoutes');
const aboutusRoutes = require('./routes/aboutusRoutes');
const businessRoutes = require('./routes/businessRoutes');
const partnersRoutes = require('./routes/partnersRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', aboutusRoutes);
app.use('/', businessRoutes);
app.use('/', partnersRoutes);
app.use('/', portfolioRoutes);
app.use('/', indexRouter);
app.use('/', serviceRouter);
app.use('/', usecaseRoutes);
app.use('/', dronepediaRoutes);
app.use('/', resourcesRoutes);
app.use('/', productRouter);

app.get('/*', (req, res) => {
    // Tambahkan URL yang sedang diakses di pesannya
    res.send(`Anda mengakses: ${req.url}. Tapi halaman ini ditangkap oleh Wildcard app.js`);
});

app.get('/*', (req, res) => {
    res.send('<h1 style="text-align:center; margin-top:50px;">This page is still being developed.</h1><p style="text-align:center;"><a href="/">Back to Home</a></p>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server AMX UAV berjalan di http://localhost:${PORT}`);
});