// Generated from Nearby.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\bZ\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\6\2\21",
    "\n\2\r\2\16\2\22\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3",
    "\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4",
    "\3\4\3\4\3\4\3\4\3\4\3\4\5\49\n\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3",
    "\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3",
    "\7\3\7\3\7\3\7\3\7\3\7\3\7\2\2\b\3\3\5\4\7\5\t\6\13\7\r\b\3\2\3\5\2",
    "\13\f\17\17\"\"[\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13",
    "\3\2\2\2\2\r\3\2\2\2\3\20\3\2\2\2\5\26\3\2\2\2\78\3\2\2\2\t:\3\2\2\2",
    "\13>\3\2\2\2\rE\3\2\2\2\17\21\t\2\2\2\20\17\3\2\2\2\21\22\3\2\2\2\22",
    "\20\3\2\2\2\22\23\3\2\2\2\23\24\3\2\2\2\24\25\b\2\2\2\25\4\3\2\2\2\26",
    "\27\7c\2\2\27\30\7t\2\2\30\31\7g\2\2\31\32\7\"\2\2\32\33\7v\2\2\33\34",
    "\7j\2\2\34\35\7g\2\2\35\36\7\"\2\2\36\37\7n\2\2\37 \7k\2\2 !\7i\2\2",
    "!\"\7j\2\2\"#\7v\2\2#$\7u\2\2$%\7\"\2\2%&\7q\2\2&\'\7p\2\2\'(\7A\2\2",
    "(\6\3\2\2\2)*\7v\2\2*+\7w\2\2+,\7t\2\2,-\7p\2\2-.\7\"\2\2./\7q\2\2/",
    "9\7p\2\2\60\61\7v\2\2\61\62\7w\2\2\62\63\7t\2\2\63\64\7p\2\2\64\65\7",
    "\"\2\2\65\66\7q\2\2\66\67\7h\2\2\679\7h\2\28)\3\2\2\28\60\3\2\2\29\b",
    "\3\2\2\2:;\7v\2\2;<\7j\2\2<=\7g\2\2=\n\3\2\2\2>?\7n\2\2?@\7k\2\2@A\7",
    "i\2\2AB\7j\2\2BC\7v\2\2CD\7u\2\2D\f\3\2\2\2EF\7y\2\2FG\7j\2\2GH\7g\2",
    "\2HI\7p\2\2IJ\7\"\2\2JK\7v\2\2KL\7j\2\2LM\7g\2\2MN\7t\2\2NO\7g\2\2O",
    "P\7\"\2\2PQ\7k\2\2QR\7u\2\2RS\7\"\2\2ST\7o\2\2TU\7q\2\2UV\7v\2\2VW\7",
    "k\2\2WX\7q\2\2XY\7p\2\2Y\16\3\2\2\2\5\2\228\3\b\2\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function NearbyLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

NearbyLexer.prototype = Object.create(antlr4.Lexer.prototype);
NearbyLexer.prototype.constructor = NearbyLexer;

NearbyLexer.EOF = antlr4.Token.EOF;
NearbyLexer.WS = 1;
NearbyLexer.QUERY = 2;
NearbyLexer.VERB = 3;
NearbyLexer.DETERMINER = 4;
NearbyLexer.NOUN = 5;
NearbyLexer.CONDITION = 6;


NearbyLexer.modeNames = [ "DEFAULT_MODE" ];

NearbyLexer.literalNames = [ 'null', 'null', "'are the lights on?'", 'null', 
                             "'the'", "'lights'", "'when there is motion'" ];

NearbyLexer.symbolicNames = [ 'null', "WS", "QUERY", "VERB", "DETERMINER", 
                              "NOUN", "CONDITION" ];

NearbyLexer.ruleNames = [ "WS", "QUERY", "VERB", "DETERMINER", "NOUN", "CONDITION" ];

NearbyLexer.grammarFileName = "Nearby.g4";



exports.NearbyLexer = NearbyLexer;

