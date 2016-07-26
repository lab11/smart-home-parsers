// Generated from Nearby.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\b7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0005\u0002\u0017",
    "\n\u0002\u0003\u0003\u0003\u0003\u0005\u0003\u001b\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005+\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0007",
    "\u0003\u0002\u0003\u0004\u0004\u0002\u0003\u0003\u0005\u0005\u0004\u0002",
    "\u0003\u0003\u0006\u0006\u0004\u0002\u0003\u0003\u0007\u0007\u0004\u0002",
    "\u0003\u0003\b\b0\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u001a\u0003",
    "\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b*\u0003\u0002",
    "\u0002\u0002\n,\u0003\u0002\u0002\u0002\f.\u0003\u0002\u0002\u0002\u000e",
    "0\u0003\u0002\u0002\u0002\u00102\u0003\u0002\u0002\u0002\u00124\u0003",
    "\u0002\u0002\u0002\u0014\u0017\u0005\u0004\u0003\u0002\u0015\u0017\u0005",
    "\n\u0006\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0016\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u001b\u0005",
    "\u0006\u0004\u0002\u0019\u001b\u0005\b\u0005\u0002\u001a\u0018\u0003",
    "\u0002\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u0005\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0005\f\u0007\u0002\u001d\u001e\u0005",
    "\u000e\b\u0002\u001e\u001f\u0005\u0010\t\u0002\u001f\u0007\u0003\u0002",
    "\u0002\u0002 !\u0005\u0012\n\u0002!\"\u0005\f\u0007\u0002\"#\u0005\u000e",
    "\b\u0002#$\u0005\u0010\t\u0002$+\u0003\u0002\u0002\u0002%&\u0005\f\u0007",
    "\u0002&\'\u0005\u000e\b\u0002\'(\u0005\u0010\t\u0002()\u0005\u0012\n",
    "\u0002)+\u0003\u0002\u0002\u0002* \u0003\u0002\u0002\u0002*%\u0003\u0002",
    "\u0002\u0002+\t\u0003\u0002\u0002\u0002,-\t\u0002\u0002\u0002-\u000b",
    "\u0003\u0002\u0002\u0002./\t\u0003\u0002\u0002/\r\u0003\u0002\u0002",
    "\u000201\t\u0004\u0002\u00021\u000f\u0003\u0002\u0002\u000223\t\u0005",
    "\u0002\u00023\u0011\u0003\u0002\u0002\u000245\t\u0006\u0002\u00025\u0013",
    "\u0003\u0002\u0002\u0002\u0005\u0016\u001a*"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'are the lights on?'", null, "'the'", 
                     "'lights'", "'when there is motion'" ];

var symbolicNames = [ null, "WS", "QUERY", "VERB", "DETERMINER", "NOUN", 
                      "CONDITION" ];

var ruleNames =  [ "application", "action", "immediate_action", "conditional_action", 
                   "query", "verb", "determiner", "noun", "condition" ];

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

NearbyParser.RULE_application = 0;
NearbyParser.RULE_action = 1;
NearbyParser.RULE_immediate_action = 2;
NearbyParser.RULE_conditional_action = 3;
NearbyParser.RULE_query = 4;
NearbyParser.RULE_verb = 5;
NearbyParser.RULE_determiner = 6;
NearbyParser.RULE_noun = 7;
NearbyParser.RULE_condition = 8;

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

ApplicationContext.prototype.query = function() {
    return this.getTypedRuleContext(QueryContext,0);
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
    this.enterRule(localctx, 0, NearbyParser.RULE_application);
    try {
        this.state = 20;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.action();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 19;
            this.query();
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

ActionContext.prototype.conditional_action = function() {
    return this.getTypedRuleContext(Conditional_actionContext,0);
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
    this.enterRule(localctx, 2, NearbyParser.RULE_action);
    try {
        this.state = 24;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.immediate_action();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this.conditional_action();
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

Immediate_actionContext.prototype.verb = function() {
    return this.getTypedRuleContext(VerbContext,0);
};

Immediate_actionContext.prototype.determiner = function() {
    return this.getTypedRuleContext(DeterminerContext,0);
};

Immediate_actionContext.prototype.noun = function() {
    return this.getTypedRuleContext(NounContext,0);
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
    this.enterRule(localctx, 4, NearbyParser.RULE_immediate_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.verb();
        this.state = 27;
        this.determiner();
        this.state = 28;
        this.noun();
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

function Conditional_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_conditional_action;
    return this;
}

Conditional_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Conditional_actionContext.prototype.constructor = Conditional_actionContext;

Conditional_actionContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

Conditional_actionContext.prototype.verb = function() {
    return this.getTypedRuleContext(VerbContext,0);
};

Conditional_actionContext.prototype.determiner = function() {
    return this.getTypedRuleContext(DeterminerContext,0);
};

Conditional_actionContext.prototype.noun = function() {
    return this.getTypedRuleContext(NounContext,0);
};

Conditional_actionContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterConditional_action(this);
	}
};

Conditional_actionContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitConditional_action(this);
	}
};




NearbyParser.Conditional_actionContext = Conditional_actionContext;

NearbyParser.prototype.conditional_action = function() {

    var localctx = new Conditional_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, NearbyParser.RULE_conditional_action);
    try {
        this.state = 40;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 30;
            this.condition();
            this.state = 31;
            this.verb();
            this.state = 32;
            this.determiner();
            this.state = 33;
            this.noun();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.verb();
            this.state = 36;
            this.determiner();
            this.state = 37;
            this.noun();
            this.state = 38;
            this.condition();
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

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.QUERY = function() {
    return this.getToken(NearbyParser.QUERY, 0);
};

QueryContext.prototype.WS = function() {
    return this.getToken(NearbyParser.WS, 0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitQuery(this);
	}
};




NearbyParser.QueryContext = QueryContext;

NearbyParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, NearbyParser.RULE_query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        _la = this._input.LA(1);
        if(!(_la===NearbyParser.WS || _la===NearbyParser.QUERY)) {
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

function VerbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_verb;
    return this;
}

VerbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerbContext.prototype.constructor = VerbContext;

VerbContext.prototype.VERB = function() {
    return this.getToken(NearbyParser.VERB, 0);
};

VerbContext.prototype.WS = function() {
    return this.getToken(NearbyParser.WS, 0);
};

VerbContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterVerb(this);
	}
};

VerbContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitVerb(this);
	}
};




NearbyParser.VerbContext = VerbContext;

NearbyParser.prototype.verb = function() {

    var localctx = new VerbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, NearbyParser.RULE_verb);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!(_la===NearbyParser.WS || _la===NearbyParser.VERB)) {
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

function DeterminerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_determiner;
    return this;
}

DeterminerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeterminerContext.prototype.constructor = DeterminerContext;

DeterminerContext.prototype.DETERMINER = function() {
    return this.getToken(NearbyParser.DETERMINER, 0);
};

DeterminerContext.prototype.WS = function() {
    return this.getToken(NearbyParser.WS, 0);
};

DeterminerContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterDeterminer(this);
	}
};

DeterminerContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitDeterminer(this);
	}
};




NearbyParser.DeterminerContext = DeterminerContext;

NearbyParser.prototype.determiner = function() {

    var localctx = new DeterminerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, NearbyParser.RULE_determiner);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        _la = this._input.LA(1);
        if(!(_la===NearbyParser.WS || _la===NearbyParser.DETERMINER)) {
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

function NounContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_noun;
    return this;
}

NounContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NounContext.prototype.constructor = NounContext;

NounContext.prototype.NOUN = function() {
    return this.getToken(NearbyParser.NOUN, 0);
};

NounContext.prototype.WS = function() {
    return this.getToken(NearbyParser.WS, 0);
};

NounContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterNoun(this);
	}
};

NounContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitNoun(this);
	}
};




NearbyParser.NounContext = NounContext;

NearbyParser.prototype.noun = function() {

    var localctx = new NounContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, NearbyParser.RULE_noun);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        _la = this._input.LA(1);
        if(!(_la===NearbyParser.WS || _la===NearbyParser.NOUN)) {
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

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.CONDITION = function() {
    return this.getToken(NearbyParser.CONDITION, 0);
};

ConditionContext.prototype.WS = function() {
    return this.getToken(NearbyParser.WS, 0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitCondition(this);
	}
};




NearbyParser.ConditionContext = ConditionContext;

NearbyParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, NearbyParser.RULE_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        _la = this._input.LA(1);
        if(!(_la===NearbyParser.WS || _la===NearbyParser.CONDITION)) {
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
