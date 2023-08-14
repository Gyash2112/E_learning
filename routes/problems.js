const express= require('express');
const router= express.Router();
const problemController= require('../controllers/problemController');


router.get('/code',problemController.code);

router.post('/runCode',problemController.runCode);

module.exports = router;