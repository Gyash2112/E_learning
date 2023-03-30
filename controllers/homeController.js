const User = require('../models/user');

module.exports.home= function(req,res){
    return res.render('home', {
        
        title: "HOME PAGE"
    });
}

module.exports.aboutUs= async function(req,res){

    const cookieUser= await User.findById(req.session.user._id);

    console.log("COOKIE USER",cookieUser);
    res.send("ABOUT US");

}
