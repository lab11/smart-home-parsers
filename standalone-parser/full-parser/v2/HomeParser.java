// Generated from Home.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class HomeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		QUESTION_MARK=1, PERIOD=2, WS=3, NUMBER=4, CLOCK_TIME=5, STRING=6, AND=7, 
		OR=8, NOT=9, NO=10, DO_NOT=11, BOOLEAN_OPERATOR=12, COMMAND_PLEASANTRIES=13, 
		COMMAND_QUERY_PLEASANTRIES=14, DIRECT_ACTION_VERBS=15, VERB=16, DETERMINER=17, 
		MUSIC=18, ARTIST=19, GENRE=20, SONG=21, SONG_TITLE=22, ALBUM=23, ALBUM_NAME=24, 
		PLAYLIST=25, PLAYLIST_NAME=26, PLAYLIST_DESCRIPTOR=27, TELEVISION=28, 
		FILM_GENRE=29, TV_SHOW_GENRE=30, TV_SHOW=31, MOVIE_TITLE=32, LOCATION=33, 
		SPACE=34, ACTIVITY=35, ENTITY=36, IT=37, THERE=38, UTILITY=39, MEAL=40, 
		PREPOSITION=41, COLOR=42, BASE_COLOR=43, POWER=44, STEP=45, PERCENT=46, 
		VOLUME=47, TEMPERATURE=48, DEGREES_F=49, DEGREES_C=50, UNITS=51, IF=52, 
		WHEN=53, BE=54, HAS=55, OUGHT_TO=56, OUGHT_NOT_TO=57, ENTITY_STATE=58, 
		ENVIRONMENT_STATE=59, UPDATES=60, PLURAL_UPDATES=61, SINGULAR_UPDATE=62, 
		ONLINE_SERVICE=63, OBJECT=64, RELATION=65, OBJECT_STATE=66, DATA=67, DATA_STATE=68, 
		PERSONAL_ORGANIZERS=69, ENTITY_EVENT=70, ENVIRONMENT_CHANGE=71, OBJECT_BEHAVIOR=72, 
		DATA_BEHAVIOR=73, WHILE=74, BEFORE=75, AFTER=76, UNTIL=77, UNLESS=78, 
		IN_ORDER_TO=79, DEFINITE_ARTICLE=80, ENTITY_CRITERIA=81, LOCATION_ATTRIBUTE=82, 
		TIME=83, TIME_UNIT=84, SEASON=85, BASED_ON=86;
	public static final int
		RULE_application = 0, RULE_sentence = 1, RULE_action_sentence = 2, RULE_action = 3, 
		RULE_command = 4, RULE_direct_action_set = 5, RULE_direct_action = 6, 
		RULE_simple_action = 7, RULE_states = 8, RULE_state_phrase = 9, RULE_knowable_things = 10, 
		RULE_knowable_thing = 11, RULE_number = 12, RULE_clock_time = 13, RULE_string = 14, 
		RULE_command_pleasantries = 15, RULE_command_query_pleasantries = 16, 
		RULE_verb = 17, RULE_determiner = 18, RULE_object = 19;
	public static final String[] ruleNames = {
		"application", "sentence", "action_sentence", "action", "command", "direct_action_set", 
		"direct_action", "simple_action", "states", "state_phrase", "knowable_things", 
		"knowable_thing", "number", "clock_time", "string", "command_pleasantries", 
		"command_query_pleasantries", "verb", "determiner", "object"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'?'", "'.'", null, null, null, "'why'", "'and'", "'or'", "'not'", 
		"'no'", "'do not'", null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, "'it'", "'there'", null, null, null, null, null, 
		null, null, null, null, null, null, null, null, "'if'", "'when'", null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, "'while'", "'before'", "'after'", 
		"'until'", "'unless'", null, null, null, null, null, null, null, "'based on'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "QUESTION_MARK", "PERIOD", "WS", "NUMBER", "CLOCK_TIME", "STRING", 
		"AND", "OR", "NOT", "NO", "DO_NOT", "BOOLEAN_OPERATOR", "COMMAND_PLEASANTRIES", 
		"COMMAND_QUERY_PLEASANTRIES", "DIRECT_ACTION_VERBS", "VERB", "DETERMINER", 
		"MUSIC", "ARTIST", "GENRE", "SONG", "SONG_TITLE", "ALBUM", "ALBUM_NAME", 
		"PLAYLIST", "PLAYLIST_NAME", "PLAYLIST_DESCRIPTOR", "TELEVISION", "FILM_GENRE", 
		"TV_SHOW_GENRE", "TV_SHOW", "MOVIE_TITLE", "LOCATION", "SPACE", "ACTIVITY", 
		"ENTITY", "IT", "THERE", "UTILITY", "MEAL", "PREPOSITION", "COLOR", "BASE_COLOR", 
		"POWER", "STEP", "PERCENT", "VOLUME", "TEMPERATURE", "DEGREES_F", "DEGREES_C", 
		"UNITS", "IF", "WHEN", "BE", "HAS", "OUGHT_TO", "OUGHT_NOT_TO", "ENTITY_STATE", 
		"ENVIRONMENT_STATE", "UPDATES", "PLURAL_UPDATES", "SINGULAR_UPDATE", "ONLINE_SERVICE", 
		"OBJECT", "RELATION", "OBJECT_STATE", "DATA", "DATA_STATE", "PERSONAL_ORGANIZERS", 
		"ENTITY_EVENT", "ENVIRONMENT_CHANGE", "OBJECT_BEHAVIOR", "DATA_BEHAVIOR", 
		"WHILE", "BEFORE", "AFTER", "UNTIL", "UNLESS", "IN_ORDER_TO", "DEFINITE_ARTICLE", 
		"ENTITY_CRITERIA", "LOCATION_ATTRIBUTE", "TIME", "TIME_UNIT", "SEASON", 
		"BASED_ON"
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
	public String getGrammarFileName() { return "Home.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public HomeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ApplicationContext extends ParserRuleContext {
		public SentenceContext sentence() {
			return getRuleContext(SentenceContext.class,0);
		}
		public ApplicationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_application; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterApplication(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitApplication(this);
		}
	}

	public final ApplicationContext application() throws RecognitionException {
		ApplicationContext _localctx = new ApplicationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_application);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			sentence();
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
		public TerminalNode PERIOD() { return getToken(HomeParser.PERIOD, 0); }
		public SentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterSentence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitSentence(this);
		}
	}

	public final SentenceContext sentence() throws RecognitionException {
		SentenceContext _localctx = new SentenceContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sentence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			action_sentence();
			setState(44);
			_la = _input.LA(1);
			if (_la==PERIOD) {
				{
				setState(43);
				match(PERIOD);
				}
			}

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
		public ActionContext action() {
			return getRuleContext(ActionContext.class,0);
		}
		public TerminalNode BOOLEAN_OPERATOR() { return getToken(HomeParser.BOOLEAN_OPERATOR, 0); }
		public Action_sentenceContext action_sentence() {
			return getRuleContext(Action_sentenceContext.class,0);
		}
		public Action_sentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action_sentence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterAction_sentence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitAction_sentence(this);
		}
	}

	public final Action_sentenceContext action_sentence() throws RecognitionException {
		Action_sentenceContext _localctx = new Action_sentenceContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_action_sentence);
		try {
			setState(51);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				action();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				action();
				setState(48);
				match(BOOLEAN_OPERATOR);
				setState(49);
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

	public static class ActionContext extends ParserRuleContext {
		public CommandContext command() {
			return getRuleContext(CommandContext.class,0);
		}
		public ActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterAction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitAction(this);
		}
	}

	public final ActionContext action() throws RecognitionException {
		ActionContext _localctx = new ActionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			command();
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

	public static class CommandContext extends ParserRuleContext {
		public Command_pleasantriesContext command_pleasantries() {
			return getRuleContext(Command_pleasantriesContext.class,0);
		}
		public Direct_action_setContext direct_action_set() {
			return getRuleContext(Direct_action_setContext.class,0);
		}
		public TerminalNode DO_NOT() { return getToken(HomeParser.DO_NOT, 0); }
		public Command_query_pleasantriesContext command_query_pleasantries() {
			return getRuleContext(Command_query_pleasantriesContext.class,0);
		}
		public Knowable_thingsContext knowable_things() {
			return getRuleContext(Knowable_thingsContext.class,0);
		}
		public CommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_command; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitCommand(this);
		}
	}

	public final CommandContext command() throws RecognitionException {
		CommandContext _localctx = new CommandContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_command);
		try {
			setState(64);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(55);
				command_pleasantries();
				setState(56);
				direct_action_set();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
				direct_action_set();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(59);
				match(DO_NOT);
				setState(60);
				direct_action_set();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(61);
				command_query_pleasantries();
				setState(62);
				knowable_things();
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

	public static class Direct_action_setContext extends ParserRuleContext {
		public Direct_actionContext direct_action() {
			return getRuleContext(Direct_actionContext.class,0);
		}
		public TerminalNode BOOLEAN_OPERATOR() { return getToken(HomeParser.BOOLEAN_OPERATOR, 0); }
		public Direct_action_setContext direct_action_set() {
			return getRuleContext(Direct_action_setContext.class,0);
		}
		public Direct_action_setContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_direct_action_set; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterDirect_action_set(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitDirect_action_set(this);
		}
	}

	public final Direct_action_setContext direct_action_set() throws RecognitionException {
		Direct_action_setContext _localctx = new Direct_action_setContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_direct_action_set);
		try {
			setState(71);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(66);
				direct_action();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(67);
				direct_action();
				setState(68);
				match(BOOLEAN_OPERATOR);
				setState(69);
				direct_action_set();
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

	public static class Direct_actionContext extends ParserRuleContext {
		public Simple_actionContext simple_action() {
			return getRuleContext(Simple_actionContext.class,0);
		}
		public Direct_actionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_direct_action; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterDirect_action(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitDirect_action(this);
		}
	}

	public final Direct_actionContext direct_action() throws RecognitionException {
		Direct_actionContext _localctx = new Direct_actionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_direct_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			simple_action();
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

	public static class Simple_actionContext extends ParserRuleContext {
		public VerbContext verb() {
			return getRuleContext(VerbContext.class,0);
		}
		public DeterminerContext determiner() {
			return getRuleContext(DeterminerContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public StatesContext states() {
			return getRuleContext(StatesContext.class,0);
		}
		public Simple_actionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simple_action; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterSimple_action(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitSimple_action(this);
		}
	}

	public final Simple_actionContext simple_action() throws RecognitionException {
		Simple_actionContext _localctx = new Simple_actionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_simple_action);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			verb();
			setState(76);
			determiner();
			setState(77);
			object();
			setState(79);
			_la = _input.LA(1);
			if (_la==PREPOSITION || _la==OBJECT_STATE) {
				{
				setState(78);
				states();
				}
			}

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

	public static class StatesContext extends ParserRuleContext {
		public State_phraseContext state_phrase() {
			return getRuleContext(State_phraseContext.class,0);
		}
		public TerminalNode BOOLEAN_OPERATOR() { return getToken(HomeParser.BOOLEAN_OPERATOR, 0); }
		public StatesContext states() {
			return getRuleContext(StatesContext.class,0);
		}
		public StatesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_states; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterStates(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitStates(this);
		}
	}

	public final StatesContext states() throws RecognitionException {
		StatesContext _localctx = new StatesContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_states);
		try {
			setState(86);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(81);
				state_phrase();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(82);
				state_phrase();
				setState(83);
				match(BOOLEAN_OPERATOR);
				setState(84);
				states();
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

	public static class State_phraseContext extends ParserRuleContext {
		public TerminalNode PREPOSITION() { return getToken(HomeParser.PREPOSITION, 0); }
		public TerminalNode OBJECT_STATE() { return getToken(HomeParser.OBJECT_STATE, 0); }
		public TerminalNode ENTITY() { return getToken(HomeParser.ENTITY, 0); }
		public TerminalNode DETERMINER() { return getToken(HomeParser.DETERMINER, 0); }
		public TerminalNode PERSONAL_ORGANIZERS() { return getToken(HomeParser.PERSONAL_ORGANIZERS, 0); }
		public State_phraseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_state_phrase; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterState_phrase(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitState_phrase(this);
		}
	}

	public final State_phraseContext state_phrase() throws RecognitionException {
		State_phraseContext _localctx = new State_phraseContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_state_phrase);
		try {
			setState(96);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(88);
				match(PREPOSITION);
				setState(89);
				match(OBJECT_STATE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
				match(OBJECT_STATE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(91);
				match(PREPOSITION);
				setState(92);
				match(ENTITY);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(93);
				match(PREPOSITION);
				setState(94);
				match(DETERMINER);
				setState(95);
				match(PERSONAL_ORGANIZERS);
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

	public static class Knowable_thingsContext extends ParserRuleContext {
		public Knowable_thingContext knowable_thing() {
			return getRuleContext(Knowable_thingContext.class,0);
		}
		public TerminalNode BOOLEAN_OPERATOR() { return getToken(HomeParser.BOOLEAN_OPERATOR, 0); }
		public Knowable_thingsContext knowable_things() {
			return getRuleContext(Knowable_thingsContext.class,0);
		}
		public Knowable_thingsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_knowable_things; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterKnowable_things(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitKnowable_things(this);
		}
	}

	public final Knowable_thingsContext knowable_things() throws RecognitionException {
		Knowable_thingsContext _localctx = new Knowable_thingsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_knowable_things);
		try {
			setState(103);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(98);
				knowable_thing();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(99);
				knowable_thing();
				setState(100);
				match(BOOLEAN_OPERATOR);
				setState(101);
				knowable_things();
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

	public static class Knowable_thingContext extends ParserRuleContext {
		public TerminalNode DETERMINER() { return getToken(HomeParser.DETERMINER, 0); }
		public TerminalNode DATA() { return getToken(HomeParser.DATA, 0); }
		public Knowable_thingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_knowable_thing; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterKnowable_thing(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitKnowable_thing(this);
		}
	}

	public final Knowable_thingContext knowable_thing() throws RecognitionException {
		Knowable_thingContext _localctx = new Knowable_thingContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_knowable_thing);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(DETERMINER);
			setState(106);
			match(DATA);
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

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(HomeParser.NUMBER, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterNumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitNumber(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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

	public static class Clock_timeContext extends ParserRuleContext {
		public TerminalNode CLOCK_TIME() { return getToken(HomeParser.CLOCK_TIME, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public Clock_timeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clock_time; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterClock_time(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitClock_time(this);
		}
	}

	public final Clock_timeContext clock_time() throws RecognitionException {
		Clock_timeContext _localctx = new Clock_timeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_clock_time);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==CLOCK_TIME) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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

	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(HomeParser.STRING, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitString(this);
		}
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_string);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==STRING) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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

	public static class Command_pleasantriesContext extends ParserRuleContext {
		public TerminalNode COMMAND_PLEASANTRIES() { return getToken(HomeParser.COMMAND_PLEASANTRIES, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public Command_pleasantriesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_command_pleasantries; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterCommand_pleasantries(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitCommand_pleasantries(this);
		}
	}

	public final Command_pleasantriesContext command_pleasantries() throws RecognitionException {
		Command_pleasantriesContext _localctx = new Command_pleasantriesContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_command_pleasantries);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==COMMAND_PLEASANTRIES) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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

	public static class Command_query_pleasantriesContext extends ParserRuleContext {
		public TerminalNode COMMAND_QUERY_PLEASANTRIES() { return getToken(HomeParser.COMMAND_QUERY_PLEASANTRIES, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public Command_query_pleasantriesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_command_query_pleasantries; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterCommand_query_pleasantries(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitCommand_query_pleasantries(this);
		}
	}

	public final Command_query_pleasantriesContext command_query_pleasantries() throws RecognitionException {
		Command_query_pleasantriesContext _localctx = new Command_query_pleasantriesContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_command_query_pleasantries);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==COMMAND_QUERY_PLEASANTRIES) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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

	public static class VerbContext extends ParserRuleContext {
		public TerminalNode VERB() { return getToken(HomeParser.VERB, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public VerbContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_verb; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterVerb(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitVerb(this);
		}
	}

	public final VerbContext verb() throws RecognitionException {
		VerbContext _localctx = new VerbContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_verb);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==VERB) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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

	public static class DeterminerContext extends ParserRuleContext {
		public TerminalNode DETERMINER() { return getToken(HomeParser.DETERMINER, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public DeterminerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_determiner; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterDeterminer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitDeterminer(this);
		}
	}

	public final DeterminerContext determiner() throws RecognitionException {
		DeterminerContext _localctx = new DeterminerContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_determiner);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==DETERMINER) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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

	public static class ObjectContext extends ParserRuleContext {
		public TerminalNode OBJECT() { return getToken(HomeParser.OBJECT, 0); }
		public TerminalNode WS() { return getToken(HomeParser.WS, 0); }
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).enterObject(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof HomeListener ) ((HomeListener)listener).exitObject(this);
		}
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			_la = _input.LA(1);
			if ( !(_la==WS || _la==OBJECT) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3X\177\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13"+
		"\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22\4\23"+
		"\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\3\3\3\5\3/\n\3\3\4\3\4\3\4\3\4\3\4"+
		"\5\4\66\n\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6C\n\6\3\7\3"+
		"\7\3\7\3\7\3\7\5\7J\n\7\3\b\3\b\3\t\3\t\3\t\3\t\5\tR\n\t\3\n\3\n\3\n\3"+
		"\n\3\n\5\nY\n\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13c\n\13\3\f"+
		"\3\f\3\f\3\f\3\f\5\fj\n\f\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3"+
		"\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\25\2\2\26\2\4\6\b\n"+
		"\f\16\20\22\24\26\30\32\34\36 \"$&(\2\n\3\2\5\6\4\2\5\5\7\7\4\2\5\5\b"+
		"\b\4\2\5\5\17\17\4\2\5\5\20\20\4\2\5\5\22\22\4\2\5\5\23\23\4\2\5\5BBv"+
		"\2*\3\2\2\2\4,\3\2\2\2\6\65\3\2\2\2\b\67\3\2\2\2\nB\3\2\2\2\fI\3\2\2\2"+
		"\16K\3\2\2\2\20M\3\2\2\2\22X\3\2\2\2\24b\3\2\2\2\26i\3\2\2\2\30k\3\2\2"+
		"\2\32n\3\2\2\2\34p\3\2\2\2\36r\3\2\2\2 t\3\2\2\2\"v\3\2\2\2$x\3\2\2\2"+
		"&z\3\2\2\2(|\3\2\2\2*+\5\4\3\2+\3\3\2\2\2,.\5\6\4\2-/\7\4\2\2.-\3\2\2"+
		"\2./\3\2\2\2/\5\3\2\2\2\60\66\5\b\5\2\61\62\5\b\5\2\62\63\7\16\2\2\63"+
		"\64\5\6\4\2\64\66\3\2\2\2\65\60\3\2\2\2\65\61\3\2\2\2\66\7\3\2\2\2\67"+
		"8\5\n\6\28\t\3\2\2\29:\5 \21\2:;\5\f\7\2;C\3\2\2\2<C\5\f\7\2=>\7\r\2\2"+
		">C\5\f\7\2?@\5\"\22\2@A\5\26\f\2AC\3\2\2\2B9\3\2\2\2B<\3\2\2\2B=\3\2\2"+
		"\2B?\3\2\2\2C\13\3\2\2\2DJ\5\16\b\2EF\5\16\b\2FG\7\16\2\2GH\5\f\7\2HJ"+
		"\3\2\2\2ID\3\2\2\2IE\3\2\2\2J\r\3\2\2\2KL\5\20\t\2L\17\3\2\2\2MN\5$\23"+
		"\2NO\5&\24\2OQ\5(\25\2PR\5\22\n\2QP\3\2\2\2QR\3\2\2\2R\21\3\2\2\2SY\5"+
		"\24\13\2TU\5\24\13\2UV\7\16\2\2VW\5\22\n\2WY\3\2\2\2XS\3\2\2\2XT\3\2\2"+
		"\2Y\23\3\2\2\2Z[\7+\2\2[c\7D\2\2\\c\7D\2\2]^\7+\2\2^c\7&\2\2_`\7+\2\2"+
		"`a\7\23\2\2ac\7G\2\2bZ\3\2\2\2b\\\3\2\2\2b]\3\2\2\2b_\3\2\2\2c\25\3\2"+
		"\2\2dj\5\30\r\2ef\5\30\r\2fg\7\16\2\2gh\5\26\f\2hj\3\2\2\2id\3\2\2\2i"+
		"e\3\2\2\2j\27\3\2\2\2kl\7\23\2\2lm\7E\2\2m\31\3\2\2\2no\t\2\2\2o\33\3"+
		"\2\2\2pq\t\3\2\2q\35\3\2\2\2rs\t\4\2\2s\37\3\2\2\2tu\t\5\2\2u!\3\2\2\2"+
		"vw\t\6\2\2w#\3\2\2\2xy\t\7\2\2y%\3\2\2\2z{\t\b\2\2{\'\3\2\2\2|}\t\t\2"+
		"\2})\3\2\2\2\n.\65BIQXbi";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}