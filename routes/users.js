const express= require('express');
const router= express.Router();
const userController= require('../controllers/users_controller');
const auth = require('../auth/auth');
router.get('/sign-in',auth.checkAuthentication ,userController.signIn);
router.get('/profile', auth.isAuthenticated ,userController.profile);
router.post('/create-User', userController.createUser);

router.post('/create-Session', userController.createSession);
router.get('/sign-out', userController.destroySession);
module.exports= router;