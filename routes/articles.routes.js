const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');

router.get('/about-us/articles', articlesController.getArticlesList);
router.get('/about-us/articles/detail', articlesController.getArticleDetail);

module.exports = router;
