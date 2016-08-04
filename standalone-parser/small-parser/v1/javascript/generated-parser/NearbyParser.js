// Generated from Nearby.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\b\33\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\3\2\3\2\3\2\3\3\3\3\5\3\20\n",
    "\3\3\4\3\4\3\4\5\4\25\n\4\3\5\3\5\3\5\3\5\3\5\2\2\6\2\4\6\b\2\2\30\2",
    "\n\3\2\2\2\4\17\3\2\2\2\6\24\3\2\2\2\b\26\3\2\2\2\n\13\5\4\3\2\13\f",
    "\7\2\2\3\f\3\3\2\2\2\r\20\5\6\4\2\16\20\7\4\2\2\17\r\3\2\2\2\17\16\3",
    "\2\2\2\20\5\3\2\2\2\21\25\5\b\5\2\22\23\7\b\2\2\23\25\5\b\5\2\24\21",
    "\3\2\2\2\24\22\3\2\2\2\25\7\3\2\2\2\26\27\7\5\2\2\27\30\7\6\2\2\30\31",
    "\7\7\2\2\31\t\3\2\2\2\4\17\24"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', 'null', "'are the lights on?'", 'null', "'the'", 
                     "'lights'", "'when there is motion'" ];

var symbolicNames = [ 'null', "WS", "QUERY", "VERB", "DETERMINER", "NOUN", 
                      "CONDITION" ];

var ruleNames =  [ "start", "application", "action", "immediate_action" ];

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
NearbyParser.WS = 1;
NearbyParser.QUERY = 2;
NearbyParser.VERB = 3;
NearbyParser.DETERMINER = 4;
NearbyParser.NOUN = 5;
NearbyParser.CONDITION = 6;

NearbyParser.RULE_start = 0;
NearbyParser.RULE_application = 1;
NearbyParser.RULE_action = 2;
NearbyParser.RULE_immediate_action = 3;

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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.application();
        this.state = 9;
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

ApplicationContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

ApplicationContext.prototype.QUERY = function() {
    return this.getToken(NearbyParser.QUERY, 0);
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
        this.state = 13;
        switch(this._input.LA(1)) {
        case NearbyParser.VERB:
        case NearbyParser.CONDITION:
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.action();
            break;
        case NearbyParser.QUERY:
            this.enterOuterAlt(localctx, 2);
            this.state = 12;
            this.match(NearbyParser.QUERY);
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

ActionContext.prototype.immediate_action = function() {
    return this.getTypedRuleContext(Immediate_actionContext,0);
};

ActionContext.prototype.CONDITION = function() {
    return this.getToken(NearbyParser.CONDITION, 0);
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
    this.enterRule(localctx, 4, NearbyParser.RULE_action);
    try {
        this.state = 18;
        switch(this._input.LA(1)) {
        case NearbyParser.VERB:
            this.enterOuterAlt(localctx, 1);
            this.state = 15;
            this.immediate_action();
            break;
        case NearbyParser.CONDITION:
            this.enterOuterAlt(localctx, 2);
            this.state = 16;
            this.match(NearbyParser.CONDITION);
            this.state = 17;
            this.immediate_action();
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

function Immediate_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_immediate_action;
    return this;
}

Immediate_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Immediate_actionContext.prototype.constructor = Immediate_actionContext;

Immediate_actionContext.prototype.VERB = function() {
    return this.getToken(NearbyParser.VERB, 0);
};

Immediate_actionContext.prototype.DETERMINER = function() {
    return this.getToken(NearbyParser.DETERMINER, 0);
};

Immediate_actionContext.prototype.NOUN = function() {
    return this.getToken(NearbyParser.NOUN, 0);
};

Immediate_actionContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterImmediate_action(this);
	}
};

Immediate_actionContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitImmediate_action(this);
	}
};




NearbyParser.Immediate_actionContext = Immediate_actionContext;

NearbyParser.prototype.immediate_action = function() {

    var localctx = new Immediate_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, NearbyParser.RULE_immediate_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(NearbyParser.VERB);
        this.state = 21;
        this.match(NearbyParser.DETERMINER);
        this.state = 22;
        this.match(NearbyParser.NOUN);
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
