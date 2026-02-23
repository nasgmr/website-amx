const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const productRouter = require('./routes/productRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const resourcesRoutes = require('./routes/resourcesRoutes');
const usecaseRoutes = require('./routes/usecaseRoutes');
const dronepediaRoutes = require('./routes/dronepediaRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', productRouter);
app.use('/', serviceRouter);
app.use('/', resourcesRoutes);
app.use('/', usecaseRoutes);
app.use('/', dronepediaRoutes);

app.get('/*', (req, res) => {
    res.send('<h1 style="text-align:center; margin-top:50px;">This page is still being developed.</h1><p style="text-align:center;"><a href="/">Back to Home</a></p>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server AMX UAV berjalan di http://localhost:${PORT}`);
});