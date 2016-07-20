// Generated from SmartHomeV1.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SmartHomeV1Parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, NEWLINE=4, NUMBER=5, CLOCK_TIME=6, STRING=7, ACTION=8, 
		COMMAND=9, DIRECT_ACTION_SET=10, DIRECT_ACTION=11, SIMPLE_ACTION=12, SIMPLE_ACTIONS=13, 
		ADDITIONAL_SIMPLE_ACTION=14, KNOWABLE_THINGS=15, KNOWABLE_THING=16, ADDITIONAL_KNOWABLE_THING=17, 
		VERB=18, IDENTIFIER=19, NOUNS=20, ADDITIONAL_NOUN=21, NOUN=22, MUSIC=23, 
		SONG=24, ALBUM=25, PLAYLIST=26, TELEVISION=27, LOCATION=28, SPACE=29, 
		ACTIVITY=30, ENTITY=31, UTILITY=32, MEAL=33, STATES=34, ADDITIONAL_STATE=35, 
		STATE_PHRASE=36, COLOR=37, BASE_COLOR=38, POWER=39, STEP=40, PERCENT=41, 
		VOLUME=42, TEMPERATURE=43, DEGREES_F=44, DEGREES_C=45, UNITS=46, COMMAND_WITH_CONDITIONS=47, 
		CONDITION=48, DEPENDENT_CLAUSE=49, DEPENDENT_CLAUSES=50, ADDITIONAL_DEPENDENCY=51, 
		STATEMENTS=52, ADDITIONAL_STATEMENT=53, STATEMENT=54, FACTS=55, ADDITIONAL_FACT=56, 
		EVENTS=57, ADDITIONAL_EVENT=58, FACT=59, ENTITY_FACT=60, ENTITY_STATE=61, 
		ENVIRONMENT_FACT=62, ENVIRONMENT_STATE=63, UPDATE_FACT=64, PLURAL_UPDATES=65, 
		SINGULAR_UPDATE=66, ONLINE_SERVICE=67, OBJECT_FACT=68, OBJECTS=69, ADDITIONAL_OBJECT=70, 
		OBJECT=71, RELATION=72, OBJECT_STATE=73, DATA_FACT=74, DATA_SOURCES=75, 
		ADDITIONAL_DATA=76, DATA=77, DATA_STATE=78, PERSONAL_ORGANIZERS=79, EVENT=80, 
		ENTITY_EVENT=81, ENTITY_CONJUGATION_1=82, ENTITY_EVENT_CONJUGATION_1=83, 
		ENTITY_CONJUGATION_2=84, ENTITY_EVENT_CONJUGATION_2=85, ENVIRONMENT_EVENT=86, 
		ENVIRONMENT_CHANGE=87, UPDATE_EVENT=88, UPDATES=89, OBJECT_EVENT=90, OBJECT_BEHAVIOR=91, 
		DATA_EVENT=92, DATA_BEHAVIOR=93, QUESTION_PHRASE=94, QUESTION=95, QUESTION_ABOUT_ENTITY=96, 
		QUESTION_ABOUT_ENVIRONMENT=97, QUESTION_ABOUT_UPDATE=98, QUESTION_ABOUT_OBJECT=99, 
		QUESTION_ABOUT_DATA=100, HOW_QUESTION=101, HOW_AM=102, HOW_HIGH=103, HOW_IS=104, 
		HOW_DID=105, HOW_WELL=106, HOW_ARE=107, HOW_CAN_ENTITY=108, HOW_LONG=109, 
		HOW_MANY=110, HOW_MUCH=111, HOW_FAR=112, HOW_FAST=113, WHAT_QUESTION=114, 
		WHEN_QUESTION=115, WHERE_QUESTION=116, WHO_QUESTION=117, INDIRECT_REFERENCES=118, 
		ADDITIONAL_INDIRECT_QUESTION=119, INDIRECT_REFERENCE_PHRASE=120, INDIRECT_REFERENCE=121, 
		OPTIONS_FOR_WHAT=122, OPTIONS_FOR_WHAT_IDENTIFIER=123, OPTIONS_FOR_WHAT_THE=124, 
		OPTIONS_FOR_WHAT_I=125, OPTIONS_FOR_WHAT_IS=126, OPTIONS_FOR_HOW=127, 
		OPTIONS_FOR_HOW_I=128, OPTIONS_FOR_HOW_LONG=129, OPTIONS_FOR_HOW_MANY=130, 
		OPTIONS_FOR_HOW_MUCH=131, OPTIONS_FOR_HOW_MUCH_ELECTRICITY=132, OPTIONS_FOR_HOW_MUCH_I=133, 
		OPTIONS_FOR_HOW_TO=134, WHEN_REFERENCE=135, WHERE_REFERENCE=136, WHO_REFERENCE=137, 
		WHETHER_REFERENCE=138, WHILE=139, BEFORE=140, AFTER=141, UNTIL=142, UNLESS=143, 
		GOAL_DEPENDENCY=144, DESCRIPTION=145, ENTITY_CRITERIA=146, LOCATION_DEPENDENCY=147, 
		LOCATION_PHRASE=148, LOCATION_ATTRIBUTE=149, ADDITIONAL_LOCATION=150, 
		TIME_DEPENDENCY=151, TIME=152, TIME_UNIT=153, SEASON=154, BASED_ON=155, 
		SOURCE=156, ADDITIONAL_SOURCE=157;
	public static final int
		RULE_application = 0, RULE_sentence = 1, RULE_action_sentence = 2, RULE_question_sentence = 3;
	public static final String[] ruleNames = {
		"application", "sentence", "action_sentence", "question_sentence"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'.'", "'?'", "'and'", null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, "'song'", "'album'", "'playlist'", null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, "'I sleep last night'", null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, "'the commute will be'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, "NEWLINE", "NUMBER", "CLOCK_TIME", "STRING", "ACTION", 
		"COMMAND", "DIRECT_ACTION_SET", "DIRECT_ACTION", "SIMPLE_ACTION", "SIMPLE_ACTIONS", 
		"ADDITIONAL_SIMPLE_ACTION", "KNOWABLE_THINGS", "KNOWABLE_THING", "ADDITIONAL_KNOWABLE_THING", 
		"VERB", "IDENTIFIER", "NOUNS", "ADDITIONAL_NOUN", "NOUN", "MUSIC", "SONG", 
		"ALBUM", "PLAYLIST", "TELEVISION", "LOCATION", "SPACE", "ACTIVITY", "ENTITY", 
		"UTILITY", "MEAL", "STATES", "ADDITIONAL_STATE", "STATE_PHRASE", "COLOR", 
		"BASE_COLOR", "POWER", "STEP", "PERCENT", "VOLUME", "TEMPERATURE", "DEGREES_F", 
		"DEGREES_C", "UNITS", "COMMAND_WITH_CONDITIONS", "CONDITION", "DEPENDENT_CLAUSE", 
		"DEPENDENT_CLAUSES", "ADDITIONAL_DEPENDENCY", "STATEMENTS", "ADDITIONAL_STATEMENT", 
		"STATEMENT", "FACTS", "ADDITIONAL_FACT", "EVENTS", "ADDITIONAL_EVENT", 
		"FACT", "ENTITY_FACT", "ENTITY_STATE", "ENVIRONMENT_FACT", "ENVIRONMENT_STATE", 
		"UPDATE_FACT", "PLURAL_UPDATES", "SINGULAR_UPDATE", "ONLINE_SERVICE", 
		"OBJECT_FACT", "OBJECTS", "ADDITIONAL_OBJECT", "OBJECT", "RELATION", "OBJECT_STATE", 
		"DATA_FACT", "DATA_SOURCES", "ADDITIONAL_DATA", "DATA", "DATA_STATE", 
		"PERSONAL_ORGANIZERS", "EVENT", "ENTITY_EVENT", "ENTITY_CONJUGATION_1", 
		"ENTITY_EVENT_CONJUGATION_1", "ENTITY_CONJUGATION_2", "ENTITY_EVENT_CONJUGATION_2", 
		"ENVIRONMENT_EVENT", "ENVIRONMENT_CHANGE", "UPDATE_EVENT", "UPDATES", 
		"OBJECT_EVENT", "OBJECT_BEHAVIOR", "DATA_EVENT", "DATA_BEHAVIOR", "QUESTION_PHRASE", 
		"QUESTION", "QUESTION_ABOUT_ENTITY", "QUESTION_ABOUT_ENVIRONMENT", "QUESTION_ABOUT_UPDATE", 
		"QUESTION_ABOUT_OBJECT", "QUESTION_ABOUT_DATA", "HOW_QUESTION", "HOW_AM", 
		"HOW_HIGH", "HOW_IS", "HOW_DID", "HOW_WELL", "HOW_ARE", "HOW_CAN_ENTITY", 
		"HOW_LONG", "HOW_MANY", "HOW_MUCH", "HOW_FAR", "HOW_FAST", "WHAT_QUESTION", 
		"WHEN_QUESTION", "WHERE_QUESTION", "WHO_QUESTION", "INDIRECT_REFERENCES", 
		"ADDITIONAL_INDIRECT_QUESTION", "INDIRECT_REFERENCE_PHRASE", "INDIRECT_REFERENCE", 
		"OPTIONS_FOR_WHAT", "OPTIONS_FOR_WHAT_IDENTIFIER", "OPTIONS_FOR_WHAT_THE", 
		"OPTIONS_FOR_WHAT_I", "OPTIONS_FOR_WHAT_IS", "OPTIONS_FOR_HOW", "OPTIONS_FOR_HOW_I", 
		"OPTIONS_FOR_HOW_LONG", "OPTIONS_FOR_HOW_MANY", "OPTIONS_FOR_HOW_MUCH", 
		"OPTIONS_FOR_HOW_MUCH_ELECTRICITY", "OPTIONS_FOR_HOW_MUCH_I", "OPTIONS_FOR_HOW_TO", 
		"WHEN_REFERENCE", "WHERE_REFERENCE", "WHO_REFERENCE", "WHETHER_REFERENCE", 
		"WHILE", "BEFORE", "AFTER", "UNTIL", "UNLESS", "GOAL_DEPENDENCY", "DESCRIPTION", 
		"ENTITY_CRITERIA", "LOCATION_DEPENDENCY", "LOCATION_PHRASE", "LOCATION_ATTRIBUTE", 
		"ADDITIONAL_LOCATION", "TIME_DEPENDENCY", "TIME", "TIME_UNIT", "SEASON", 
		"BASED_ON", "SOURCE", "ADDITIONAL_SOURCE"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SmartHomeV1.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SmartHomeV1Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ApplicationContext extends ParserRuleContext {
		public TerminalNode NEWLINE() { return getToken(SmartHomeV1Parser.NEWLINE, 0); }
		public List<SentenceContext> sentence() {
			return getRuleContexts(SentenceContext.class);
		}
		public SentenceContext sentence(int i) {
			return getRuleContext(SentenceContext.class,i);
		}
		public ApplicationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_application; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).enterApplication(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).exitApplication(this);
		}
	}

	public final ApplicationContext application() throws RecognitionException {
		ApplicationContext _localctx = new ApplicationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_application);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(9); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(8);
				sentence();
				}
				}
				setState(11); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ACTION || _la==QUESTION_PHRASE );
			setState(13);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SentenceContext extends ParserRuleContext {
		public Action_sentenceContext action_sentence() {
			return getRuleContext(Action_sentenceContext.class,0);
		}
		public Question_sentenceContext question_sentence() {
			return getRuleContext(Question_sentenceContext.class,0);
		}
		public SentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).enterSentence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).exitSentence(this);
		}
	}

	public final SentenceContext sentence() throws RecognitionException {
		SentenceContext _localctx = new SentenceContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sentence);
		try {
			setState(21);
			switch (_input.LA(1)) {
			case ACTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(15);
				action_sentence();
				setState(16);
				match(T__0);
				}
				break;
			case QUESTION_PHRASE:
				enterOuterAlt(_localctx, 2);
				{
				setState(18);
				question_sentence();
				setState(19);
				match(T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Action_sentenceContext extends ParserRuleContext {
		public TerminalNode ACTION() { return getToken(SmartHomeV1Parser.ACTION, 0); }
		public Action_sentenceContext action_sentence() {
			return getRuleContext(Action_sentenceContext.class,0);
		}
		public Action_sentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action_sentence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).enterAction_sentence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).exitAction_sentence(this);
		}
	}

	public final Action_sentenceContext action_sentence() throws RecognitionException {
		Action_sentenceContext _localctx = new Action_sentenceContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_action_sentence);
		try {
			setState(27);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				match(ACTION);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				match(ACTION);
				setState(25);
				match(T__2);
				setState(26);
				action_sentence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Question_sentenceContext extends ParserRuleContext {
		public TerminalNode QUESTION_PHRASE() { return getToken(SmartHomeV1Parser.QUESTION_PHRASE, 0); }
		public Question_sentenceContext question_sentence() {
			return getRuleContext(Question_sentenceContext.class,0);
		}
		public Question_sentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_question_sentence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).enterQuestion_sentence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SmartHomeV1Listener ) ((SmartHomeV1Listener)listener).exitQuestion_sentence(this);
		}
	}

	public final Question_sentenceContext question_sentence() throws RecognitionException {
		Question_sentenceContext _localctx = new Question_sentenceContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_question_sentence);
		try {
			setState(33);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(29);
				match(QUESTION_PHRASE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(30);
				match(QUESTION_PHRASE);
				setState(31);
				match(T__2);
				setState(32);
				question_sentence();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\u009f&\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\3\2\6\2\f\n\2\r\2\16\2\r\3\2\3\2\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\5\3\30\n\3\3\4\3\4\3\4\3\4\5\4\36\n\4\3\5\3\5\3\5\3\5\5\5$"+
		"\n\5\3\5\2\2\6\2\4\6\b\2\2%\2\13\3\2\2\2\4\27\3\2\2\2\6\35\3\2\2\2\b#"+
		"\3\2\2\2\n\f\5\4\3\2\13\n\3\2\2\2\f\r\3\2\2\2\r\13\3\2\2\2\r\16\3\2\2"+
		"\2\16\17\3\2\2\2\17\20\7\6\2\2\20\3\3\2\2\2\21\22\5\6\4\2\22\23\7\3\2"+
		"\2\23\30\3\2\2\2\24\25\5\b\5\2\25\26\7\4\2\2\26\30\3\2\2\2\27\21\3\2\2"+
		"\2\27\24\3\2\2\2\30\5\3\2\2\2\31\36\7\n\2\2\32\33\7\n\2\2\33\34\7\5\2"+
		"\2\34\36\5\6\4\2\35\31\3\2\2\2\35\32\3\2\2\2\36\7\3\2\2\2\37$\7`\2\2 "+
		"!\7`\2\2!\"\7\5\2\2\"$\5\b\5\2#\37\3\2\2\2# \3\2\2\2$\t\3\2\2\2\6\r\27"+
		"\35#";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}