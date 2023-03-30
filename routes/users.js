const express= require('express');
const router= express.Router();
const userController= require('../controllers/users_controller');
router.get('/sign-in', userController.signIn);
router.get('/profile', userController.profile);
router.post('/create-User', userController.createUser);

router.post('/create-Session', userController.createSession);
router.get('/sign-out', userController.destroySession);
module.exports= router;