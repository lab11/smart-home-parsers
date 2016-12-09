// Generated from Nearby.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u00116\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0005\u0002",
    "\u000e\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0015\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004!\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004\'\n\u0004\u0005\u0004)\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "1\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002",
    "\u0007\u0002\u0004\u0006\b\n\u0002\u00029\u0002\r\u0003\u0002\u0002",
    "\u0002\u0004\u0014\u0003\u0002\u0002\u0002\u0006(\u0003\u0002\u0002",
    "\u0002\b0\u0003\u0002\u0002\u0002\n2\u0003\u0002\u0002\u0002\f\u000e",
    "\u0007\u0003\u0002\u0002\r\f\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002",
    "\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\u0010\u0005\u0004",
    "\u0003\u0002\u0010\u0011\u0007\u0002\u0002\u0003\u0011\u0003\u0003\u0002",
    "\u0002\u0002\u0012\u0015\u0005\u0006\u0004\u0002\u0013\u0015\u0005\b",
    "\u0005\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0013\u0003\u0002",
    "\u0002\u0002\u0015\u0005\u0003\u0002\u0002\u0002\u0016\u0017\u0007\u0007",
    "\u0002\u0002\u0017)\u0007\r\u0002\u0002\u0018\u0019\u0007\u0007\u0002",
    "\u0002\u0019)\u0007\u000e\u0002\u0002\u001a\u001b\u0007\b\u0002\u0002",
    "\u001b)\u0007\u0011\u0002\u0002\u001c\u001d\u0007\t\u0002\u0002\u001d",
    " \u0007\u000f\u0002\u0002\u001e\u001f\u0007\u0006\u0002\u0002\u001f",
    "!\u0005\n\u0006\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!)\u0003\u0002\u0002\u0002\"#\u0007\t\u0002\u0002#&\u0007\u0010",
    "\u0002\u0002$%\u0007\u0006\u0002\u0002%\'\u0005\n\u0006\u0002&$\u0003",
    "\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\')\u0003\u0002\u0002\u0002",
    "(\u0016\u0003\u0002\u0002\u0002(\u0018\u0003\u0002\u0002\u0002(\u001a",
    "\u0003\u0002\u0002\u0002(\u001c\u0003\u0002\u0002\u0002(\"\u0003\u0002",
    "\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*+\u0007\u000b\u0002\u0002",
    "+,\u0007\r\u0002\u0002,1\u0007\n\u0002\u0002-.\u0007\f\u0002\u0002.",
    "/\u0007\u000e\u0002\u0002/1\u0007\n\u0002\u00020*\u0003\u0002\u0002",
    "\u00020-\u0003\u0002\u0002\u00021\t\u0003\u0002\u0002\u000223\u0007",
    "\u0005\u0002\u000234\u0007\u0004\u0002\u00024\u000b\u0003\u0002\u0002",
    "\u0002\b\r\u0014 &(0"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'%'", null, "'to'", null, null, null, 
                     null, "'is'", "'are'", "'the light'", "'the lights'", 
                     "'hue light'", "'the hue lights'", "'the door'" ];

var symbolicNames = [ null, "PLEASANTRY", "PCT", "INTEGER", "TO", "TURN_VERB", 
                      "LOCK_VERB", "DIM_VERB", "TURN_STATE", "IS", "ARE", 
                      "TURNABLE", "TURNABLES", "DIMMABLE", "DIMMABLES", 
                      "LOCKABLE" ];

var ruleNames =  [ "start", "application", "command", "question", "percent" ];

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
NearbyParser.PLEASANTRY = 1;
NearbyParser.PCT = 2;
NearbyParser.INTEGER = 3;
NearbyParser.TO = 4;
NearbyParser.TURN_VERB = 5;
NearbyParser.LOCK_VERB = 6;
NearbyParser.DIM_VERB = 7;
NearbyParser.TURN_STATE = 8;
NearbyParser.IS = 9;
NearbyParser.ARE = 10;
NearbyParser.TURNABLE = 11;
NearbyParser.TURNABLES = 12;
NearbyParser.DIMMABLE = 13;
NearbyParser.DIMMABLES = 14;
NearbyParser.LOCKABLE = 15;

NearbyParser.RULE_start = 0;
NearbyParser.RULE_application = 1;
NearbyParser.RULE_command = 2;
NearbyParser.RULE_question = 3;
NearbyParser.RULE_percent = 4;

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
        this.state = 11;
        _la = this._input.LA(1);
        if(_la===NearbyParser.PLEASANTRY) {
            this.state = 10;
            this.match(NearbyParser.PLEASANTRY);
        }

        this.state = 13;
        this.application();
        this.state = 14;
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
        this.state = 18;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_VERB:
        case NearbyParser.LOCK_VERB:
        case NearbyParser.DIM_VERB:
            this.enterOuterAlt(localctx, 1);
            this.state = 16;
            this.command();
            break;
        case NearbyParser.IS:
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
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

CommandContext.prototype.TURN_VERB = function() {
    return this.getToken(NearbyParser.TURN_VERB, 0);
};

CommandContext.prototype.TURNABLE = function() {
    return this.getToken(NearbyParser.TURNABLE, 0);
};

CommandContext.prototype.TURNABLES = function() {
    return this.getToken(NearbyParser.TURNABLES, 0);
};

CommandContext.prototype.LOCK_VERB = function() {
    return this.getToken(NearbyParser.LOCK_VERB, 0);
};

CommandContext.prototype.LOCKABLE = function() {
    return this.getToken(NearbyParser.LOCKABLE, 0);
};

CommandContext.prototype.DIM_VERB = function() {
    return this.getToken(NearbyParser.DIM_VERB, 0);
};

CommandContext.prototype.DIMMABLE = function() {
    return this.getToken(NearbyParser.DIMMABLE, 0);
};

CommandContext.prototype.TO = function() {
    return this.getToken(NearbyParser.TO, 0);
};

CommandContext.prototype.percent = function() {
    return this.getTypedRuleContext(PercentContext,0);
};

CommandContext.prototype.DIMMABLES = function() {
    return this.getToken(NearbyParser.DIMMABLES, 0);
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
    var _la = 0; // Token type
    try {
        this.state = 38;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.match(NearbyParser.TURN_VERB);
            this.state = 21;
            this.match(NearbyParser.TURNABLE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 22;
            this.match(NearbyParser.TURN_VERB);
            this.state = 23;
            this.match(NearbyParser.TURNABLES);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 24;
            this.match(NearbyParser.LOCK_VERB);
            this.state = 25;
            this.match(NearbyParser.LOCKABLE);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 26;
            this.match(NearbyParser.DIM_VERB);
            this.state = 27;
            this.match(NearbyParser.DIMMABLE);
            this.state = 30;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 28;
                this.match(NearbyParser.TO);
                this.state = 29;
                this.percent();
            }

            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 32;
            this.match(NearbyParser.DIM_VERB);
            this.state = 33;
            this.match(NearbyParser.DIMMABLES);
            this.state = 36;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 34;
                this.match(NearbyParser.TO);
                this.state = 35;
                this.percent();
            }

            break;

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

QuestionContext.prototype.IS = function() {
    return this.getToken(NearbyParser.IS, 0);
};

QuestionContext.prototype.TURNABLE = function() {
    return this.getToken(NearbyParser.TURNABLE, 0);
};

QuestionContext.prototype.TURN_STATE = function() {
    return this.getToken(NearbyParser.TURN_STATE, 0);
};

QuestionContext.prototype.ARE = function() {
    return this.getToken(NearbyParser.ARE, 0);
};

QuestionContext.prototype.TURNABLES = function() {
    return this.getToken(NearbyParser.TURNABLES, 0);
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
    this.enterRule(localctx, 6, NearbyParser.RULE_question);
    try {
        this.state = 46;
        switch(this._input.LA(1)) {
        case NearbyParser.IS:
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.match(NearbyParser.IS);
            this.state = 41;
            this.match(NearbyParser.TURNABLE);
            this.state = 42;
            this.match(NearbyParser.TURN_STATE);
            break;
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 43;
            this.match(NearbyParser.ARE);
            this.state = 44;
            this.match(NearbyParser.TURNABLES);
            this.state = 45;
            this.match(NearbyParser.TURN_STATE);
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
    this.enterRule(localctx, 8, NearbyParser.RULE_percent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(NearbyParser.INTEGER);
        this.state = 49;
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


exports.NearbyParser = NearbyParser;
