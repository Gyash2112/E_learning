const express= require('express');
const router= express.Router();
const userController= require('../controllers/users_controller');
router.get('/sign-in', userController.signIn);

router.post('/create-User', userController.createUser);

router.post('/create-Session', userController.createSession);
module.exports= router;