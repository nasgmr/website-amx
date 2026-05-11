const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const indexRouter = require('./routes/index.routes');
const productRouter = require('./routes/products.routes');
const serviceRouter = require('./routes/services.routes');
const resourcesRoutes = require('./routes/resources.routes');
const usecaseRoutes = require('./routes/use-case.routes');
const dronepediaRoutes = require('./routes/dronepedia.routes');
const aboutusRoutes = require('./routes/about-us.routes');
const businessRoutes = require('./routes/business.routes');
const partnersRoutes = require('./routes/partners.routes');
const portfolioRoutes = require('./routes/portfolio.routes');
const articlesRoutes = require('./routes/articles.routes');

app.use(expressLayouts);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', aboutUsRouter);
app.use('/', businessRouter);
app.use('/', partnersRouter);
app.use('/', portfolioRouter);
app.use('/', servicesRouter);
app.use('/', useCasesRouter);
app.use('/', dronepediaRouter);
app.use('/', resourcesRouter);
app.use('/', productsRouter);
app.use('/', articlesRouter);

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