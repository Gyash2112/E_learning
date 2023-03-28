const express= require('express');
const router= express.Router();
const userController= require('../controllers/users_controller');
router.get('/sign-in', userController.signIn);

router.post('/create-User', userController.createUser);

module.exports= router;