exports.redirectDronepedia = (req, res) => {
    res.redirect('/products/dronepedia/how-it-works');
};

exports.getHowItWorks = (req, res) => {
    res.render('dronepedia-how-it-works', { title: 'How It Works | Dronepedia' });
};

exports.getClassifications = (req, res) => {
    res.render('dronepedia-classifications', { title: 'Classifications | Dronepedia' });
};

exports.getApplications = (req, res) => {
    res.render('dronepedia-applications', { title: 'Applications | Dronepedia' });
};