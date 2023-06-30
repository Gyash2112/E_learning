const express= require('express');
const router= express.Router();

const homeController= require('../controllers/homeController');

router.get('/',homeController.home);
router.get('/about', homeController.aboutUs);
router.use('/users', require('./users'));
router.use('/problems', require('./problems'));

module.exports = router;