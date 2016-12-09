// Generated from Nearby.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NearbyListener = require('./NearbyListener').NearbyListener;
var grammarFileName = "Nearby.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0015\u0089\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0005\u0002,\n\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u00033",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004H\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004N\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004T\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004Z\n\u0004\u0005\u0004\\\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005f\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0002",
    "\u0002\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(\u0002\u0002\u0083\u0002+\u0003\u0002\u0002",
    "\u0002\u00042\u0003\u0002\u0002\u0002\u0006[\u0003\u0002\u0002\u0002",
    "\be\u0003\u0002\u0002\u0002\ng\u0003\u0002\u0002\u0002\fj\u0003\u0002",
    "\u0002\u0002\u000el\u0003\u0002\u0002\u0002\u0010n\u0003\u0002\u0002",
    "\u0002\u0012p\u0003\u0002\u0002\u0002\u0014r\u0003\u0002\u0002\u0002",
    "\u0016t\u0003\u0002\u0002\u0002\u0018v\u0003\u0002\u0002\u0002\u001a",
    "x\u0003\u0002\u0002\u0002\u001cz\u0003\u0002\u0002\u0002\u001e|\u0003",
    "\u0002\u0002\u0002 ~\u0003\u0002\u0002\u0002\"\u0080\u0003\u0002\u0002",
    "\u0002$\u0082\u0003\u0002\u0002\u0002&\u0084\u0003\u0002\u0002\u0002",
    "(\u0086\u0003\u0002\u0002\u0002*,\u0007\u0003\u0002\u0002+*\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0005",
    "\u0004\u0003\u0002./\u0007\u0002\u0002\u0003/\u0003\u0003\u0002\u0002",
    "\u000203\u0005\u0006\u0004\u000213\u0005\b\u0005\u000220\u0003\u0002",
    "\u0002\u000221\u0003\u0002\u0002\u00023\u0005\u0003\u0002\u0002\u0002",
    "45\u0005\f\u0007\u000256\u0005\u0018\r\u00026\\\u0003\u0002\u0002\u0002",
    "78\u0005\u000e\b\u000289\u0005\u0018\r\u00029\\\u0003\u0002\u0002\u0002",
    ":;\u0005\f\u0007\u0002;<\u0005\u001a\u000e\u0002<\\\u0003\u0002\u0002",
    "\u0002=>\u0005\u000e\b\u0002>?\u0005\u001a\u000e\u0002?\\\u0003\u0002",
    "\u0002\u0002@A\u0005\u0012\n\u0002AB\u0005\u001c\u000f\u0002B\\\u0003",
    "\u0002\u0002\u0002CD\u0005\u0014\u000b\u0002DG\u0005\u001e\u0010\u0002",
    "EF\u0007\u0006\u0002\u0002FH\u0005\n\u0006\u0002GE\u0003\u0002\u0002",
    "\u0002GH\u0003\u0002\u0002\u0002H\\\u0003\u0002\u0002\u0002IJ\u0005",
    "\u0016\f\u0002JM\u0005\u001e\u0010\u0002KL\u0007\u0006\u0002\u0002L",
    "N\u0005\n\u0006\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002",
    "\u0002N\\\u0003\u0002\u0002\u0002OP\u0005\u0014\u000b\u0002PS\u0005",
    " \u0011\u0002QR\u0007\u0006\u0002\u0002RT\u0005\n\u0006\u0002SQ\u0003",
    "\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002T\\\u0003\u0002\u0002\u0002",
    "UV\u0005\u0016\f\u0002VY\u0005 \u0011\u0002WX\u0007\u0006\u0002\u0002",
    "XZ\u0005\n\u0006\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z\\\u0003\u0002\u0002\u0002[4\u0003\u0002\u0002\u0002[7\u0003",
    "\u0002\u0002\u0002[:\u0003\u0002\u0002\u0002[=\u0003\u0002\u0002\u0002",
    "[@\u0003\u0002\u0002\u0002[C\u0003\u0002\u0002\u0002[I\u0003\u0002\u0002",
    "\u0002[O\u0003\u0002\u0002\u0002[U\u0003\u0002\u0002\u0002\\\u0007\u0003",
    "\u0002\u0002\u0002]^\u0005\"\u0012\u0002^_\u0005\u0018\r\u0002_`\u0005",
    "&\u0014\u0002`f\u0003\u0002\u0002\u0002ab\u0005$\u0013\u0002bc\u0005",
    "\u001a\u000e\u0002cd\u0005(\u0015\u0002df\u0003\u0002\u0002\u0002e]",
    "\u0003\u0002\u0002\u0002ea\u0003\u0002\u0002\u0002f\t\u0003\u0002\u0002",
    "\u0002gh\u0007\u0005\u0002\u0002hi\u0007\u0004\u0002\u0002i\u000b\u0003",
    "\u0002\u0002\u0002jk\u0007\u0007\u0002\u0002k\r\u0003\u0002\u0002\u0002",
    "lm\u0007\b\u0002\u0002m\u000f\u0003\u0002\u0002\u0002no\u0007\n\u0002",
    "\u0002o\u0011\u0003\u0002\u0002\u0002pq\u0007\t\u0002\u0002q\u0013\u0003",
    "\u0002\u0002\u0002rs\u0007\u000b\u0002\u0002s\u0015\u0003\u0002\u0002",
    "\u0002tu\u0007\f\u0002\u0002u\u0017\u0003\u0002\u0002\u0002vw\u0007",
    "\u0011\u0002\u0002w\u0019\u0003\u0002\u0002\u0002xy\u0007\u0012\u0002",
    "\u0002y\u001b\u0003\u0002\u0002\u0002z{\u0007\u0015\u0002\u0002{\u001d",
    "\u0003\u0002\u0002\u0002|}\u0007\u0013\u0002\u0002}\u001f\u0003\u0002",
    "\u0002\u0002~\u007f\u0007\u0014\u0002\u0002\u007f!\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0007\u000f\u0002\u0002\u0081#\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0007\u0010\u0002\u0002\u0083%\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0007\r\u0002\u0002\u0085\'\u0003\u0002\u0002\u0002",
    "\u0086\u0087\u0007\u000e\u0002\u0002\u0087)\u0003\u0002\u0002\u0002",
    "\n+2GMSY[e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'%'", null, "'to'", "'turn on'", "'turn off'", 
                     "'unlock'", "'lock'", "'dim'", "'brighten'", "'on'", 
                     "'off'", "'is'", "'are'", "'the light'", "'the lights'", 
                     "'hue light'", "'the hue lights'", "'the door'" ];

var symbolicNames = [ null, "PLEASANTRY", "PCT", "INTEGER", "TO", "TURN_ON", 
                      "TURN_OFF", "UNLOCK", "LOCK", "DIM", "BRIGHTEN", "ON", 
                      "OFF", "IS", "ARE", "TURNABLE", "TURNABLES", "DIMMABLE", 
                      "DIMMABLES", "LOCKABLE" ];

var ruleNames =  [ "start", "application", "command", "question", "percent", 
                   "turn_on", "turn_off", "lock", "unlock", "dim", "brighten", 
                   "turnable", "turnables", "lockable", "dimmable", "dimmables", 
                   "is", "are", "on", "off" ];

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
NearbyParser.TURN_ON = 5;
NearbyParser.TURN_OFF = 6;
NearbyParser.UNLOCK = 7;
NearbyParser.LOCK = 8;
NearbyParser.DIM = 9;
NearbyParser.BRIGHTEN = 10;
NearbyParser.ON = 11;
NearbyParser.OFF = 12;
NearbyParser.IS = 13;
NearbyParser.ARE = 14;
NearbyParser.TURNABLE = 15;
NearbyParser.TURNABLES = 16;
NearbyParser.DIMMABLE = 17;
NearbyParser.DIMMABLES = 18;
NearbyParser.LOCKABLE = 19;

NearbyParser.RULE_start = 0;
NearbyParser.RULE_application = 1;
NearbyParser.RULE_command = 2;
NearbyParser.RULE_question = 3;
NearbyParser.RULE_percent = 4;
NearbyParser.RULE_turn_on = 5;
NearbyParser.RULE_turn_off = 6;
NearbyParser.RULE_lock = 7;
NearbyParser.RULE_unlock = 8;
NearbyParser.RULE_dim = 9;
NearbyParser.RULE_brighten = 10;
NearbyParser.RULE_turnable = 11;
NearbyParser.RULE_turnables = 12;
NearbyParser.RULE_lockable = 13;
NearbyParser.RULE_dimmable = 14;
NearbyParser.RULE_dimmables = 15;
NearbyParser.RULE_is = 16;
NearbyParser.RULE_are = 17;
NearbyParser.RULE_on = 18;
NearbyParser.RULE_off = 19;

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
        this.state = 41;
        _la = this._input.LA(1);
        if(_la===NearbyParser.PLEASANTRY) {
            this.state = 40;
            this.match(NearbyParser.PLEASANTRY);
        }

        this.state = 43;
        this.application();
        this.state = 44;
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
        this.state = 48;
        switch(this._input.LA(1)) {
        case NearbyParser.TURN_ON:
        case NearbyParser.TURN_OFF:
        case NearbyParser.UNLOCK:
        case NearbyParser.DIM:
        case NearbyParser.BRIGHTEN:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.command();
            break;
        case NearbyParser.IS:
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
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

CommandContext.prototype.turn_on = function() {
    return this.getTypedRuleContext(Turn_onContext,0);
};

CommandContext.prototype.turnable = function() {
    return this.getTypedRuleContext(TurnableContext,0);
};

CommandContext.prototype.turn_off = function() {
    return this.getTypedRuleContext(Turn_offContext,0);
};

CommandContext.prototype.turnables = function() {
    return this.getTypedRuleContext(TurnablesContext,0);
};

CommandContext.prototype.unlock = function() {
    return this.getTypedRuleContext(UnlockContext,0);
};

CommandContext.prototype.lockable = function() {
    return this.getTypedRuleContext(LockableContext,0);
};

CommandContext.prototype.dim = function() {
    return this.getTypedRuleContext(DimContext,0);
};

CommandContext.prototype.dimmable = function() {
    return this.getTypedRuleContext(DimmableContext,0);
};

CommandContext.prototype.TO = function() {
    return this.getToken(NearbyParser.TO, 0);
};

CommandContext.prototype.percent = function() {
    return this.getTypedRuleContext(PercentContext,0);
};

CommandContext.prototype.brighten = function() {
    return this.getTypedRuleContext(BrightenContext,0);
};

CommandContext.prototype.dimmables = function() {
    return this.getTypedRuleContext(DimmablesContext,0);
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
        this.state = 89;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.turn_on();
            this.state = 51;
            this.turnable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 53;
            this.turn_off();
            this.state = 54;
            this.turnable();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 56;
            this.turn_on();
            this.state = 57;
            this.turnables();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 59;
            this.turn_off();
            this.state = 60;
            this.turnables();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 62;
            this.unlock();
            this.state = 63;
            this.lockable();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 65;
            this.dim();
            this.state = 66;
            this.dimmable();
            this.state = 69;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 67;
                this.match(NearbyParser.TO);
                this.state = 68;
                this.percent();
            }

            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 71;
            this.brighten();
            this.state = 72;
            this.dimmable();
            this.state = 75;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 73;
                this.match(NearbyParser.TO);
                this.state = 74;
                this.percent();
            }

            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 77;
            this.dim();
            this.state = 78;
            this.dimmables();
            this.state = 81;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 79;
                this.match(NearbyParser.TO);
                this.state = 80;
                this.percent();
            }

            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 83;
            this.brighten();
            this.state = 84;
            this.dimmables();
            this.state = 87;
            _la = this._input.LA(1);
            if(_la===NearbyParser.TO) {
                this.state = 85;
                this.match(NearbyParser.TO);
                this.state = 86;
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

QuestionContext.prototype.is = function() {
    return this.getTypedRuleContext(IsContext,0);
};

QuestionContext.prototype.turnable = function() {
    return this.getTypedRuleContext(TurnableContext,0);
};

QuestionContext.prototype.on = function() {
    return this.getTypedRuleContext(OnContext,0);
};

QuestionContext.prototype.are = function() {
    return this.getTypedRuleContext(AreContext,0);
};

QuestionContext.prototype.turnables = function() {
    return this.getTypedRuleContext(TurnablesContext,0);
};

QuestionContext.prototype.off = function() {
    return this.getTypedRuleContext(OffContext,0);
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
        this.state = 99;
        switch(this._input.LA(1)) {
        case NearbyParser.IS:
            this.enterOuterAlt(localctx, 1);
            this.state = 91;
            this.is();
            this.state = 92;
            this.turnable();
            this.state = 93;
            this.on();
            break;
        case NearbyParser.ARE:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.are();
            this.state = 96;
            this.turnables();
            this.state = 97;
            this.off();
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
        this.state = 101;
        this.match(NearbyParser.INTEGER);
        this.state = 102;
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
    this.enterRule(localctx, 10, NearbyParser.RULE_turn_on);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
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
    this.enterRule(localctx, 12, NearbyParser.RULE_turn_off);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
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
    this.enterRule(localctx, 14, NearbyParser.RULE_lock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
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
    this.enterRule(localctx, 16, NearbyParser.RULE_unlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
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
    this.enterRule(localctx, 18, NearbyParser.RULE_dim);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
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
    this.enterRule(localctx, 20, NearbyParser.RULE_brighten);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
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
    this.enterRule(localctx, 22, NearbyParser.RULE_turnable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
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
    this.enterRule(localctx, 24, NearbyParser.RULE_turnables);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
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
    this.enterRule(localctx, 26, NearbyParser.RULE_lockable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
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
    this.enterRule(localctx, 28, NearbyParser.RULE_dimmable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
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
    this.enterRule(localctx, 30, NearbyParser.RULE_dimmables);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
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
        this.state = 126;
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
        this.state = 128;
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
        this.state = 130;
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
        this.state = 132;
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


exports.NearbyParser = NearbyParser;
