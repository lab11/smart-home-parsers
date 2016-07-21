// Generated from SmartHomeV1.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SmartHomeV1Parser}.
 */
public interface SmartHomeV1Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SmartHomeV1Parser#application}.
	 * @param ctx the parse tree
	 */
	void enterApplication(SmartHomeV1Parser.ApplicationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeV1Parser#application}.
	 * @param ctx the parse tree
	 */
	void exitApplication(SmartHomeV1Parser.ApplicationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmartHomeV1Parser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterSentence(SmartHomeV1Parser.SentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeV1Parser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitSentence(SmartHomeV1Parser.SentenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmartHomeV1Parser#action_sentence}.
	 * @param ctx the parse tree
	 */
	void enterAction_sentence(SmartHomeV1Parser.Action_sentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeV1Parser#action_sentence}.
	 * @param ctx the parse tree
	 */
	void exitAction_sentence(SmartHomeV1Parser.Action_sentenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmartHomeV1Parser#question_sentence}.
	 * @param ctx the parse tree
	 */
	void enterQuestion_sentence(SmartHomeV1Parser.Question_sentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeV1Parser#question_sentence}.
	 * @param ctx the parse tree
	 */
	void exitQuestion_sentence(SmartHomeV1Parser.Question_sentenceContext ctx);
}