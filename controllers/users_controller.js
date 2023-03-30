const User = require('../models/user');

module.exports.signIn= function(req,res){

    return res.render('users_sign_in',
    {
        layout: false,
        title: "Sign In"
    })
}

module.exports.profile= async function(req,res){
    const existUser = await User.findById(req.session.user._id);
    if(!existUser){
        console.log("User not exist with the given cookie id");
        return res.redirect('/users/sign-in');

    }
    return res.render('users_profile', {   
        title: 'Profile Page',
        user:existUser
    }); 
}



module.exports.createUser =async function(req,res){
        if(req.body.password != req.body.confirm_password){
            return res.redirect('back');
        }
        delete req.body.confirm_password;
    

    const existUser = await User.findOne({email:req.body.email});

    if(!existUser){
        try{
            const createdUser = await  User.create(req.body);
            console.log(createdUser);
        }
        catch(err){
            console.log(err);
        }
    }

        return res.redirect('/users/sign-in');
}

module.exports.createSession = async function(req,res){
    
    const findUser = await User.findOne({email: req.body.email});

    if(!findUser){
        console.log("User Not Found");
        return res.redirect('back');
    }
    console.log(findUser);

    if(findUser.password != req.body.password){
        console.log("Password Incorrect");
        return res.redirect('back');
    }

    // res.cookie('id',findUser._id);
    req.session.user = findUser;
    return res.redirect('/users/profile');
    
}


module.exports.destroySession= function(req,res){
    res.clearCookie('id');

    return res.redirect('/users/sign-in');
}

