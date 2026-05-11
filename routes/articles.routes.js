const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');

router.get('/about-us/articles', articles.controller.getArticlesList);
router.get('/about-us/articles/detail', articles.controller.getArticleDetail);

module.exports = router;