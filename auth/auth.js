const User = require('../models/user');
console.log("Autenticated middleware");
module.exports.isAuthenticated = async function(req, res,next){
    
    if(!req.session.user || req.session.user== undefined){
        return res.redirect('/users/sign-in');
    }
    const authUser = await User.findById(req.session.user._id);

    if(!authUser){
        return res.redirect('/users/sign-in');
    }

    


    next();
}

module.exports.checkAuthentication = async function(req,res,next){

        if(req.session.user){
            return res.redirect('/users/profile');
        }
    

    next();
    
}


