// Generated from Nearby.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001c\u00c8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0003\u0002\u0005\u0002@\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003G\n\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u0004K\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005P\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005U\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005]\n\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005a\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005f\n\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005j\n\u0005\u0005\u0005l\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006t\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007y\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b\u0083\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0089\n\b\u0005",
    "\b\u008b\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0091\n\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\t\u0097\n\t\u0005\t\u0099\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0002\u0002 \u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<\u0002\u0002",
    "\u00c0\u0002?\u0003\u0002\u0002\u0002\u0004F\u0003\u0002\u0002\u0002",
    "\u0006J\u0003\u0002\u0002\u0002\bk\u0003\u0002\u0002\u0002\nm\u0003",
    "\u0002\u0002\u0002\fx\u0003\u0002\u0002\u0002\u000e\u008a\u0003\u0002",
    "\u0002\u0002\u0010\u0098\u0003\u0002\u0002\u0002\u0012\u009a\u0003\u0002",
    "\u0002\u0002\u0014\u009d\u0003\u0002\u0002\u0002\u0016\u009f\u0003\u0002",
    "\u0002\u0002\u0018\u00a1\u0003\u0002\u0002\u0002\u001a\u00a3\u0003\u0002",
    "\u0002\u0002\u001c\u00a5\u0003\u0002\u0002\u0002\u001e\u00a7\u0003\u0002",
    "\u0002\u0002 \u00a9\u0003\u0002\u0002\u0002\"\u00ab\u0003\u0002\u0002",
    "\u0002$\u00ad\u0003\u0002\u0002\u0002&\u00af\u0003\u0002\u0002\u0002",
    "(\u00b1\u0003\u0002\u0002\u0002*\u00b3\u0003\u0002\u0002\u0002,\u00b5",
    "\u0003\u0002\u0002\u0002.\u00b7\u0003\u0002\u0002\u00020\u00b9\u0003",
    "\u0002\u0002\u00022\u00bb\u0003\u0002\u0002\u00024\u00bd\u0003\u0002",
    "\u0002\u00026\u00bf\u0003\u0002\u0002\u00028\u00c1\u0003\u0002\u0002",
    "\u0002:\u00c3\u0003\u0002\u0002\u0002<\u00c5\u0003\u0002\u0002\u0002",
    ">@\u0007\u0014\u0002\u0002?>\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002",
    "\u0002@A\u0003\u0002\u0002\u0002AB\u0005\u0004\u0003\u0002BC\u0007\u0002",
    "\u0002\u0003C\u0003\u0003\u0002\u0002\u0002DG\u0005\u0006\u0004\u0002",
    "EG\u0005\u0010\t\u0002FD\u0003\u0002\u0002\u0002FE\u0003\u0002\u0002",
    "\u0002G\u0005\u0003\u0002\u0002\u0002HK\u0005\b\u0005\u0002IK\u0005",
    "\n\u0006\u0002JH\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002K",
    "\u0007\u0003\u0002\u0002\u0002LO\u0005\u0014\u000b\u0002MP\u00054\u001b",
    "\u0002NP\u00056\u001c\u0002OM\u0003\u0002\u0002\u0002ON\u0003\u0002",
    "\u0002\u0002Pl\u0003\u0002\u0002\u0002QT\u0005\u0016\f\u0002RU\u0005",
    "4\u001b\u0002SU\u00056\u001c\u0002TR\u0003\u0002\u0002\u0002TS\u0003",
    "\u0002\u0002\u0002Ul\u0003\u0002\u0002\u0002VW\u0005\u001a\u000e\u0002",
    "WX\u00058\u001d\u0002Xl\u0003\u0002\u0002\u0002Y\\\u0005\u001c\u000f",
    "\u0002Z]\u0005:\u001e\u0002[]\u0005<\u001f\u0002\\Z\u0003\u0002\u0002",
    "\u0002\\[\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^_\u0007",
    "\u0017\u0002\u0002_a\u0005\u0012\n\u0002`^\u0003\u0002\u0002\u0002`",
    "a\u0003\u0002\u0002\u0002al\u0003\u0002\u0002\u0002be\u0005\u001e\u0010",
    "\u0002cf\u0005:\u001e\u0002df\u0005<\u001f\u0002ec\u0003\u0002\u0002",
    "\u0002ed\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002gh\u0007\u0017",
    "\u0002\u0002hj\u0005\u0012\n\u0002ig\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002jl\u0003\u0002\u0002\u0002kL\u0003\u0002\u0002\u0002",
    "kQ\u0003\u0002\u0002\u0002kV\u0003\u0002\u0002\u0002kY\u0003\u0002\u0002",
    "\u0002kb\u0003\u0002\u0002\u0002l\t\u0003\u0002\u0002\u0002ms\u0005",
    " \u0011\u0002nt\u0005\f\u0007\u0002op\u0005 \u0011\u0002pq\u0007\u0013",
    "\u0002\u0002qr\u0005\u000e\b\u0002rt\u0003\u0002\u0002\u0002sn\u0003",
    "\u0002\u0002\u0002so\u0003\u0002\u0002\u0002t\u000b\u0003\u0002\u0002",
    "\u0002uy\u0005.\u0018\u0002vy\u00050\u0019\u0002wy\u00052\u001a\u0002",
    "xu\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xw\u0003\u0002\u0002",
    "\u0002y\r\u0003\u0002\u0002\u0002z{\u00058\u001d\u0002{|\u0005\"\u0012",
    "\u0002|}\u0005*\u0016\u0002}\u008b\u0003\u0002\u0002\u0002~\u007f\u0005",
    "4\u001b\u0002\u007f\u0082\u0005\"\u0012\u0002\u0080\u0083\u0005&\u0014",
    "\u0002\u0081\u0083\u0005(\u0015\u0002\u0082\u0080\u0003\u0002\u0002",
    "\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u008b\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u00056\u001c\u0002\u0085\u0088\u0005$\u0013\u0002",
    "\u0086\u0089\u0005&\u0014\u0002\u0087\u0089\u0005(\u0015\u0002\u0088",
    "\u0086\u0003\u0002\u0002\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089",
    "\u008b\u0003\u0002\u0002\u0002\u008az\u0003\u0002\u0002\u0002\u008a",
    "~\u0003\u0002\u0002\u0002\u008a\u0084\u0003\u0002\u0002\u0002\u008b",
    "\u000f\u0003\u0002\u0002\u0002\u008c\u008d\u0005\"\u0012\u0002\u008d",
    "\u0090\u00054\u001b\u0002\u008e\u0091\u0005&\u0014\u0002\u008f\u0091",
    "\u0005(\u0015\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u008f",
    "\u0003\u0002\u0002\u0002\u0091\u0099\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0005$\u0013\u0002\u0093\u0096\u00056\u001c\u0002\u0094\u0097\u0005",
    "&\u0014\u0002\u0095\u0097\u0005(\u0015\u0002\u0096\u0094\u0003\u0002",
    "\u0002\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u0099\u0003\u0002",
    "\u0002\u0002\u0098\u008c\u0003\u0002\u0002\u0002\u0098\u0092\u0003\u0002",
    "\u0002\u0002\u0099\u0011\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0016",
    "\u0002\u0002\u009b\u009c\u0007\u0015\u0002\u0002\u009c\u0013\u0003\u0002",
    "\u0002\u0002\u009d\u009e\u0007\u0003\u0002\u0002\u009e\u0015\u0003\u0002",
    "\u0002\u0002\u009f\u00a0\u0007\u0004\u0002\u0002\u00a0\u0017\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0007\u0005\u0002\u0002\u00a2\u0019\u0003\u0002",
    "\u0002\u0002\u00a3\u00a4\u0007\u0006\u0002\u0002\u00a4\u001b\u0003\u0002",
    "\u0002\u0002\u00a5\u00a6\u0007\u0007\u0002\u0002\u00a6\u001d\u0003\u0002",
    "\u0002\u0002\u00a7\u00a8\u0007\b\u0002\u0002\u00a8\u001f\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0007\t\u0002\u0002\u00aa!\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0007\n\u0002\u0002\u00ac#\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\u0007\u000b\u0002\u0002\u00ae%\u0003\u0002\u0002\u0002",
    "\u00af\u00b0\u0007\f\u0002\u0002\u00b0\'\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0007\r\u0002\u0002\u00b2)\u0003\u0002\u0002\u0002\u00b3\u00b4",
    "\u0007\u000e\u0002\u0002\u00b4+\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0007\u000f\u0002\u0002\u00b6-\u0003\u0002\u0002\u0002\u00b7\u00b8",
    "\u0007\u0010\u0002\u0002\u00b8/\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0007\u0011\u0002\u0002\u00ba1\u0003\u0002\u0002\u0002\u00bb\u00bc",
    "\u0007\u0012\u0002\u0002\u00bc3\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0007\u0018\u0002\u0002\u00be5\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u0007\u0019\u0002\u0002\u00c07\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0007\u001c\u0002\u0002\u00c29\u0003\u0002\u0002\u0002\u00c3\u00c4",
    "\u0007\u001a\u0002\u0002\u00c4;\u0003\u0002\u0002\u0002\u00c5\u00c6",
    "\u0007\u001b\u0002\u0002\u00c6=\u0003\u0002\u0002\u0002\u0014?FJOT\\",
    "`eiksx\u0082\u0088\u008a\u0090\u0096\u0098"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'turn on'", "'turn off'", "'lock'", "'unlock'", 
                     "'dim'", "'brighten'", "'tell me'", "'is'", "'are'", 
                     "'on'", "'off'", "'locked'", "'unlocked'", "'the temperature'", 
                     "'the humidity'", "'the brightness'", "'whether'", 
                     null, "'%'", null, "'to'", null, null, "'Pat\"s hue light'", 
                     "'the hue lights'", "'the door'" ];

var symbolicNames = [ null, "TURN_ON", "TURN_OFF", "LOCK", "UNLOCK", "DIM", 
                      "BRIGHTEN", "TELL_ME", "IS", "ARE", "ON", "OFF", "LOCKED", 
                      "UNLOCKED", "TEMPERATURE", "HUMIDITY", "BRIGHTNESS", 
                      "WHETHER", "PLEASANTRY", "PCT", "INTEGER", "TO", "TURNABLE", 
                      "TURNABLES", "DIMMABLE", "DIMMABLES", "LOCKABLE" ];

var ruleNames =  [ "start", "application", "command", "action", "info_request", 
                   "metric", "fact", "question", "percent", "turn_on", "turn_off", 
                   "lock", "unlock", "dim", "brighten", "tell_me", "is", 
                   "are", "on", "off", "locked", "unlocked", "temperature", 
                   "humidity", "brightness", "turnable", "turnables", "lockable", 
                   "dimmable", "dimmables" ];

function NearbyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

NearbyParser.prototype = Object.create(antlr4.Parser.prototype);
NearbyParser.prototype.constructor = NearbyParser;

Object.defineProperty(NearbyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

NearbyParser.EOF = antlr4.Token.EOF;
NearbyParser.TURN_ON = 1;
NearbyParser.TURN_OFF = 2;
NearbyParser.LOCK = 3;
NearbyParser.UNLOCK = 4;
NearbyParser.DIM = 5;
NearbyParser.BRIGHTEN = 6;
NearbyParser.TELL_ME = 7;
NearbyParser.IS = 8;
NearbyParser.ARE = 9;
NearbyParser.ON = 10;
NearbyParser.OFF = 11;
NearbyParser.LOCKED = 12;
NearbyParser.UNLOCKED = 13;
NearbyParser.TEMPERATURE = 14;
NearbyParser.HUMIDITY = 15;
NearbyParser.BRIGHTNESS = 16;
NearbyParser.WHETHER = 17;
NearbyParser.PLEASANTRY = 18;
NearbyParser.PCT = 19;
NearbyParser.INTEGER = 20;
NearbyParser.TO = 21;
NearbyParser.TURNABLE = 22;
NearbyParser.TURNABLES = 23;
NearbyParser.DIMMABLE = 24;
NearbyParser.DIMMABLES = 25;
NearbyParser.LOCKABLE = 26;

NearbyParser.RULE_start = 0;
NearbyParser.RULE_application = 1;
NearbyParser.RULE_command = 2;
NearbyParser.RULE_action = 3;
NearbyParser.RULE_info_request = 4;
NearbyParser.RULE_metric = 5;
NearbyParser.RULE_fact = 6;
NearbyParser.RULE_question = 7;
NearbyParser.RULE_percent = 8;
NearbyParser.RULE_turn_on = 9;
NearbyParser.RULE_turn_off = 10;
NearbyParser.RULE_lock = 11;
NearbyParser.RULE_unlock = 12;
NearbyParser.RULE_dim = 13;
NearbyParser.RULE_brighten = 14;
NearbyParser.RULE_tell_me = 15;
NearbyParser.RULE_is = 16;
NearbyParser.RULE_are = 17;
NearbyParser.RULE_on = 18;
NearbyParser.RULE_off = 19;
NearbyParser.RULE_locked = 20;
NearbyParser.RULE_unlocked = 21;
NearbyParser.RULE_temperature = 22;
NearbyParser.RULE_humidity = 23;
NearbyParser.RULE_brightness = 24;
NearbyParser.RULE_turnable = 25;
NearbyParser.RULE_turnables = 26;
NearbyParser.RULE_lockable = 27;
NearbyParser.RULE_dimmable = 28;
NearbyParser.RULE_dimmables = 29;

function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.application = function() {
    return this.getTypedRuleContext(ApplicationContext,0);
};

StartContext.prototype.EOF = function() {
    return this.getToken(NearbyParser.EOF, 0);
};

StartContext.prototype.PLEASANTRY = function() {
    return this.getToken(NearbyParser.PLEASANTRY, 0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitStart(this);
	}
};




NearbyParser.StartContext = StartContext;

NearbyParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, NearbyParser.RULE_start);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        _la = this._input.LA(1);
        if(_la===NearbyParser.PLEASANTRY) {
            this.state = 60;
            this.match(NearbyParser.PLEASANTRY);
        }

        this.state = 63;
        this.application();
        this.state = 64;
        this.match(NearbyParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ApplicationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_application;
    return this;
}

ApplicationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ApplicationContext.prototype.constructor = ApplicationContext;

ApplicationContext.prototype.command = function() {
    return this.getTypedRuleContext(CommandContext,0);
};

ApplicationContext.prototype.question = function() {
    return this.getTypedRuleContext(QuestionContext,0);
};

ApplicationContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterApplication(this);
	}
};

ApplicationContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitApplication(this);
	}
};




NearbyParser.ApplicationContext = ApplicationContext;

NearbyParser.prototype.application = function() {

    var localctx = new ApplicationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, NearbyParser.RULE_application);
    try {
        this.state = 68;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
        case NearbyParser.TURN_OFF:
        case NearbyParser.UNLOCK:
        case NearbyParser.DIM:
        case NearbyParser.BRIGHTEN:
        case NearbyParser.TELL_ME:
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.command();
            break;
        case NearbyParser.IS:
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.question();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_command;
    return this;
}

CommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandContext.prototype.constructor = CommandContext;

CommandContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

CommandContext.prototype.info_request = function() {
    return this.getTypedRuleContext(Info_requestContext,0);
};

CommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterCommand(this);
	}
};

CommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitCommand(this);
	}
};




NearbyParser.CommandContext = CommandContext;

NearbyParser.prototype.command = function() {

    var localctx = new CommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, NearbyParser.RULE_command);
    try {
        this.state = 72;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
        case NearbyParser.TURN_OFF:
        case NearbyParser.UNLOCK:
        case NearbyParser.DIM:
        case NearbyParser.BRIGHTEN:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.action();
            break;
        case NearbyParser.TELL_ME:
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.info_request();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;

ActionContext.prototype.turn_on = function() {
    return this.getTypedRuleContext(Turn_onContext,0);
};

ActionContext.prototype.turnable = function() {
    return this.getTypedRuleContext(TurnableContext,0);
};

ActionContext.prototype.turnables = function() {
    return this.getTypedRuleContext(TurnablesContext,0);
};

ActionContext.prototype.turn_off = function() {
    return this.getTypedRuleContext(Turn_offContext,0);
};

ActionContext.prototype.unlock = function() {
    return this.getTypedRuleContext(UnlockContext,0);
};

ActionContext.prototype.lockable = function() {
    return this.getTypedRuleContext(LockableContext,0);
};

ActionContext.prototype.dim = function() {
    return this.getTypedRuleContext(DimContext,0);
};

ActionContext.prototype.dimmable = function() {
    return this.getTypedRuleContext(DimmableContext,0);
};

ActionContext.prototype.dimmables = function() {
    return this.getTypedRuleContext(DimmablesContext,0);
};

ActionContext.prototype.TO = function() {
    return this.getToken(NearbyParser.TO, 0);
};

ActionContext.prototype.percent = function() {
    return this.getTypedRuleContext(PercentContext,0);
};

ActionContext.prototype.brighten = function() {
    return this.getTypedRuleContext(BrightenContext,0);
};

ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitAction(this);
	}
};




NearbyParser.ActionContext = ActionContext;

NearbyParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, NearbyParser.RULE_action);
    var _la = 0; // Token type
    try {
        this.state = 105;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.turn_on();
            this.state = 77;
            switch(this._input.LA(1)) {
            case NearbyParser.TURNABLE:
                this.state = 75;
                this.turnable();
                break;
            case NearbyParser.TURNABLES:
                this.state = 76;
                this.turnables();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.TURN_OFF:
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.turn_off();
            this.state = 82;
            switch(this._input.LA(1)) {
            case NearbyParser.TURNABLE:
                this.state = 80;
                this.turnable();
                break;
            case NearbyParser.TURNABLES:
                this.state = 81;
                this.turnables();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.UNLOCK:
            this.enterOuterAlt(localctx, 3);
            this.state = 84;
            this.unlock();
            this.state = 85;
            this.lockable();
            break;
        case NearbyParser.DIM:
            this.enterOuterAlt(localctx, 4);
            this.state = 87;
            this.dim();
            this.state = 90;
            switch(this._input.LA(1)) {
            case NearbyParser.DIMMABLE:
                this.state = 88;
                this.dimmable();
                break;
            case NearbyParser.DIMMABLES:
                this.state = 89;
                this.dimmables();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 94;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 92;
                this.match(NearbyParser.TO);
                this.state = 93;
                this.percent();
            }

            break;
        case NearbyParser.BRIGHTEN:
            this.enterOuterAlt(localctx, 5);
            this.state = 96;
            this.brighten();
            this.state = 99;
            switch(this._input.LA(1)) {
            case NearbyParser.DIMMABLE:
                this.state = 97;
                this.dimmable();
                break;
            case NearbyParser.DIMMABLES:
                this.state = 98;
                this.dimmables();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 103;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 101;
                this.match(NearbyParser.TO);
                this.state = 102;
                this.percent();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Info_requestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_info_request;
    return this;
}

Info_requestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Info_requestContext.prototype.constructor = Info_requestContext;

Info_requestContext.prototype.tell_me = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Tell_meContext);
    } else {
        return this.getTypedRuleContext(Tell_meContext,i);
    }
};

Info_requestContext.prototype.metric = function() {
    return this.getTypedRuleContext(MetricContext,0);
};

Info_requestContext.prototype.WHETHER = function() {
    return this.getToken(NearbyParser.WHETHER, 0);
};

Info_requestContext.prototype.fact = function() {
    return this.getTypedRuleContext(FactContext,0);
};

Info_requestContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterInfo_request(this);
	}
};

Info_requestContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitInfo_request(this);
	}
};




NearbyParser.Info_requestContext = Info_requestContext;

NearbyParser.prototype.info_request = function() {

    var localctx = new Info_requestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, NearbyParser.RULE_info_request);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.tell_me();
        this.state = 113;
        switch(this._input.LA(1)) {
        case NearbyParser.TEMPERATURE:
        case NearbyParser.HUMIDITY:
        case NearbyParser.BRIGHTNESS:
            this.state = 108;
            this.metric();
            break;
        case NearbyParser.TELL_ME:
            this.state = 109;
            this.tell_me();
            this.state = 110;
            this.match(NearbyParser.WHETHER);
            this.state = 111;
            this.fact();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetricContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_metric;
    return this;
}

MetricContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetricContext.prototype.constructor = MetricContext;

MetricContext.prototype.temperature = function() {
    return this.getTypedRuleContext(TemperatureContext,0);
};

MetricContext.prototype.humidity = function() {
    return this.getTypedRuleContext(HumidityContext,0);
};

MetricContext.prototype.brightness = function() {
    return this.getTypedRuleContext(BrightnessContext,0);
};

MetricContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterMetric(this);
	}
};

MetricContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitMetric(this);
	}
};




NearbyParser.MetricContext = MetricContext;

NearbyParser.prototype.metric = function() {

    var localctx = new MetricContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, NearbyParser.RULE_metric);
    try {
        this.state = 118;
        switch(this._input.LA(1)) {
        case NearbyParser.TEMPERATURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 115;
            this.temperature();
            break;
        case NearbyParser.HUMIDITY:
            this.enterOuterAlt(localctx, 2);
            this.state = 116;
            this.humidity();
            break;
        case NearbyParser.BRIGHTNESS:
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.brightness();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FactContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_fact;
    return this;
}

FactContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactContext.prototype.constructor = FactContext;

FactContext.prototype.lockable = function() {
    return this.getTypedRuleContext(LockableContext,0);
};

FactContext.prototype.is = function() {
    return this.getTypedRuleContext(IsContext,0);
};

FactContext.prototype.locked = function() {
    return this.getTypedRuleContext(LockedContext,0);
};

FactContext.prototype.turnable = function() {
    return this.getTypedRuleContext(TurnableContext,0);
};

FactContext.prototype.on = function() {
    return this.getTypedRuleContext(OnContext,0);
};

FactContext.prototype.off = function() {
    return this.getTypedRuleContext(OffContext,0);
};

FactContext.prototype.turnables = function() {
    return this.getTypedRuleContext(TurnablesContext,0);
};

FactContext.prototype.are = function() {
    return this.getTypedRuleContext(AreContext,0);
};

FactContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterFact(this);
	}
};

FactContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitFact(this);
	}
};




NearbyParser.FactContext = FactContext;

NearbyParser.prototype.fact = function() {

    var localctx = new FactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, NearbyParser.RULE_fact);
    try {
        this.state = 136;
        switch(this._input.LA(1)) {
        case NearbyParser.LOCKABLE:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.lockable();
            this.state = 121;
            this.is();
            this.state = 122;
            this.locked();
            break;
        case NearbyParser.TURNABLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
            this.turnable();
            this.state = 125;
            this.is();
            this.state = 128;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 126;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 127;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.TURNABLES:
            this.enterOuterAlt(localctx, 3);
            this.state = 130;
            this.turnables();
            this.state = 131;
            this.are();
            this.state = 134;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 132;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 133;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuestionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_question;
    return this;
}

QuestionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuestionContext.prototype.constructor = QuestionContext;

QuestionContext.prototype.is = function() {
    return this.getTypedRuleContext(IsContext,0);
};

QuestionContext.prototype.turnable = function() {
    return this.getTypedRuleContext(TurnableContext,0);
};

QuestionContext.prototype.on = function() {
    return this.getTypedRuleContext(OnContext,0);
};

QuestionContext.prototype.off = function() {
    return this.getTypedRuleContext(OffContext,0);
};

QuestionContext.prototype.are = function() {
    return this.getTypedRuleContext(AreContext,0);
};

QuestionContext.prototype.turnables = function() {
    return this.getTypedRuleContext(TurnablesContext,0);
};

QuestionContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterQuestion(this);
	}
};

QuestionContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitQuestion(this);
	}
};




NearbyParser.QuestionContext = QuestionContext;

NearbyParser.prototype.question = function() {

    var localctx = new QuestionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, NearbyParser.RULE_question);
    try {
        this.state = 150;
        switch(this._input.LA(1)) {
        case NearbyParser.IS:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.is();
            this.state = 139;
            this.turnable();
            this.state = 142;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 140;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 141;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
            this.are();
            this.state = 145;
            this.turnables();
            this.state = 148;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 146;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 147;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PercentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_percent;
    return this;
}

PercentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PercentContext.prototype.constructor = PercentContext;

PercentContext.prototype.INTEGER = function() {
    return this.getToken(NearbyParser.INTEGER, 0);
};

PercentContext.prototype.PCT = function() {
    return this.getToken(NearbyParser.PCT, 0);
};

PercentContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterPercent(this);
	}
};

PercentContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitPercent(this);
	}
};




NearbyParser.PercentContext = PercentContext;

NearbyParser.prototype.percent = function() {

    var localctx = new PercentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, NearbyParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(NearbyParser.INTEGER);
        this.state = 153;
        this.match(NearbyParser.PCT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Turn_onContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_turn_on;
    return this;
}

Turn_onContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Turn_onContext.prototype.constructor = Turn_onContext;

Turn_onContext.prototype.TURN_ON = function() {
    return this.getToken(NearbyParser.TURN_ON, 0);
};

Turn_onContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterTurn_on(this);
	}
};

Turn_onContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitTurn_on(this);
	}
};




NearbyParser.Turn_onContext = Turn_onContext;

NearbyParser.prototype.turn_on = function() {

    var localctx = new Turn_onContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, NearbyParser.RULE_turn_on);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(NearbyParser.TURN_ON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Turn_offContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_turn_off;
    return this;
}

Turn_offContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Turn_offContext.prototype.constructor = Turn_offContext;

Turn_offContext.prototype.TURN_OFF = function() {
    return this.getToken(NearbyParser.TURN_OFF, 0);
};

Turn_offContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterTurn_off(this);
	}
};

Turn_offContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitTurn_off(this);
	}
};




NearbyParser.Turn_offContext = Turn_offContext;

NearbyParser.prototype.turn_off = function() {

    var localctx = new Turn_offContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, NearbyParser.RULE_turn_off);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(NearbyParser.TURN_OFF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_lock;
    return this;
}

LockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LockContext.prototype.constructor = LockContext;

LockContext.prototype.LOCK = function() {
    return this.getToken(NearbyParser.LOCK, 0);
};

LockContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterLock(this);
	}
};

LockContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitLock(this);
	}
};




NearbyParser.LockContext = LockContext;

NearbyParser.prototype.lock = function() {

    var localctx = new LockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, NearbyParser.RULE_lock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(NearbyParser.LOCK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_unlock;
    return this;
}

UnlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnlockContext.prototype.constructor = UnlockContext;

UnlockContext.prototype.UNLOCK = function() {
    return this.getToken(NearbyParser.UNLOCK, 0);
};

UnlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterUnlock(this);
	}
};

UnlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitUnlock(this);
	}
};




NearbyParser.UnlockContext = UnlockContext;

NearbyParser.prototype.unlock = function() {

    var localctx = new UnlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, NearbyParser.RULE_unlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(NearbyParser.UNLOCK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_dim;
    return this;
}

DimContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimContext.prototype.constructor = DimContext;

DimContext.prototype.DIM = function() {
    return this.getToken(NearbyParser.DIM, 0);
};

DimContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterDim(this);
	}
};

DimContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitDim(this);
	}
};




NearbyParser.DimContext = DimContext;

NearbyParser.prototype.dim = function() {

    var localctx = new DimContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, NearbyParser.RULE_dim);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(NearbyParser.DIM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BrightenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_brighten;
    return this;
}

BrightenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BrightenContext.prototype.constructor = BrightenContext;

BrightenContext.prototype.BRIGHTEN = function() {
    return this.getToken(NearbyParser.BRIGHTEN, 0);
};

BrightenContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterBrighten(this);
	}
};

BrightenContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitBrighten(this);
	}
};




NearbyParser.BrightenContext = BrightenContext;

NearbyParser.prototype.brighten = function() {

    var localctx = new BrightenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, NearbyParser.RULE_brighten);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(NearbyParser.BRIGHTEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tell_meContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_tell_me;
    return this;
}

Tell_meContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tell_meContext.prototype.constructor = Tell_meContext;

Tell_meContext.prototype.TELL_ME = function() {
    return this.getToken(NearbyParser.TELL_ME, 0);
};

Tell_meContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterTell_me(this);
	}
};

Tell_meContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitTell_me(this);
	}
};




NearbyParser.Tell_meContext = Tell_meContext;

NearbyParser.prototype.tell_me = function() {

    var localctx = new Tell_meContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, NearbyParser.RULE_tell_me);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(NearbyParser.TELL_ME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_is;
    return this;
}

IsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IsContext.prototype.constructor = IsContext;

IsContext.prototype.IS = function() {
    return this.getToken(NearbyParser.IS, 0);
};

IsContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterIs(this);
	}
};

IsContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitIs(this);
	}
};




NearbyParser.IsContext = IsContext;

NearbyParser.prototype.is = function() {

    var localctx = new IsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, NearbyParser.RULE_is);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(NearbyParser.IS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_are;
    return this;
}

AreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AreContext.prototype.constructor = AreContext;

AreContext.prototype.ARE = function() {
    return this.getToken(NearbyParser.ARE, 0);
};

AreContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterAre(this);
	}
};

AreContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitAre(this);
	}
};




NearbyParser.AreContext = AreContext;

NearbyParser.prototype.are = function() {

    var localctx = new AreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, NearbyParser.RULE_are);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(NearbyParser.ARE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_on;
    return this;
}

OnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OnContext.prototype.constructor = OnContext;

OnContext.prototype.ON = function() {
    return this.getToken(NearbyParser.ON, 0);
};

OnContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterOn(this);
	}
};

OnContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitOn(this);
	}
};




NearbyParser.OnContext = OnContext;

NearbyParser.prototype.on = function() {

    var localctx = new OnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, NearbyParser.RULE_on);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(NearbyParser.ON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OffContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_off;
    return this;
}

OffContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OffContext.prototype.constructor = OffContext;

OffContext.prototype.OFF = function() {
    return this.getToken(NearbyParser.OFF, 0);
};

OffContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterOff(this);
	}
};

OffContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitOff(this);
	}
};




NearbyParser.OffContext = OffContext;

NearbyParser.prototype.off = function() {

    var localctx = new OffContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, NearbyParser.RULE_off);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(NearbyParser.OFF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LockedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_locked;
    return this;
}

LockedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LockedContext.prototype.constructor = LockedContext;

LockedContext.prototype.LOCKED = function() {
    return this.getToken(NearbyParser.LOCKED, 0);
};

LockedContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterLocked(this);
	}
};

LockedContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitLocked(this);
	}
};




NearbyParser.LockedContext = LockedContext;

NearbyParser.prototype.locked = function() {

    var localctx = new LockedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, NearbyParser.RULE_locked);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(NearbyParser.LOCKED);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnlockedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_unlocked;
    return this;
}

UnlockedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnlockedContext.prototype.constructor = UnlockedContext;

UnlockedContext.prototype.UNLOCKED = function() {
    return this.getToken(NearbyParser.UNLOCKED, 0);
};

UnlockedContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterUnlocked(this);
	}
};

UnlockedContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitUnlocked(this);
	}
};




NearbyParser.UnlockedContext = UnlockedContext;

NearbyParser.prototype.unlocked = function() {

    var localctx = new UnlockedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, NearbyParser.RULE_unlocked);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(NearbyParser.UNLOCKED);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TemperatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_temperature;
    return this;
}

TemperatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemperatureContext.prototype.constructor = TemperatureContext;

TemperatureContext.prototype.TEMPERATURE = function() {
    return this.getToken(NearbyParser.TEMPERATURE, 0);
};

TemperatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterTemperature(this);
	}
};

TemperatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitTemperature(this);
	}
};




NearbyParser.TemperatureContext = TemperatureContext;

NearbyParser.prototype.temperature = function() {

    var localctx = new TemperatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, NearbyParser.RULE_temperature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(NearbyParser.TEMPERATURE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HumidityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_humidity;
    return this;
}

HumidityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HumidityContext.prototype.constructor = HumidityContext;

HumidityContext.prototype.HUMIDITY = function() {
    return this.getToken(NearbyParser.HUMIDITY, 0);
};

HumidityContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterHumidity(this);
	}
};

HumidityContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitHumidity(this);
	}
};




NearbyParser.HumidityContext = HumidityContext;

NearbyParser.prototype.humidity = function() {

    var localctx = new HumidityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, NearbyParser.RULE_humidity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(NearbyParser.HUMIDITY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BrightnessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_brightness;
    return this;
}

BrightnessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BrightnessContext.prototype.constructor = BrightnessContext;

BrightnessContext.prototype.BRIGHTNESS = function() {
    return this.getToken(NearbyParser.BRIGHTNESS, 0);
};

BrightnessContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterBrightness(this);
	}
};

BrightnessContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitBrightness(this);
	}
};




NearbyParser.BrightnessContext = BrightnessContext;

NearbyParser.prototype.brightness = function() {

    var localctx = new BrightnessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, NearbyParser.RULE_brightness);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(NearbyParser.BRIGHTNESS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TurnableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_turnable;
    return this;
}

TurnableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TurnableContext.prototype.constructor = TurnableContext;

TurnableContext.prototype.TURNABLE = function() {
    return this.getToken(NearbyParser.TURNABLE, 0);
};

TurnableContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterTurnable(this);
	}
};

TurnableContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitTurnable(this);
	}
};




NearbyParser.TurnableContext = TurnableContext;

NearbyParser.prototype.turnable = function() {

    var localctx = new TurnableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, NearbyParser.RULE_turnable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(NearbyParser.TURNABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TurnablesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_turnables;
    return this;
}

TurnablesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TurnablesContext.prototype.constructor = TurnablesContext;

TurnablesContext.prototype.TURNABLES = function() {
    return this.getToken(NearbyParser.TURNABLES, 0);
};

TurnablesContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterTurnables(this);
	}
};

TurnablesContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitTurnables(this);
	}
};




NearbyParser.TurnablesContext = TurnablesContext;

NearbyParser.prototype.turnables = function() {

    var localctx = new TurnablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, NearbyParser.RULE_turnables);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(NearbyParser.TURNABLES);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LockableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_lockable;
    return this;
}

LockableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LockableContext.prototype.constructor = LockableContext;

LockableContext.prototype.LOCKABLE = function() {
    return this.getToken(NearbyParser.LOCKABLE, 0);
};

LockableContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterLockable(this);
	}
};

LockableContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitLockable(this);
	}
};




NearbyParser.LockableContext = LockableContext;

NearbyParser.prototype.lockable = function() {

    var localctx = new LockableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, NearbyParser.RULE_lockable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(NearbyParser.LOCKABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimmableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_dimmable;
    return this;
}

DimmableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimmableContext.prototype.constructor = DimmableContext;

DimmableContext.prototype.DIMMABLE = function() {
    return this.getToken(NearbyParser.DIMMABLE, 0);
};

DimmableContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterDimmable(this);
	}
};

DimmableContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitDimmable(this);
	}
};




NearbyParser.DimmableContext = DimmableContext;

NearbyParser.prototype.dimmable = function() {

    var localctx = new DimmableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, NearbyParser.RULE_dimmable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(NearbyParser.DIMMABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DimmablesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_dimmables;
    return this;
}

DimmablesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimmablesContext.prototype.constructor = DimmablesContext;

DimmablesContext.prototype.DIMMABLES = function() {
    return this.getToken(NearbyParser.DIMMABLES, 0);
};

DimmablesContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterDimmables(this);
	}
};

DimmablesContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitDimmables(this);
	}
};




NearbyParser.DimmablesContext = DimmablesContext;

NearbyParser.prototype.dimmables = function() {

    var localctx = new DimmablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, NearbyParser.RULE_dimmables);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(NearbyParser.DIMMABLES);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.NearbyParser = NearbyParser;
