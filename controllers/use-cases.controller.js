exports.redirectUseCase = (req, res) => {
  res.redirect('/use-case/infrastructure');
};

exports.getInfrastructure = (req, res) => {
  res.render('use-case-infrastructure', {
    active: 'infrastructure',
    title: 'Infrastructure Use Case | AMX UAV',
  });
};

exports.getTourism = (req, res) => {
  res.render('use-case-tourism', {
    active: 'tourism',
    title: 'Tourism Use Case | AMX UAV',
  });
};

exports.getAgriForest = (req, res) => {
  res.render('use-case-agri-forest', {
    active: 'agri-forest',
    title: 'Agri Forest Use Case | AMX UAV',
  });
};

exports.getAgriPlant = (req, res) => {
  res.render('use-case-agri-plant', {
    active: 'agri-plant',
    title: 'Agri Plant Use Case | AMX UAV',
  });
};
