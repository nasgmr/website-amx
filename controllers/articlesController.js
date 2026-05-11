exports.getArticlesList = (req, res) => {
    res.render('articles', { title: 'Articles | AMX UAV' });
};

exports.getArticleDetail = (req, res) => {
    res.render('articles-detail', { title: 'Article Detail | AMX UAV' });
};