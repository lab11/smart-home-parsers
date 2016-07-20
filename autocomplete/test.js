//var HelloLexer =require('lib/HelloLexer'); 
//var HelloParser =require('lib/HelloParser'); 
//var HelloListener=require('lib/HelloListener');

var antlr4 = require('antlr4/index');

    KeyPrinter = function() {
             HelloListener.call(this); // inherit default listener
             return this;
        };

    // inherit default listener
    KeyPrinter.prototype = Object.create(HelloListener.prototype);
    KeyPrinter.prototype.constructor = KeyPrinter;

    // override default listener behavior
           KeyPrinter.prototype.exitKey = function(ctx) {      
           console.log("Oh, a key!");
       }; 

        var input = "your text to parse here"
   var chars = new antlr4.InputStream(input);
   var lexer = new HelloLexer.HelloLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new HelloParser.HelloParser(tokens);
   parser.buildParseTrees = true;
   var tree = parser.r()
   var printer = new KeyPrinter();
 antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);