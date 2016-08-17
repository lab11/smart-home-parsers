// Generated from Nearby.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\nj\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3",
    "\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\5\4,\n\4\3\5\3\5\3\5\3\5\3\5\3\5",
    "\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\6\6?\n\6\r\6\16\6@\3\6",
    "\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7",
    "T\n\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3",
    "\t\3\t\3\t\3\t\5\ti\n\t\2\2\n\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\3\2",
    "\3\5\2\13\f\17\17\"\"m\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2",
    "\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\3\23\3\2\2\2\5",
    "\27\3\2\2\2\7+\3\2\2\2\t-\3\2\2\2\13>\3\2\2\2\rS\3\2\2\2\17U\3\2\2\2",
    "\21h\3\2\2\2\23\24\7c\2\2\24\25\7t\2\2\25\26\7g\2\2\26\4\3\2\2\2\27",
    "\30\7v\2\2\30\31\7j\2\2\31\32\7g\2\2\32\33\7\"\2\2\33\34\7n\2\2\34\35",
    "\7k\2\2\35\36\7i\2\2\36\37\7j\2\2\37 \7v\2\2 !\7u\2\2!\"\7\"\2\2\"#",
    "\7q\2\2#$\7p\2\2$\6\3\2\2\2%&\7y\2\2&\'\7j\2\2\'(\7g\2\2(,\7p\2\2)*",
    "\7k\2\2*,\7h\2\2+%\3\2\2\2+)\3\2\2\2,\b\3\2\2\2-.\7v\2\2./\7j\2\2/\60",
    "\7g\2\2\60\61\7t\2\2\61\62\7g\2\2\62\63\7\"\2\2\63\64\7k\2\2\64\65\7",
    "u\2\2\65\66\7\"\2\2\66\67\7o\2\2\678\7q\2\289\7v\2\29:\7k\2\2:;\7q\2",
    "\2;<\7p\2\2<\n\3\2\2\2=?\t\2\2\2>=\3\2\2\2?@\3\2\2\2@>\3\2\2\2@A\3\2",
    "\2\2AB\3\2\2\2BC\b\6\2\2C\f\3\2\2\2DE\7v\2\2EF\7w\2\2FG\7t\2\2GH\7p",
    "\2\2HI\7\"\2\2IJ\7q\2\2JT\7p\2\2KL\7v\2\2LM\7w\2\2MN\7t\2\2NO\7p\2\2",
    "OP\7\"\2\2PQ\7q\2\2QR\7h\2\2RT\7h\2\2SD\3\2\2\2SK\3\2\2\2T\16\3\2\2",
    "\2UV\7v\2\2VW\7j\2\2WX\7g\2\2X\20\3\2\2\2YZ\7n\2\2Z[\7k\2\2[\\\7i\2",
    "\2\\]\7j\2\2]^\7v\2\2^i\7u\2\2_`\7r\2\2`a\7t\2\2ab\7q\2\2bc\7l\2\2c",
    "d\7g\2\2de\7e\2\2ef\7v\2\2fg\7q\2\2gi\7t\2\2hY\3\2\2\2h_\3\2\2\2i\22",
    "\3\2\2\2\7\2+@Sh\3\b\2\2"].join("");


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
NearbyLexer.ARE = 1;
NearbyLexer.ARE_QUERY = 2;
NearbyLexer.WHEN = 3;
NearbyLexer.WHEN_CONDITION = 4;
NearbyLexer.WS = 5;
NearbyLexer.VERB = 6;
NearbyLexer.DETERMINER = 7;
NearbyLexer.NOUN = 8;


NearbyLexer.modeNames = [ "DEFAULT_MODE" ];

NearbyLexer.literalNames = [ 'null', "'are'", "'the lights on'", 'null', 
                             "'there is motion'", 'null', 'null', "'the'" ];

NearbyLexer.symbolicNames = [ 'null', "ARE", "ARE_QUERY", "WHEN", "WHEN_CONDITION", 
                              "WS", "VERB", "DETERMINER", "NOUN" ];

NearbyLexer.ruleNames = [ "ARE", "ARE_QUERY", "WHEN", "WHEN_CONDITION", 
                          "WS", "VERB", "DETERMINER", "NOUN" ];

NearbyLexer.grammarFileName = "Nearby.g4";



exports.NearbyLexer = NearbyLexer;

