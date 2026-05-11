exports.redirectPortfolio = (req, res) => {
  res.redirect('/about-us/portfolio/2018');
};

exports.getPortfolio2018 = (req, res) => {
  res.render('portfolio-2018', {
    active: '2018',
    title: 'Portfolio 2018 | AMX UAV',
  });
};

exports.getPortfolio2019 = (req, res) => {
  res.render('portfolio-2019', {
    active: '2019',
    title: 'Portfolio 2019 | AMX UAV',
  });
};

exports.getPortfolio2020 = (req, res) => {
  res.render('portfolio-2020', {
    active: '2020',
    title: 'Portfolio 2020 | AMX UAV',
  });
};

exports.getPortfolio2021 = (req, res) => {
  res.render('portfolio-2021', {
    active: '2021',
    title: 'Portfolio 2021 | AMX UAV',
  });
};

exports.getPortfolio2022 = (req, res) => {
  res.render('portfolio-2022', {
    active: '2022',
    title: 'Portfolio 2022 | AMX UAV',
  });
};

exports.getPortfolio2023 = (req, res) => {
  res.render('portfolio-2023', {
    active: '2023',
    title: 'Portfolio 2023 | AMX UAV',
  });
};

exports.getPortfolio2024 = (req, res) => {
  res.render('portfolio-2024', {
    active: '2024',
    title: 'Portfolio 2024 | AMX UAV',
  });
};

exports.getPortfolio2025 = (req, res) => {
  res.render('portfolio-2025', {
    active: '2025',
    title: 'Portfolio 2025 | AMX UAV',
  });
};
