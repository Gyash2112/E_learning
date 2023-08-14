var compiler = require('compilex');
var option = {stats:true};
compiler.init(option);
var envData = { OS : "windows"};
module.exports.code=function(req,res){

    return res.render('question_code',{
        layout:'code_run_layout',
    })
}

module.exports.runCode=function(req,res){
    var code = req.body.code;
    var lang=req.body.language;
    if(lang=="java"){
        compiler.compileJava( envData , code , function(data){
            res.send(data);
        });    
    }
    else{
        compiler.compilePython(envData,code,function(data){
            res.send(data);
        })
    }


}