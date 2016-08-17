// Generated from Nearby.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\nE\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t",
    "\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\2",
    "\3\3\3\3\5\3$\n\3\3\4\3\4\5\4(\n\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3",
    "\7\3\7\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3",
    "\16\3\17\3\17\3\17\2\2\20\2\4\6\b\n\f\16\20\22\24\26\30\32\34\2\28\2",
    "\36\3\2\2\2\4#\3\2\2\2\6\'\3\2\2\2\b)\3\2\2\2\n-\3\2\2\2\f\60\3\2\2",
    "\2\16\63\3\2\2\2\20\66\3\2\2\2\228\3\2\2\2\24:\3\2\2\2\26<\3\2\2\2\30",
    ">\3\2\2\2\32@\3\2\2\2\34B\3\2\2\2\36\37\5\4\3\2\37 \7\2\2\3 \3\3\2\2",
    "\2!$\5\6\4\2\"$\5\16\b\2#!\3\2\2\2#\"\3\2\2\2$\5\3\2\2\2%(\5\b\5\2&",
    "(\5\n\6\2\'%\3\2\2\2\'&\3\2\2\2(\7\3\2\2\2)*\5\24\13\2*+\5\26\f\2+,",
    "\5\30\r\2,\t\3\2\2\2-.\5\f\7\2./\5\b\5\2/\13\3\2\2\2\60\61\5\32\16\2",
    "\61\62\5\34\17\2\62\r\3\2\2\2\63\64\5\20\t\2\64\65\5\22\n\2\65\17\3",
    "\2\2\2\66\67\7\3\2\2\67\21\3\2\2\289\7\4\2\29\23\3\2\2\2:;\7\b\2\2;",
    "\25\3\2\2\2<=\7\t\2\2=\27\3\2\2\2>?\7\n\2\2?\31\3\2\2\2@A\7\5\2\2A\33",
    "\3\2\2\2BC\7\6\2\2C\35\3\2\2\2\4#\'"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'are'", "'the lights on'", 'null', "'there is motion'", 
                     'null', 'null', "'the'" ];

var symbolicNames = [ 'null', "ARE", "ARE_QUERY", "WHEN", "WHEN_CONDITION", 
                      "WS", "VERB", "DETERMINER", "NOUN" ];

var ruleNames =  [ "start", "application", "action", "immediate_action", 
                   "conditional_action", "condition", "query", "are", "are_query", 
                   "verb", "determiner", "noun", "when", "when_condition" ];

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
NearbyParser.ARE = 1;
NearbyParser.ARE_QUERY = 2;
NearbyParser.WHEN = 3;
NearbyParser.WHEN_CONDITION = 4;
NearbyParser.WS = 5;
NearbyParser.VERB = 6;
NearbyParser.DETERMINER = 7;
NearbyParser.NOUN = 8;

NearbyParser.RULE_start = 0;
NearbyParser.RULE_application = 1;
NearbyParser.RULE_action = 2;
NearbyParser.RULE_immediate_action = 3;
NearbyParser.RULE_conditional_action = 4;
NearbyParser.RULE_condition = 5;
NearbyParser.RULE_query = 6;
NearbyParser.RULE_are = 7;
NearbyParser.RULE_are_query = 8;
NearbyParser.RULE_verb = 9;
NearbyParser.RULE_determiner = 10;
NearbyParser.RULE_noun = 11;
NearbyParser.RULE_when = 12;
NearbyParser.RULE_when_condition = 13;

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
        this.state = 28;
        this.application();
        this.state = 29;
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
    this.enterRule(localctx, 2, NearbyParser.RULE_application);
    try {
        this.state = 33;
        switch(this._input.LA(1)) {
        case NearbyParser.WHEN:
        case NearbyParser.VERB:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.action();
            break;
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.query();
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
    this.enterRule(localctx, 4, NearbyParser.RULE_action);
    try {
        this.state = 37;
        switch(this._input.LA(1)) {
        case NearbyParser.VERB:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.immediate_action();
            break;
        case NearbyParser.WHEN:
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.conditional_action();
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
    this.enterRule(localctx, 6, NearbyParser.RULE_immediate_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.verb();
        this.state = 40;
        this.determiner();
        this.state = 41;
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

Conditional_actionContext.prototype.immediate_action = function() {
    return this.getTypedRuleContext(Immediate_actionContext,0);
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
    this.enterRule(localctx, 8, NearbyParser.RULE_conditional_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.condition();
        this.state = 44;
        this.immediate_action();
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

ConditionContext.prototype.when = function() {
    return this.getTypedRuleContext(WhenContext,0);
};

ConditionContext.prototype.when_condition = function() {
    return this.getTypedRuleContext(When_conditionContext,0);
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
    this.enterRule(localctx, 10, NearbyParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.when();
        this.state = 47;
        this.when_condition();
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

QueryContext.prototype.are = function() {
    return this.getTypedRuleContext(AreContext,0);
};

QueryContext.prototype.are_query = function() {
    return this.getTypedRuleContext(Are_queryContext,0);
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
    this.enterRule(localctx, 12, NearbyParser.RULE_query);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.are();
        this.state = 50;
        this.are_query();
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
    this.enterRule(localctx, 14, NearbyParser.RULE_are);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
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

function Are_queryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_are_query;
    return this;
}

Are_queryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Are_queryContext.prototype.constructor = Are_queryContext;

Are_queryContext.prototype.ARE_QUERY = function() {
    return this.getToken(NearbyParser.ARE_QUERY, 0);
};

Are_queryContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterAre_query(this);
	}
};

Are_queryContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitAre_query(this);
	}
};




NearbyParser.Are_queryContext = Are_queryContext;

NearbyParser.prototype.are_query = function() {

    var localctx = new Are_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, NearbyParser.RULE_are_query);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(NearbyParser.ARE_QUERY);
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
    this.enterRule(localctx, 18, NearbyParser.RULE_verb);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(NearbyParser.VERB);
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
    this.enterRule(localctx, 20, NearbyParser.RULE_determiner);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(NearbyParser.DETERMINER);
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
    this.enterRule(localctx, 22, NearbyParser.RULE_noun);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
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

function WhenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_when;
    return this;
}

WhenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhenContext.prototype.constructor = WhenContext;

WhenContext.prototype.WHEN = function() {
    return this.getToken(NearbyParser.WHEN, 0);
};

WhenContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterWhen(this);
	}
};

WhenContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitWhen(this);
	}
};




NearbyParser.WhenContext = WhenContext;

NearbyParser.prototype.when = function() {

    var localctx = new WhenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, NearbyParser.RULE_when);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(NearbyParser.WHEN);
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

function When_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NearbyParser.RULE_when_condition;
    return this;
}

When_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
When_conditionContext.prototype.constructor = When_conditionContext;

When_conditionContext.prototype.WHEN_CONDITION = function() {
    return this.getToken(NearbyParser.WHEN_CONDITION, 0);
};

When_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.enterWhen_condition(this);
	}
};

When_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof NearbyListener ) {
        listener.exitWhen_condition(this);
	}
};




NearbyParser.When_conditionContext = When_conditionContext;

NearbyParser.prototype.when_condition = function() {

    var localctx = new When_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, NearbyParser.RULE_when_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(NearbyParser.WHEN_CONDITION);
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
