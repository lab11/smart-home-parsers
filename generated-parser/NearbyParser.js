// Generated from Nearby.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001f\u009b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0005\u00024\n",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005",
    "\u0003;\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004?\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005D\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005I\n\u0005\u0005\u0005K\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006Q\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006W\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\\\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\bb\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bh\n\b\u0005\b",
    "j\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tp\n\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\tv\n\t\u0005\tx\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0002\u0002",
    "\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.0\u0002\u0004\u0005\u0002\u0016\u0017\u001b\u001b",
    "\u001f\u001f\u0004\u0002\u0015\u0015\u0018\u001a\u0092\u00023\u0003",
    "\u0002\u0002\u0002\u0004:\u0003\u0002\u0002\u0002\u0006>\u0003\u0002",
    "\u0002\u0002\bJ\u0003\u0002\u0002\u0002\nV\u0003\u0002\u0002\u0002\f",
    "[\u0003\u0002\u0002\u0002\u000ei\u0003\u0002\u0002\u0002\u0010w\u0003",
    "\u0002\u0002\u0002\u0012y\u0003\u0002\u0002\u0002\u0014|\u0003\u0002",
    "\u0002\u0002\u0016~\u0003\u0002\u0002\u0002\u0018\u0080\u0003\u0002",
    "\u0002\u0002\u001a\u0082\u0003\u0002\u0002\u0002\u001c\u0084\u0003\u0002",
    "\u0002\u0002\u001e\u0086\u0003\u0002\u0002\u0002 \u0088\u0003\u0002",
    "\u0002\u0002\"\u008a\u0003\u0002\u0002\u0002$\u008c\u0003\u0002\u0002",
    "\u0002&\u008e\u0003\u0002\u0002\u0002(\u0090\u0003\u0002\u0002\u0002",
    "*\u0092\u0003\u0002\u0002\u0002,\u0094\u0003\u0002\u0002\u0002.\u0096",
    "\u0003\u0002\u0002\u00020\u0098\u0003\u0002\u0002\u000224\u0007\u0011",
    "\u0002\u000232\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000245\u0003",
    "\u0002\u0002\u000256\u0005\u0004\u0003\u000267\u0007\u0002\u0002\u0003",
    "7\u0003\u0003\u0002\u0002\u00028;\u0005\u0006\u0004\u00029;\u0005\u0010",
    "\t\u0002:8\u0003\u0002\u0002\u0002:9\u0003\u0002\u0002\u0002;\u0005",
    "\u0003\u0002\u0002\u0002<?\u0005\b\u0005\u0002=?\u0005\n\u0006\u0002",
    "><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?\u0007\u0003\u0002",
    "\u0002\u0002@C\u0005\u0014\u000b\u0002AD\u0005.\u0018\u0002BD\u0005",
    "0\u0019\u0002CA\u0003\u0002\u0002\u0002CB\u0003\u0002\u0002\u0002DK",
    "\u0003\u0002\u0002\u0002EH\u0005\u0016\f\u0002FI\u0005.\u0018\u0002",
    "GI\u00050\u0019\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002",
    "\u0002IK\u0003\u0002\u0002\u0002J@\u0003\u0002\u0002\u0002JE\u0003\u0002",
    "\u0002\u0002K\t\u0003\u0002\u0002\u0002LP\u0005\u0018\r\u0002MQ\u0005",
    "\f\u0007\u0002NO\u0007\u0010\u0002\u0002OQ\u0005\u000e\b\u0002PM\u0003",
    "\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QW\u0003\u0002\u0002\u0002",
    "RS\u0005,\u0017\u0002ST\u0005\u001a\u000e\u0002TU\u0005\f\u0007\u0002",
    "UW\u0003\u0002\u0002\u0002VL\u0003\u0002\u0002\u0002VR\u0003\u0002\u0002",
    "\u0002W\u000b\u0003\u0002\u0002\u0002X\\\u0005&\u0014\u0002Y\\\u0005",
    "(\u0015\u0002Z\\\u0005*\u0016\u0002[X\u0003\u0002\u0002\u0002[Y\u0003",
    "\u0002\u0002\u0002[Z\u0003\u0002\u0002\u0002\\\r\u0003\u0002\u0002\u0002",
    "]^\u0005.\u0018\u0002^a\u0005\u001a\u000e\u0002_b\u0005\u001e\u0010",
    "\u0002`b\u0005 \u0011\u0002a_\u0003\u0002\u0002\u0002a`\u0003\u0002",
    "\u0002\u0002bj\u0003\u0002\u0002\u0002cd\u00050\u0019\u0002dg\u0005",
    "\u001c\u000f\u0002eh\u0005\u001e\u0010\u0002fh\u0005 \u0011\u0002ge",
    "\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002hj\u0003\u0002\u0002",
    "\u0002i]\u0003\u0002\u0002\u0002ic\u0003\u0002\u0002\u0002j\u000f\u0003",
    "\u0002\u0002\u0002kl\u0005\u001a\u000e\u0002lo\u0005.\u0018\u0002mp",
    "\u0005\u001e\u0010\u0002np\u0005 \u0011\u0002om\u0003\u0002\u0002\u0002",
    "on\u0003\u0002\u0002\u0002px\u0003\u0002\u0002\u0002qr\u0005\u001c\u000f",
    "\u0002ru\u00050\u0019\u0002sv\u0005\u001e\u0010\u0002tv\u0005 \u0011",
    "\u0002us\u0003\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002vx\u0003\u0002",
    "\u0002\u0002wk\u0003\u0002\u0002\u0002wq\u0003\u0002\u0002\u0002x\u0011",
    "\u0003\u0002\u0002\u0002yz\u0007\u0013\u0002\u0002z{\u0007\u0012\u0002",
    "\u0002{\u0013\u0003\u0002\u0002\u0002|}\u0007\u0003\u0002\u0002}\u0015",
    "\u0003\u0002\u0002\u0002~\u007f\u0007\u0004\u0002\u0002\u007f\u0017",
    "\u0003\u0002\u0002\u0002\u0080\u0081\u0007\u0005\u0002\u0002\u0081\u0019",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0006\u0002\u0002\u0083\u001b",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0007\u0002\u0002\u0085\u001d",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0007\b\u0002\u0002\u0087\u001f",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0007\t\u0002\u0002\u0089!\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0007\n\u0002\u0002\u008b#\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0007\u000b\u0002\u0002\u008d%\u0003\u0002",
    "\u0002\u0002\u008e\u008f\u0007\f\u0002\u0002\u008f\'\u0003\u0002\u0002",
    "\u0002\u0090\u0091\u0007\r\u0002\u0002\u0091)\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0007\u000e\u0002\u0002\u0093+\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0007\u000f\u0002\u0002\u0095-\u0003\u0002\u0002\u0002",
    "\u0096\u0097\t\u0002\u0002\u0002\u0097/\u0003\u0002\u0002\u0002\u0098",
    "\u0099\t\u0003\u0002\u0002\u00991\u0003\u0002\u0002\u0002\u00113:>C",
    "HJPV[agiouw"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'turn on'", "'turn off'", "'tell me'", "'is'", 
                     "'are'", "'on'", "'off'", "'locked'", "'unlocked'", 
                     "'the temperature'", "'the humidity'", "'the brightness'", 
                     "'what'", "'whether'", null, "'%'", null, "'to'", "'the front can lights'", 
                     "'the right accent light'", "'the left accent light'", 
                     "'the lights'", "'the accent lights'", "'the overhead lights'", 
                     "'the ambient light'", "'the right blind'", "'the left blind'", 
                     "'the blinds'", "'the projector'" ];

var symbolicNames = [ null, "TURN_ON", "TURN_OFF", "TELL_ME", "IS", "ARE", 
                      "ON", "OFF", "LOCKED", "UNLOCKED", "TEMPERATURE", 
                      "HUMIDITY", "BRIGHTNESS", "WHAT", "WHETHER", "PLEASANTRY", 
                      "PCT", "INTEGER", "TO", "N1", "N2", "N3", "N4", "N6", 
                      "N7", "N8", "N9", "N10", "N11", "N12" ];

var ruleNames =  [ "start", "application", "command", "action", "info_request", 
                   "metric", "fact", "question", "percent", "turn_on", "turn_off", 
                   "tell_me", "is", "are", "on", "off", "locked", "unlocked", 
                   "temperature", "humidity", "brightness", "what", "turnable", 
                   "turnables" ];

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
NearbyParser.TELL_ME = 3;
NearbyParser.IS = 4;
NearbyParser.ARE = 5;
NearbyParser.ON = 6;
NearbyParser.OFF = 7;
NearbyParser.LOCKED = 8;
NearbyParser.UNLOCKED = 9;
NearbyParser.TEMPERATURE = 10;
NearbyParser.HUMIDITY = 11;
NearbyParser.BRIGHTNESS = 12;
NearbyParser.WHAT = 13;
NearbyParser.WHETHER = 14;
NearbyParser.PLEASANTRY = 15;
NearbyParser.PCT = 16;
NearbyParser.INTEGER = 17;
NearbyParser.TO = 18;
NearbyParser.N1 = 19;
NearbyParser.N2 = 20;
NearbyParser.N3 = 21;
NearbyParser.N4 = 22;
NearbyParser.N6 = 23;
NearbyParser.N7 = 24;
NearbyParser.N8 = 25;
NearbyParser.N9 = 26;
NearbyParser.N10 = 27;
NearbyParser.N11 = 28;
NearbyParser.N12 = 29;

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
NearbyParser.RULE_tell_me = 11;
NearbyParser.RULE_is = 12;
NearbyParser.RULE_are = 13;
NearbyParser.RULE_on = 14;
NearbyParser.RULE_off = 15;
NearbyParser.RULE_locked = 16;
NearbyParser.RULE_unlocked = 17;
NearbyParser.RULE_temperature = 18;
NearbyParser.RULE_humidity = 19;
NearbyParser.RULE_brightness = 20;
NearbyParser.RULE_what = 21;
NearbyParser.RULE_turnable = 22;
NearbyParser.RULE_turnables = 23;

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
        this.state = 49;
        _la = this._input.LA(1);
        if(_la===NearbyParser.PLEASANTRY) {
            this.state = 48;
            this.match(NearbyParser.PLEASANTRY);
        }

        this.state = 51;
        this.application();
        this.state = 52;
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
        this.state = 56;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
        case NearbyParser.TURN_OFF:
        case NearbyParser.TELL_ME:
        case NearbyParser.WHAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.command();
            break;
        case NearbyParser.IS:
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 55;
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
        this.state = 60;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
        case NearbyParser.TURN_OFF:
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.action();
            break;
        case NearbyParser.TELL_ME:
        case NearbyParser.WHAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
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
        this.state = 72;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this.turn_on();
            this.state = 65;
            switch(this._input.LA(1)) {
            case NearbyParser.N2:
            case NearbyParser.N3:
            case NearbyParser.N8:
            case NearbyParser.N12:
                this.state = 63;
                this.turnable();
                break;
            case NearbyParser.N1:
            case NearbyParser.N4:
            case NearbyParser.N6:
            case NearbyParser.N7:
                this.state = 64;
                this.turnables();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.TURN_OFF:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.turn_off();
            this.state = 70;
            switch(this._input.LA(1)) {
            case NearbyParser.N2:
            case NearbyParser.N3:
            case NearbyParser.N8:
            case NearbyParser.N12:
                this.state = 68;
                this.turnable();
                break;
            case NearbyParser.N1:
            case NearbyParser.N4:
            case NearbyParser.N6:
            case NearbyParser.N7:
                this.state = 69;
                this.turnables();
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
        this.state = 84;
        switch(this._input.LA(1)) {
        case NearbyParser.TELL_ME:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.tell_me();
            this.state = 78;
            switch(this._input.LA(1)) {
            case NearbyParser.TEMPERATURE:
            case NearbyParser.HUMIDITY:
            case NearbyParser.BRIGHTNESS:
                this.state = 75;
                this.metric();
                break;
            case NearbyParser.WHETHER:
                this.state = 76;
                this.match(NearbyParser.WHETHER);
                this.state = 77;
                this.fact();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.WHAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 80;
            this.what();
            this.state = 81;
            this.is();
            this.state = 82;
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
        this.state = 89;
        switch(this._input.LA(1)) {
        case NearbyParser.TEMPERATURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.temperature();
            break;
        case NearbyParser.HUMIDITY:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.humidity();
            break;
        case NearbyParser.BRIGHTNESS:
            this.enterOuterAlt(localctx, 3);
            this.state = 88;
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
        this.state = 103;
        switch(this._input.LA(1)) {
        case NearbyParser.N2:
        case NearbyParser.N3:
        case NearbyParser.N8:
        case NearbyParser.N12:
            this.enterOuterAlt(localctx, 1);
            this.state = 91;
            this.turnable();
            this.state = 92;
            this.is();
            this.state = 95;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 93;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 94;
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
            this.state = 97;
            this.turnables();
            this.state = 98;
            this.are();
            this.state = 101;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 99;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 100;
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
        this.state = 117;
        switch(this._input.LA(1)) {
        case NearbyParser.IS:
            this.enterOuterAlt(localctx, 1);
            this.state = 105;
            this.is();
            this.state = 106;
            this.turnable();
            this.state = 109;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 107;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 108;
                this.off();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 111;
            this.are();
            this.state = 112;
            this.turnables();
            this.state = 115;
            switch(this._input.LA(1)) {
            case NearbyParser.ON:
                this.state = 113;
                this.on();
                break;
            case NearbyParser.OFF:
                this.state = 114;
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
        this.state = 119;
        this.match(NearbyParser.INTEGER);
        this.state = 120;
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
        this.state = 122;
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
        this.state = 124;
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
    this.enterRule(localctx, 22, NearbyParser.RULE_tell_me);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
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
    this.enterRule(localctx, 24, NearbyParser.RULE_is);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
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
    this.enterRule(localctx, 26, NearbyParser.RULE_are);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
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
    this.enterRule(localctx, 28, NearbyParser.RULE_on);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
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
    this.enterRule(localctx, 30, NearbyParser.RULE_off);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
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
    this.enterRule(localctx, 32, NearbyParser.RULE_locked);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
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
    this.enterRule(localctx, 34, NearbyParser.RULE_unlocked);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
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
    this.enterRule(localctx, 36, NearbyParser.RULE_temperature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
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
    this.enterRule(localctx, 38, NearbyParser.RULE_humidity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
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
    this.enterRule(localctx, 40, NearbyParser.RULE_brightness);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
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
    this.enterRule(localctx, 42, NearbyParser.RULE_what);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
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

TurnableContext.prototype.N8 = function() {
    return this.getToken(NearbyParser.N8, 0);
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
    this.enterRule(localctx, 44, NearbyParser.RULE_turnable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NearbyParser.N2) | (1 << NearbyParser.N3) | (1 << NearbyParser.N8) | (1 << NearbyParser.N12))) !== 0))) {
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
    this.enterRule(localctx, 46, NearbyParser.RULE_turnables);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
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


exports.NearbyParser = NearbyParser;
