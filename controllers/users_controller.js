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

