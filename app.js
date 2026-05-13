require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const indexRoutes = require('./routes/index.routes');
const productsRoutes = require('./routes/products.routes');
const servicesRoutes = require('./routes/services.routes');
const resourcesRoutes = require('./routes/resources.routes');
const useCasesRoutes = require('./routes/use-cases.routes');
const dronepediaRoutes = require('./routes/dronepedia.routes');
const aboutUsRoutes = require('./routes/about-us.routes');
const businessRoutes = require('./routes/business.routes');
const partnersRoutes = require('./routes/partners.routes');
const portfolioRoutes = require('./routes/portfolio.routes');
const articlesRoutes = require('./routes/articles.routes');

app.use(expressLayouts);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/', aboutUsRoutes);
app.use('/', businessRoutes);
app.use('/', partnersRoutes);
app.use('/', portfolioRoutes);
app.use('/', servicesRoutes);
app.use('/', useCasesRoutes);
app.use('/', dronepediaRoutes);
app.use('/', resourcesRoutes);
app.use('/', productsRoutes);
app.use('/', articlesRoutes);

app.use((req, res) => {
  res.status(404).render('error-404', {
    title: '404 - Not Found',
    url: req.url,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `🚀 AMX UAV Server running in ${process.env.NODE_ENV || 'development'} mode at http://localhost:${PORT}`
  );
});