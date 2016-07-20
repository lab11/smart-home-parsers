// Generated from Test.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TestParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NEWLINE=1, NUMBER=2, TIME=3, SHORT_PHRASE=4, INTEGER=5, FLOAT=6;
	public static final int
		RULE_test1 = 0, RULE_test2 = 1, RULE_test3 = 2, RULE_test4 = 3, RULE_test5 = 4;
	public static final String[] ruleNames = {
		"test1", "test2", "test3", "test4", "test5"
	};

	private static final String[] _LITERAL_NAMES = {
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "NEWLINE", "NUMBER", "TIME", "SHORT_PHRASE", "INTEGER", "FLOAT"
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
	public String getGrammarFileName() { return "Test.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TestParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class Test1Context extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(TestParser.INTEGER, 0); }
		public TerminalNode NEWLINE() { return getToken(TestParser.NEWLINE, 0); }
		public Test1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test1; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).enterTest1(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).exitTest1(this);
		}
	}

	public final Test1Context test1() throws RecognitionException {
		Test1Context _localctx = new Test1Context(_ctx, getState());
		enterRule(_localctx, 0, RULE_test1);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			match(INTEGER);
			setState(11);
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

	public static class Test2Context extends ParserRuleContext {
		public TerminalNode FLOAT() { return getToken(TestParser.FLOAT, 0); }
		public TerminalNode NEWLINE() { return getToken(TestParser.NEWLINE, 0); }
		public Test2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test2; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).enterTest2(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).exitTest2(this);
		}
	}

	public final Test2Context test2() throws RecognitionException {
		Test2Context _localctx = new Test2Context(_ctx, getState());
		enterRule(_localctx, 2, RULE_test2);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13);
			match(FLOAT);
			setState(14);
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

	public static class Test3Context extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(TestParser.NUMBER, 0); }
		public TerminalNode NEWLINE() { return getToken(TestParser.NEWLINE, 0); }
		public Test3Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test3; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).enterTest3(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).exitTest3(this);
		}
	}

	public final Test3Context test3() throws RecognitionException {
		Test3Context _localctx = new Test3Context(_ctx, getState());
		enterRule(_localctx, 4, RULE_test3);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			match(NUMBER);
			setState(17);
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

	public static class Test4Context extends ParserRuleContext {
		public TerminalNode TIME() { return getToken(TestParser.TIME, 0); }
		public TerminalNode NEWLINE() { return getToken(TestParser.NEWLINE, 0); }
		public Test4Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test4; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).enterTest4(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).exitTest4(this);
		}
	}

	public final Test4Context test4() throws RecognitionException {
		Test4Context _localctx = new Test4Context(_ctx, getState());
		enterRule(_localctx, 6, RULE_test4);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19);
			match(TIME);
			setState(20);
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

	public static class Test5Context extends ParserRuleContext {
		public TerminalNode SHORT_PHRASE() { return getToken(TestParser.SHORT_PHRASE, 0); }
		public TerminalNode NEWLINE() { return getToken(TestParser.NEWLINE, 0); }
		public Test5Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test5; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).enterTest5(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestListener ) ((TestListener)listener).exitTest5(this);
		}
	}

	public final Test5Context test5() throws RecognitionException {
		Test5Context _localctx = new Test5Context(_ctx, getState());
		enterRule(_localctx, 8, RULE_test5);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(SHORT_PHRASE);
			setState(23);
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

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\b\34\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3"+
		"\5\3\5\3\6\3\6\3\6\3\6\2\2\7\2\4\6\b\n\2\2\26\2\f\3\2\2\2\4\17\3\2\2\2"+
		"\6\22\3\2\2\2\b\25\3\2\2\2\n\30\3\2\2\2\f\r\7\7\2\2\r\16\7\3\2\2\16\3"+
		"\3\2\2\2\17\20\7\b\2\2\20\21\7\3\2\2\21\5\3\2\2\2\22\23\7\4\2\2\23\24"+
		"\7\3\2\2\24\7\3\2\2\2\25\26\7\5\2\2\26\27\7\3\2\2\27\t\3\2\2\2\30\31\7"+
		"\6\2\2\31\32\7\3\2\2\32\13\3\2\2\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}