const express= require('express');
const router= express.Router();
const problemController= require('../controllers/problemController');


router.get('/code',problemController.code);

module.exports = router;