exports.redirectProducts = (req, res) => {
    res.redirect('/products/mapping');
};

exports.getMappingProducts = (req, res) => {
    res.render('products-mapping', { active: 'mapping', title: 'Mapping Products | AMX UAV' });
};

exports.getEducationProducts = (req, res) => {
    res.render('products-education', { active: 'education', title: 'Education Products | AMX UAV' });
};

exports.getVerticAir = (req, res) => {
    res.render('vertic-air', { title: 'Vertic Air | AMX UAV' });
};

exports.getVerticXL = (req, res) => {
    res.render('vertic-xl', { title: 'Vertic XL | AMX UAV' });
};

exports.getQubit = (req, res) => {
    res.render('qubit', { title: 'Qubit | AMX UAV' });
};