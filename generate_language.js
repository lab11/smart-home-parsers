var mysql = require("mysql");
var trans = require("js/translator");
var dbconfig = require("secrets/database-credentials");

var language = new Array();
var partial_strs = new Array(["", "0"]);
var parse_succeeded = null;
var next_sentences = null;

var ErrorListener = require("antlr4/error/ErrorListener").ErrorListener;
function TestGrammarErrorListener() {
  ErrorListener.call(this);
  this.partialApplication = null;
  this.errors = [];
  return this;
}

TestGrammarErrorListener.prototype = Object.create(ErrorListener.prototype);
TestGrammarErrorListener.prototype.constructor = TestGrammarErrorListener;

var testTokens; //TEST global for console stuff
var testParser;
TestGrammarErrorListener.prototype.syntaxError = function(
  recognizer,
  offendingSymbol,
  line,
  column,
  msg,
  e
) {
  this.errors.push(arguments);
  parse_succeeded = false;
  //console.log("PARSER ERROR");
  //console.log(msg);
  var parser = recognizer._ctx.parser;
  testParser = recognizer._ctx.parser;
  testTokens = parser.getExpectedTokens(); //CRITICAL. This is an interval set with the numbers that correspond to the expected token types
  tokenString = testTokens.toString(); //String like '{1..2, 4..9}' or '8..9'
  //console.log(tokenString);
  var tokenStrArray = tokenString
    .replace("{", "")
    .replace("}", "")
    .split(", "); //Array of strings like ['1..2', '4..9']
  var tokenArray = [];
  //console.log(tokenStrArray);
  for (i = 0; i < tokenStrArray.length; i++) {
    intInterval = tokenStrArray[i];
    if (intInterval.indexOf("..") !== -1) {
      var endpoints = intInterval.split("..");
      var start = parseInt(endpoints[0], 10);
      var end = parseInt(endpoints[1], 10);
      for (j = start; j < end + 1; j++) {
        tokenArray.push(j);
      }
    } else {
      tokenArray.push(parseInt(intInterval, 10));
    }
  }
  //console.log(tokenArray);
  // End interval set to array of integers conversion
  // Begin convert from array of integers to array of symbolic names
  for (i in tokenArray) {
    tokenArray[i] = parser.symbolicNames[parseInt(tokenArray[i], 10)];
  }
  //console.log(tokenArray);
  // End conversion from integers to symbolic names

  this.partialApplication = null;
  var typeAssistTokens = parser.symbolicNames;
  var tokens = parser.getTokenStream().tokens;

  // last token is always "fake" EOF token
  if (tokens.length > 1) {
    var lastToken = tokens[tokens.length - 2],
      tokenType = parser.symbolicNames[lastToken.type];

    this.tokenType = tokenType;
    if (typeAssistTokens.indexOf(tokenType) >= 0) {
      this.partialApplication = lastToken.text;
      console.log("partial application: " + this.partialApplication);
    }
  }

  var con = mysql.createConnection(dbconfig.dbconfig);

  var table_name = "";

  var next_literals = [];

  con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
    for (i in tokenArray) {
      table_name = tokenArray[i];
      var sql = "SELECT literal FROM _" + table_name;
      con.query(sql, function(err, result) {
        if (err) throw err;
        //console.log(result[0]["literal"]);
        next_literals.push(result[0]["literal"]);
      });
    }
    setTimeout(function() {
      //console.log("next literals: ", next_literals);
      var text = "";
      var token_indices = "0";
      var token_index_counter = 0;
      for (i in tokens) {
        if (i < tokens.length - 1) {
          text += tokens[i].text + " ";
          token_index_counter += tokens[i].text.length;
          token_indices += " " + token_index_counter.toString();
        }
      }
      //console.log("text: ", text);
      for (i in next_literals) {
        new_str = text + next_literals[i];
        new_str = new_str.trim();
        next_sentences.push([new_str, token_indices]);
      }
      //console.log(next_sentences);
      con.end();
    }, 50);
  });
};

var antlr4 = require("antlr4/index");
var NearbyLexer = require("generated-parser/NearbyLexer");
var NearbyParser = require("generated-parser/NearbyParser");

function parseStr(my_str) {
  var input = my_str;
  var chars = new antlr4.InputStream(input);
  var lexer = new NearbyLexer.NearbyLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new NearbyParser.NearbyParser(tokens);
  var listener = new TestGrammarErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  parser.buildParseTrees = true;
  var tree = parser.application();
  //updateTree(tree, parser.ruleNames);
  var translator = new TargetTranslator();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(translator, tree);
  //var request = new XMLHttpRequest();
  //request.open("POST", "php/post-to-target.php", true);
  //request.setRequestHeader("Content-type", "application/json");
  //request.send(str_json);
}

function showResult(str) {
  var input = str;
  var chars = new antlr4.InputStream(input);
  var lexer = new NearbyLexer.NearbyLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new NearbyParser.NearbyParser(tokens);
  var listener = new TestGrammarErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  parser.buildParseTrees = true;
  //console.log(parser._errHandler); //TEST
  var tree = parser.application();

  var tokens = parser.getTokenStream().tokens;
  tokens = tokens.slice(0, tokens.length - 1);

  var tokenString = "";
  for (i in tokens) {
    tokenString += parser.symbolicNames[tokens[i].type] + " ";
  }
}

function processPartialStrs() {
  if (partial_strs.length != 0) {
    //console.log("processing")
    parse_succeeded = true;
    next_sentences = new Array();
    console.log("yo", partial_strs);
    test_str_and_indices = partial_strs.pop();

    test_str = test_str_and_indices[0].toLowerCase();
    token_indices = test_str_and_indices[1];
    parseStr(test_str);
    //console.log("post parse success", parse_succeeded)
    //console.log("next sentences", next_sentences);
    if (!parse_succeeded) {
      //console.log(test_str);
      setTimeout(function() {
        for (i = 0; i < next_sentences.length; i++) {
          var next_sentence = next_sentences[i];
          partial_strs.push(next_sentence);
        }
        console.log(partial_strs);
        //console.log(partial_strs.length);
        processPartialStrs();
      }, 100);
    } else {
      //console.log("more processing");
      language.push([test_str, token_indices]);
      processPartialStrs();
    }
  } else {
    //console.log("continuing...");
    //console.log(language);

    var con = mysql.createConnection(dbconfig.dbconfig);

    var tablename = "language";

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected to database...");
      // delete language table if exists
      var drop_table = "DROP TABLE IF EXISTS " + tablename;
      con.query(drop_table, function(err, result) {
        if (err) throw err;
        // create new language table
        var create_table =
          "CREATE TABLE " +
          tablename +
          " (sentence VARCHAR(255), token_indices VARCHAR(255))";
        con.query(create_table, function(err, result) {
          if (err) throw err;
          // insert new language (insert into for each sentence)
          var insert =
            "INSERT INTO " + tablename + " (sentence, token_indices) VALUES ?";
          var values = [];
          for (i in language) {
            values.push([language[i][0], language[i][1]]);
          }
          //var values = language;
          con.query(insert, [values], function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
            con.end();
            process.exit();
          });
        });
      });
    });
  }
}

processPartialStrs();
