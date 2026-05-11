require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const routes = {
  index: require('./routes/index'),
  products: require('./routes/productRoutes'),
  services: require('./routes/serviceRoutes'),
  resources: require('./routes/resourcesRoutes'),
  usecases: require('./routes/usecaseRoutes'),
  dronepedia: require('./routes/dronepediaRoutes'),
  about: require('./routes/aboutusRoutes'),
  business: require('./routes/businessRoutes'),
  partners: require('./routes/partnersRoutes'),
  portfolio: require('./routes/portfolioRoutes'),
  articles: require('./routes/articlesRoutes'),
};

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
