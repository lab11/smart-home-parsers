// Generated from SmartHome.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SmartHomeParser}.
 */
public interface SmartHomeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SmartHomeParser#application}.
	 * @param ctx the parse tree
	 */
	void enterApplication(SmartHomeParser.ApplicationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeParser#application}.
	 * @param ctx the parse tree
	 */
	void exitApplication(SmartHomeParser.ApplicationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmartHomeParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterSentence(SmartHomeParser.SentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitSentence(SmartHomeParser.SentenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmartHomeParser#action_sentence}.
	 * @param ctx the parse tree
	 */
	void enterAction_sentence(SmartHomeParser.Action_sentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeParser#action_sentence}.
	 * @param ctx the parse tree
	 */
	void exitAction_sentence(SmartHomeParser.Action_sentenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmartHomeParser#action}.
	 * @param ctx the parse tree
	 */
	void enterAction(SmartHomeParser.ActionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeParser#action}.
	 * @param ctx the parse tree
	 */
	void exitAction(SmartHomeParser.ActionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SmartHomeParser#question_sentence}.
	 * @param ctx the parse tree
	 */
	void enterQuestion_sentence(SmartHomeParser.Question_sentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SmartHomeParser#question_sentence}.
	 * @param ctx the parse tree
	 */
	void exitQuestion_sentence(SmartHomeParser.Question_sentenceContext ctx);
}