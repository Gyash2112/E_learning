var editor= CodeMirror.fromTextArea(document.getElementById("editor"),{
    mode:"text/x-java",
    theme:'dracula',
    lineNumbers:true,
    autoCloseBrackets:true,
    indentUnit: 4,
    lineWrapping:true,
    // extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter:true,
//       foldGutter: {
// rangeFinder: new CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)
//                   },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]

});



//   var width = window.innerWidth;
editor.setSize("100%" , "80vh");
var languages = document.getElementById('language');
editor.getDoc().setValue('class Main{\r\n' +
'   \r\n' +
'    public static void main(String args[]){\r\n' +
'        Solution s = new Solution();\r\n' +
'        System.out.println(s.calculate(4,5));\r\n' +
'        \r\n' +
'    }\r\n' +
'}\r\n' +
'\r\n' +
'class Solution{\r\n' +
'     public static int calculate(int x, int y){\r\n' +
'        //Write your code here\r\n' +
'        \r\n' +
'    }\r\n' +
'}');
editor.foldCode(CodeMirror.Pos(0));

language.addEventListener("change", function(){
    if(language.value=="java"){
        editor.setOption("mode", "text/x-java");
        editor.getDoc().setValue('class Main{\r\n' +
'   \r\n' +
'    public static void main(String args[]){\r\n' +
'        Solution s = new Solution();\r\n' +
'        System.out.println(s.calculate(4,5));\r\n' +
'        \r\n' +
'    }\r\n' +
'}\r\n' +
'\r\n' +
'class Solution{\r\n' +
'     public static int calculate(int x, int y){\r\n' +
'        //Write your code here\r\n' +
'        \r\n' +
'    }\r\n' +
'}');
editor.foldCode(CodeMirror.Pos(0));

    }
    else if(language.value=="py"){
        editor.setOption("mode", "python");
        editor.getDoc().setValue('def calculate(x,y):\n\t#write your code here\nprint(calculate(4,5))')
        editor.foldCode(CodeMirror.Pos(0));
    }
    else if(language.value=="c++"){
        editor.setOption("mode", "text/x-c++src");
    }
});