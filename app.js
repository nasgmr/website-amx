const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

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
const articlesRoutes = require('./routes/articlesRoutes');

app.use(expressLayouts);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', aboutusRoutes);
app.use('/', businessRoutes);
app.use('/', partnersRoutes);
app.use('/', portfolioRoutes);
app.use('/', serviceRouter);
app.use('/', usecaseRoutes);
app.use('/', dronepediaRoutes);
app.use('/', resourcesRoutes);
app.use('/', productRouter);
app.use('/', articlesRoutes);

app.use((req, res) => {
    res.status(404).send(`
        <div style="text-align:center; margin-top:100px; font-family: sans-serif;">
            <h1 style="color: #333;">404 - Page Not Found</h1>
            <p style="color: #666; margin-bottom: 20px;">
                The page you are looking for at <strong>${req.url}</strong> is currently under development or does not exist.
            </p>
            <a href="/" style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
                Return to Homepage
            </a>
        </div>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 AMX UAV Server is running smoothly at http://localhost:${PORT}`);
});