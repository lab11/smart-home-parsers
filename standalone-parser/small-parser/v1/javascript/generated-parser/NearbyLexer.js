// Generated from Nearby.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\13\177\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t",
    "\b\4\t\t\t\4\n\t\n\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3",
    "\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\5\4.\n\4\3\5\3\5\3\5",
    "\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\6\6A\n\6\r",
    "\6\16\6B\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7",
    "\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b",
    "\3\b\3\b\3\b\3\b\5\bi\n\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3",
    "\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n~\n\n\2\2\13\3\3\5\4\7\5\t\6\13",
    "\7\r\b\17\t\21\n\23\13\3\2\3\5\2\13\f\17\17\"\"\u0082\2\3\3\2\2\2\2",
    "\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2",
    "\2\2\2\21\3\2\2\2\2\23\3\2\2\2\3\25\3\2\2\2\5\31\3\2\2\2\7-\3\2\2\2",
    "\t/\3\2\2\2\13@\3\2\2\2\rF\3\2\2\2\17h\3\2\2\2\21j\3\2\2\2\23}\3\2\2",
    "\2\25\26\7c\2\2\26\27\7t\2\2\27\30\7g\2\2\30\4\3\2\2\2\31\32\7v\2\2",
    "\32\33\7j\2\2\33\34\7g\2\2\34\35\7\"\2\2\35\36\7n\2\2\36\37\7k\2\2\37",
    " \7i\2\2 !\7j\2\2!\"\7v\2\2\"#\7u\2\2#$\7\"\2\2$%\7q\2\2%&\7p\2\2&\6",
    "\3\2\2\2\'(\7y\2\2()\7j\2\2)*\7g\2\2*.\7p\2\2+,\7k\2\2,.\7h\2\2-\'\3",
    "\2\2\2-+\3\2\2\2.\b\3\2\2\2/\60\7v\2\2\60\61\7j\2\2\61\62\7g\2\2\62",
    "\63\7t\2\2\63\64\7g\2\2\64\65\7\"\2\2\65\66\7k\2\2\66\67\7u\2\2\678",
    "\7\"\2\289\7o\2\29:\7q\2\2:;\7v\2\2;<\7k\2\2<=\7q\2\2=>\7p\2\2>\n\3",
    "\2\2\2?A\t\2\2\2@?\3\2\2\2AB\3\2\2\2B@\3\2\2\2BC\3\2\2\2CD\3\2\2\2D",
    "E\b\6\2\2E\f\3\2\2\2FG\7c\2\2GH\7t\2\2HI\7g\2\2IJ\7\"\2\2JK\7v\2\2K",
    "L\7j\2\2LM\7g\2\2MN\7\"\2\2NO\7n\2\2OP\7k\2\2PQ\7i\2\2QR\7j\2\2RS\7",
    "v\2\2ST\7u\2\2TU\7\"\2\2UV\7q\2\2VW\7p\2\2WX\7A\2\2X\16\3\2\2\2YZ\7",
    "v\2\2Z[\7w\2\2[\\\7t\2\2\\]\7p\2\2]^\7\"\2\2^_\7q\2\2_i\7p\2\2`a\7v",
    "\2\2ab\7w\2\2bc\7t\2\2cd\7p\2\2de\7\"\2\2ef\7q\2\2fg\7h\2\2gi\7h\2\2",
    "hY\3\2\2\2h`\3\2\2\2i\20\3\2\2\2jk\7v\2\2kl\7j\2\2lm\7g\2\2m\22\3\2",
    "\2\2no\7n\2\2op\7k\2\2pq\7i\2\2qr\7j\2\2rs\7v\2\2s~\7u\2\2tu\7r\2\2",
    "uv\7t\2\2vw\7q\2\2wx\7l\2\2xy\7g\2\2yz\7e\2\2z{\7v\2\2{|\7q\2\2|~\7",
    "t\2\2}n\3\2\2\2}t\3\2\2\2~\24\3\2\2\2\7\2-Bh}\3\b\2\2"].join("");


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
NearbyLexer.QUERY = 6;
NearbyLexer.VERB = 7;
NearbyLexer.DETERMINER = 8;
NearbyLexer.NOUN = 9;


NearbyLexer.modeNames = [ "DEFAULT_MODE" ];

NearbyLexer.literalNames = [ 'null', "'are'", "'the lights on'", 'null', 
                             "'there is motion'", 'null', "'are the lights on?'", 
                             'null', "'the'" ];

NearbyLexer.symbolicNames = [ 'null', "ARE", "ARE_QUERY", "WHEN", "WHEN_CONDITION", 
                              "WS", "QUERY", "VERB", "DETERMINER", "NOUN" ];

NearbyLexer.ruleNames = [ "ARE", "ARE_QUERY", "WHEN", "WHEN_CONDITION", 
                          "WS", "QUERY", "VERB", "DETERMINER", "NOUN" ];

NearbyLexer.grammarFileName = "Nearby.g4";



exports.NearbyLexer = NearbyLexer;

