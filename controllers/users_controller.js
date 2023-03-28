const User = require('../models/user');

module.exports.signIn= function(req,res){

    return res.render('users_sign_in',
    {
        layout: false,
        title: "Sign In"
    })
}


module.exports.createUser =async function(req,res){
        if(req.body.password != req.body.confirm_password){
            return res.redirect('back');
        }
        delete req.body.confirm_password;
    //    User.create(req.body, function(err, user){
    //     if(err){console.log("Error in creating User"); return;}

    //     console.log("User added");
    //     console.log(user);
    //     return res.redirect('/users/sign-in');

    //    })

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

    res.cookie('id', findUser.email);
    // req.cookies('id', findUser.email);
    console.log(req.cookies);
    return res.render('users_profile', {
        title: 'Profile Page'
    });

    
}

