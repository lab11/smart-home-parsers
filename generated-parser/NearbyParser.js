// Generated from Nearby.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003 \u00bb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0005\u0002>\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003E\n\u0003\u0003\u0004\u0003\u0004\u0005",
    "\u0004I\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005N\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005S\n\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "[\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "a\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "g\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007l\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\br\n\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\bx\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b~\n\b\u0005\b",
    "\u0080\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0086\n\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0005\t\u008c\n\t\u0005\t\u008e\n\t\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0002",
    "\u0002\u001f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:\u0002\u0004\u0004\u0002\u001a\u001b",
    "  \u0004\u0002\u0019\u0019\u001c\u001e\u00b1\u0002=\u0003\u0002\u0002",
    "\u0002\u0004D\u0003\u0002\u0002\u0002\u0006H\u0003\u0002\u0002\u0002",
    "\bZ\u0003\u0002\u0002\u0002\nf\u0003\u0002\u0002\u0002\fk\u0003\u0002",
    "\u0002\u0002\u000e\u007f\u0003\u0002\u0002\u0002\u0010\u008d\u0003\u0002",
    "\u0002\u0002\u0012\u008f\u0003\u0002\u0002\u0002\u0014\u0092\u0003\u0002",
    "\u0002\u0002\u0016\u0094\u0003\u0002\u0002\u0002\u0018\u0096\u0003\u0002",
    "\u0002\u0002\u001a\u0098\u0003\u0002\u0002\u0002\u001c\u009a\u0003\u0002",
    "\u0002\u0002\u001e\u009c\u0003\u0002\u0002\u0002 \u009e\u0003\u0002",
    "\u0002\u0002\"\u00a0\u0003\u0002\u0002\u0002$\u00a2\u0003\u0002\u0002",
    "\u0002&\u00a4\u0003\u0002\u0002\u0002(\u00a6\u0003\u0002\u0002\u0002",
    "*\u00a8\u0003\u0002\u0002\u0002,\u00aa\u0003\u0002\u0002\u0002.\u00ac",
    "\u0003\u0002\u0002\u00020\u00ae\u0003\u0002\u0002\u00022\u00b0\u0003",
    "\u0002\u0002\u00024\u00b2\u0003\u0002\u0002\u00026\u00b4\u0003\u0002",
    "\u0002\u00028\u00b6\u0003\u0002\u0002\u0002:\u00b8\u0003\u0002\u0002",
    "\u0002<>\u0007\u0015\u0002\u0002=<\u0003\u0002\u0002\u0002=>\u0003\u0002",
    "\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0005\u0004\u0003\u0002@A\u0007",
    "\u0002\u0002\u0003A\u0003\u0003\u0002\u0002\u0002BE\u0005\u0006\u0004",
    "\u0002CE\u0005\u0010\t\u0002DB\u0003\u0002\u0002\u0002DC\u0003\u0002",
    "\u0002\u0002E\u0005\u0003\u0002\u0002\u0002FI\u0005\b\u0005\u0002GI",
    "\u0005\n\u0006\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002",
    "I\u0007\u0003\u0002\u0002\u0002JM\u0005\u0014\u000b\u0002KN\u00056\u001c",
    "\u0002LN\u00058\u001d\u0002MK\u0003\u0002\u0002\u0002ML\u0003\u0002",
    "\u0002\u0002N[\u0003\u0002\u0002\u0002OR\u0005\u0016\f\u0002PS\u0005",
    "6\u001c\u0002QS\u00058\u001d\u0002RP\u0003\u0002\u0002\u0002RQ\u0003",
    "\u0002\u0002\u0002S[\u0003\u0002\u0002\u0002TU\u0005\u001a\u000e\u0002",
    "UV\u0005:\u001e\u0002V[\u0003\u0002\u0002\u0002WX\u0005\u0018\r\u0002",
    "XY\u0005:\u001e\u0002Y[\u0003\u0002\u0002\u0002ZJ\u0003\u0002\u0002",
    "\u0002ZO\u0003\u0002\u0002\u0002ZT\u0003\u0002\u0002\u0002ZW\u0003\u0002",
    "\u0002\u0002[\t\u0003\u0002\u0002\u0002\\`\u0005\u001c\u000f\u0002]",
    "a\u0005\f\u0007\u0002^_\u0007\u0014\u0002\u0002_a\u0005\u000e\b\u0002",
    "`]\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002ag\u0003\u0002\u0002",
    "\u0002bc\u00054\u001b\u0002cd\u0005\u001e\u0010\u0002de\u0005\f\u0007",
    "\u0002eg\u0003\u0002\u0002\u0002f\\\u0003\u0002\u0002\u0002fb\u0003",
    "\u0002\u0002\u0002g\u000b\u0003\u0002\u0002\u0002hl\u0005.\u0018\u0002",
    "il\u00050\u0019\u0002jl\u00052\u001a\u0002kh\u0003\u0002\u0002\u0002",
    "ki\u0003\u0002\u0002\u0002kj\u0003\u0002\u0002\u0002l\r\u0003\u0002",
    "\u0002\u0002mn\u00056\u001c\u0002nq\u0005\u001e\u0010\u0002or\u0005",
    "\"\u0012\u0002pr\u0005$\u0013\u0002qo\u0003\u0002\u0002\u0002qp\u0003",
    "\u0002\u0002\u0002r\u0080\u0003\u0002\u0002\u0002st\u00058\u001d\u0002",
    "tw\u0005 \u0011\u0002ux\u0005\"\u0012\u0002vx\u0005$\u0013\u0002wu\u0003",
    "\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002x\u0080\u0003\u0002\u0002",
    "\u0002yz\u0005:\u001e\u0002z}\u0005 \u0011\u0002{~\u0005&\u0014\u0002",
    "|~\u0005(\u0015\u0002}{\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002",
    "\u0002~\u0080\u0003\u0002\u0002\u0002\u007fm\u0003\u0002\u0002\u0002",
    "\u007fs\u0003\u0002\u0002\u0002\u007fy\u0003\u0002\u0002\u0002\u0080",
    "\u000f\u0003\u0002\u0002\u0002\u0081\u0082\u0005\u001e\u0010\u0002\u0082",
    "\u0085\u00056\u001c\u0002\u0083\u0086\u0005\"\u0012\u0002\u0084\u0086",
    "\u0005$\u0013\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u008e\u0003\u0002\u0002\u0002\u0087\u0088",
    "\u0005 \u0011\u0002\u0088\u008b\u0005:\u001e\u0002\u0089\u008c\u0005",
    "&\u0014\u0002\u008a\u008c\u0005(\u0015\u0002\u008b\u0089\u0003\u0002",
    "\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\u008e\u0003\u0002",
    "\u0002\u0002\u008d\u0081\u0003\u0002\u0002\u0002\u008d\u0087\u0003\u0002",
    "\u0002\u0002\u008e\u0011\u0003\u0002\u0002\u0002\u008f\u0090\u0007\u0017",
    "\u0002\u0002\u0090\u0091\u0007\u0016\u0002\u0002\u0091\u0013\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0007\u0003\u0002\u0002\u0093\u0015\u0003\u0002",
    "\u0002\u0002\u0094\u0095\u0007\u0004\u0002\u0002\u0095\u0017\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0007\u0005\u0002\u0002\u0097\u0019\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0007\u0006\u0002\u0002\u0099\u001b\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0007\u0007\u0002\u0002\u009b\u001d\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0007\b\u0002\u0002\u009d\u001f\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0007\t\u0002\u0002\u009f!\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0007\n\u0002\u0002\u00a1#\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0007\u000b\u0002\u0002\u00a3%\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0007\f\u0002\u0002\u00a5\'\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\u0007\r\u0002\u0002\u00a7)\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\u0007\u000e\u0002\u0002\u00a9+\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0007\u000f\u0002\u0002\u00ab-\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0007\u0010\u0002\u0002\u00ad/\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0007\u0011\u0002\u0002\u00af1\u0003\u0002\u0002\u0002\u00b0\u00b1",
    "\u0007\u0012\u0002\u0002\u00b13\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0007\u0013\u0002\u0002\u00b35\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\t\u0002\u0002\u0002\u00b57\u0003\u0002\u0002\u0002\u00b6\u00b7\t\u0003",
    "\u0002\u0002\u00b79\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u001f",
    "\u0002\u0002\u00b9;\u0003\u0002\u0002\u0002\u0012=DHMRZ`fkqw}\u007f",
    "\u0085\u008b\u008d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'turn on'", "'turn off'", "'raise'", "'lower'", 
                     "'tell me'", "'is'", "'are'", "'on'", "'off'", "'lowered'", 
                     "'raised'", "'locked'", "'unlocked'", "'the temperature'", 
                     "'the humidity'", "'the brightness'", "'what'", "'whether'", 
                     null, "'%'", null, "'to'", "'the front lights'", "'the right light'", 
                     "'the left light'", "'the lights'", "'the spot lights'", 
                     "'the fluorescent lights'", "'the blinds'", "'the projector'" ];

var symbolicNames = [ null, "TURN_ON", "TURN_OFF", "RAISE", "LOWER", "TELL_ME", 
                      "IS", "ARE", "ON", "OFF", "LOWERED", "RAISED", "LOCKED", 
                      "UNLOCKED", "TEMPERATURE", "HUMIDITY", "BRIGHTNESS", 
                      "WHAT", "WHETHER", "PLEASANTRY", "PCT", "INTEGER", 
                      "TO", "N1", "N2", "N3", "N4", "N6", "N7", "N11", "N12" ];

var ruleNames =  [ "start", "application", "command", "action", "info_request", 
                   "metric", "fact", "question", "percent", "turn_on", "turn_off", 
                   "raise", "lower", "tell_me", "is", "are", "on", "off", 
                   "lowered", "raised", "locked", "unlocked", "temperature", 
                   "humidity", "brightness", "what", "turnable", "turnables", 
                   "lowerables" ];

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
NearbyParser.RAISE = 3;
NearbyParser.LOWER = 4;
NearbyParser.TELL_ME = 5;
NearbyParser.IS = 6;
NearbyParser.ARE = 7;
NearbyParser.ON = 8;
NearbyParser.OFF = 9;
NearbyParser.LOWERED = 10;
NearbyParser.RAISED = 11;
NearbyParser.LOCKED = 12;
NearbyParser.UNLOCKED = 13;
NearbyParser.TEMPERATURE = 14;
NearbyParser.HUMIDITY = 15;
NearbyParser.BRIGHTNESS = 16;
NearbyParser.WHAT = 17;
NearbyParser.WHETHER = 18;
NearbyParser.PLEASANTRY = 19;
NearbyParser.PCT = 20;
NearbyParser.INTEGER = 21;
NearbyParser.TO = 22;
NearbyParser.N1 = 23;
NearbyParser.N2 = 24;
NearbyParser.N3 = 25;
NearbyParser.N4 = 26;
NearbyParser.N6 = 27;
NearbyParser.N7 = 28;
NearbyParser.N11 = 29;
NearbyParser.N12 = 30;

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
NearbyParser.RULE_raise = 11;
NearbyParser.RULE_lower = 12;
NearbyParser.RULE_tell_me = 13;
NearbyParser.RULE_is = 14;
NearbyParser.RULE_are = 15;
NearbyParser.RULE_on = 16;
NearbyParser.RULE_off = 17;
NearbyParser.RULE_lowered = 18;
NearbyParser.RULE_raised = 19;
NearbyParser.RULE_locked = 20;
NearbyParser.RULE_unlocked = 21;
NearbyParser.RULE_temperature = 22;
NearbyParser.RULE_humidity = 23;
NearbyParser.RULE_brightness = 24;
NearbyParser.RULE_what = 25;
NearbyParser.RULE_turnable = 26;
NearbyParser.RULE_turnables = 27;
NearbyParser.RULE_lowerables = 28;

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
        this.state = 59;
        _la = this._input.LA(1);
        if(_la===NearbyParser.PLEASANTRY) {
            this.state = 58;
            this.match(NearbyParser.PLEASANTRY);
        }

        this.state = 61;
        this.application();
        this.state = 62;
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
        this.state = 66;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
        case NearbyParser.TURN_OFF:
        case NearbyParser.RAISE:
        case NearbyParser.LOWER:
        case NearbyParser.TELL_ME:
        case NearbyParser.WHAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 64;
            this.command();
            break;
        case NearbyParser.IS:
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
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
        this.state = 70;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
        case NearbyParser.TURN_OFF:
        case NearbyParser.RAISE:
        case NearbyParser.LOWER:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.action();
            break;
        case NearbyParser.TELL_ME:
        case NearbyParser.WHAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
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

ActionContext.prototype.lower = function() {
    return this.getTypedRuleContext(LowerContext,0);
};

ActionContext.prototype.lowerables = function() {
    return this.getTypedRuleContext(LowerablesContext,0);
};

ActionContext.prototype.raise = function() {
    return this.getTypedRuleContext(RaiseContext,0);
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
    try {
        this.state = 88;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 72;
            this.turn_on();
            this.state = 75;
            switch(this._input.LA(1)) {
            case NearbyParser.N2:
            case NearbyParser.N3:
            case NearbyParser.N12:
                this.state = 73;
                this.turnable();
                break;
            case NearbyParser.N1:
            case NearbyParser.N4:
            case NearbyParser.N6:
            case NearbyParser.N7:
                this.state = 74;
                this.turnables();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.TURN_OFF:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.turn_off();
            this.state = 80;
            switch(this._input.LA(1)) {
            case NearbyParser.N2:
            case NearbyParser.N3:
            case NearbyParser.N12:
                this.state = 78;
                this.turnable();
                break;
            case NearbyParser.N1:
            case NearbyParser.N4:
            case NearbyParser.N6:
            case NearbyParser.N7:
                this.state = 79;
                this.turnables();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.LOWER:
            this.enterOuterAlt(localctx, 3);
            this.state = 82;
            this.lower();
            this.state = 83;
            this.lowerables();
            break;
        case NearbyParser.RAISE:
            this.enterOuterAlt(localctx, 4);
            this.state = 85;
            this.raise();
            this.state = 86;
            this.lowerables();
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

Info_requestContext.prototype.tell_me = function() {
    return this.getTypedRuleContext(Tell_meContext,0);
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

Info_requestContext.prototype.what = function() {
    return this.getTypedRuleContext(WhatContext,0);
};

Info_requestContext.prototype.is = function() {
    return this.getTypedRuleContext(IsContext,0);
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
        this.state = 100;
        switch(this._input.LA(1)) {
        case NearbyParser.TELL_ME:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.tell_me();
            this.state = 94;
            switch(this._input.LA(1)) {
            case NearbyParser.TEMPERATURE:
            case NearbyParser.HUMIDITY:
            case NearbyParser.BRIGHTNESS:
                this.state = 91;
                this.metric();
                break;
            case NearbyParser.WHETHER:
                this.state = 92;
                this.match(NearbyParser.WHETHER);
                this.state = 93;
                this.fact();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.WHAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.what();
            this.state = 97;
            this.is();
            this.state = 98;
            this.metric();
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
        this.state = 105;
        switch(this._input.LA(1)) {
        case NearbyParser.TEMPERATURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 102;
            this.temperature();
            break;
        case NearbyParser.HUMIDITY:
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.humidity();
            break;
        case NearbyParser.BRIGHTNESS:
            this.enterOuterAlt(localctx, 3);
            this.state = 104;
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

FactContext.prototype.turnable = function() {
    return this.getTypedRuleContext(TurnableContext,0);
};

FactContext.prototype.is = function() {
    return this.getTypedRuleContext(IsContext,0);
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

FactContext.prototype.lowerables = function() {
    return this.getTypedRuleContext(LowerablesContext,0);
};

FactContext.prototype.lowered = function() {
    return this.getTypedRuleContext(LoweredContext,0);
};

FactContext.prototype.raised = function() {
    return this.getTypedRuleContext(RaisedContext,0);
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
        this.state = 125;
        switch(this._input.LA(1)) {
        case NearbyParser.N2:
        case NearbyParser.N3:
        case NearbyParser.N12:
            this.enterOuterAlt(localctx, 1);
            this.state = 107;
            this.turnable();
            this.state = 108;
            this.is();
            this.state = 111;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 109;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 110;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.N1:
        case NearbyParser.N4:
        case NearbyParser.N6:
        case NearbyParser.N7:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.turnables();
            this.state = 114;
            this.are();
            this.state = 117;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 115;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 116;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.N11:
            this.enterOuterAlt(localctx, 3);
            this.state = 119;
            this.lowerables();
            this.state = 120;
            this.are();
            this.state = 123;
            switch(this._input.LA(1)) {
            case NearbyParser.LOWERED:
                this.state = 121;
                this.lowered();
                break;
            case NearbyParser.RAISED:
                this.state = 122;
                this.raised();
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

QuestionContext.prototype.lowerables = function() {
    return this.getTypedRuleContext(LowerablesContext,0);
};

QuestionContext.prototype.lowered = function() {
    return this.getTypedRuleContext(LoweredContext,0);
};

QuestionContext.prototype.raised = function() {
    return this.getTypedRuleContext(RaisedContext,0);
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
        this.state = 139;
        switch(this._input.LA(1)) {
        case NearbyParser.IS:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.is();
            this.state = 128;
            this.turnable();
            this.state = 131;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 129;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 130;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 133;
            this.are();
            this.state = 134;
            this.lowerables();
            this.state = 137;
            switch(this._input.LA(1)) {
            case NearbyParser.LOWERED:
                this.state = 135;
                this.lowered();
                break;
            case NearbyParser.RAISED:
                this.state = 136;
                this.raised();
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
        this.state = 141;
        this.match(NearbyParser.INTEGER);
        this.state = 142;
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
        this.state = 144;
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
        this.state = 146;
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

function RaiseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_raise;
    return this;
}

RaiseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RaiseContext.prototype.constructor = RaiseContext;

RaiseContext.prototype.RAISE = function() {
    return this.getToken(NearbyParser.RAISE, 0);
};

RaiseContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterRaise(this);
	}
};

RaiseContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitRaise(this);
	}
};




NearbyParser.RaiseContext = RaiseContext;

NearbyParser.prototype.raise = function() {

    var localctx = new RaiseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, NearbyParser.RULE_raise);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(NearbyParser.RAISE);
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

function LowerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_lower;
    return this;
}

LowerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LowerContext.prototype.constructor = LowerContext;

LowerContext.prototype.LOWER = function() {
    return this.getToken(NearbyParser.LOWER, 0);
};

LowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterLower(this);
	}
};

LowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitLower(this);
	}
};




NearbyParser.LowerContext = LowerContext;

NearbyParser.prototype.lower = function() {

    var localctx = new LowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, NearbyParser.RULE_lower);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(NearbyParser.LOWER);
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
    this.enterRule(localctx, 26, NearbyParser.RULE_tell_me);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
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
    this.enterRule(localctx, 28, NearbyParser.RULE_is);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
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
    this.enterRule(localctx, 30, NearbyParser.RULE_are);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
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
    this.enterRule(localctx, 32, NearbyParser.RULE_on);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
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
    this.enterRule(localctx, 34, NearbyParser.RULE_off);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
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

function LoweredContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_lowered;
    return this;
}

LoweredContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoweredContext.prototype.constructor = LoweredContext;

LoweredContext.prototype.LOWERED = function() {
    return this.getToken(NearbyParser.LOWERED, 0);
};

LoweredContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterLowered(this);
	}
};

LoweredContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitLowered(this);
	}
};




NearbyParser.LoweredContext = LoweredContext;

NearbyParser.prototype.lowered = function() {

    var localctx = new LoweredContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, NearbyParser.RULE_lowered);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(NearbyParser.LOWERED);
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

function RaisedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_raised;
    return this;
}

RaisedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RaisedContext.prototype.constructor = RaisedContext;

RaisedContext.prototype.RAISED = function() {
    return this.getToken(NearbyParser.RAISED, 0);
};

RaisedContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterRaised(this);
	}
};

RaisedContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitRaised(this);
	}
};




NearbyParser.RaisedContext = RaisedContext;

NearbyParser.prototype.raised = function() {

    var localctx = new RaisedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, NearbyParser.RULE_raised);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(NearbyParser.RAISED);
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
        this.state = 166;
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
        this.state = 168;
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
        this.state = 170;
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
        this.state = 172;
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
        this.state = 174;
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

function WhatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_what;
    return this;
}

WhatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhatContext.prototype.constructor = WhatContext;

WhatContext.prototype.WHAT = function() {
    return this.getToken(NearbyParser.WHAT, 0);
};

WhatContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterWhat(this);
	}
};

WhatContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitWhat(this);
	}
};




NearbyParser.WhatContext = WhatContext;

NearbyParser.prototype.what = function() {

    var localctx = new WhatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, NearbyParser.RULE_what);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(NearbyParser.WHAT);
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

TurnableContext.prototype.N2 = function() {
    return this.getToken(NearbyParser.N2, 0);
};

TurnableContext.prototype.N3 = function() {
    return this.getToken(NearbyParser.N3, 0);
};

TurnableContext.prototype.N12 = function() {
    return this.getToken(NearbyParser.N12, 0);
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
    this.enterRule(localctx, 52, NearbyParser.RULE_turnable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NearbyParser.N2) | (1 << NearbyParser.N3) | (1 << NearbyParser.N12))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

TurnablesContext.prototype.N1 = function() {
    return this.getToken(NearbyParser.N1, 0);
};

TurnablesContext.prototype.N4 = function() {
    return this.getToken(NearbyParser.N4, 0);
};

TurnablesContext.prototype.N6 = function() {
    return this.getToken(NearbyParser.N6, 0);
};

TurnablesContext.prototype.N7 = function() {
    return this.getToken(NearbyParser.N7, 0);
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
    this.enterRule(localctx, 54, NearbyParser.RULE_turnables);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NearbyParser.N1) | (1 << NearbyParser.N4) | (1 << NearbyParser.N6) | (1 << NearbyParser.N7))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

function LowerablesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_lowerables;
    return this;
}

LowerablesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LowerablesContext.prototype.constructor = LowerablesContext;

LowerablesContext.prototype.N11 = function() {
    return this.getToken(NearbyParser.N11, 0);
};

LowerablesContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterLowerables(this);
	}
};

LowerablesContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitLowerables(this);
	}
};




NearbyParser.LowerablesContext = LowerablesContext;

NearbyParser.prototype.lowerables = function() {

    var localctx = new LowerablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, NearbyParser.RULE_lowerables);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(NearbyParser.N11);
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
