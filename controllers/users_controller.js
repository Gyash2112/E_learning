module.exports.signIn= function(req,res){

    return res.render('users_sign_in',
    {
        layout: false,
        title: "Sign In"
    })
}