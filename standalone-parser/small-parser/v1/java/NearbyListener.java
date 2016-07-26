// Generated from Nearby.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link NearbyParser}.
 */
public interface NearbyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link NearbyParser#application}.
	 * @param ctx the parse tree
	 */
	void enterApplication(NearbyParser.ApplicationContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#application}.
	 * @param ctx the parse tree
	 */
	void exitApplication(NearbyParser.ApplicationContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#action}.
	 * @param ctx the parse tree
	 */
	void enterAction(NearbyParser.ActionContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#action}.
	 * @param ctx the parse tree
	 */
	void exitAction(NearbyParser.ActionContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#immediate_action}.
	 * @param ctx the parse tree
	 */
	void enterImmediate_action(NearbyParser.Immediate_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#immediate_action}.
	 * @param ctx the parse tree
	 */
	void exitImmediate_action(NearbyParser.Immediate_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#conditional_action}.
	 * @param ctx the parse tree
	 */
	void enterConditional_action(NearbyParser.Conditional_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#conditional_action}.
	 * @param ctx the parse tree
	 */
	void exitConditional_action(NearbyParser.Conditional_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#query}.
	 * @param ctx the parse tree
	 */
	void enterQuery(NearbyParser.QueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#query}.
	 * @param ctx the parse tree
	 */
	void exitQuery(NearbyParser.QueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#verb}.
	 * @param ctx the parse tree
	 */
	void enterVerb(NearbyParser.VerbContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#verb}.
	 * @param ctx the parse tree
	 */
	void exitVerb(NearbyParser.VerbContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#determiner}.
	 * @param ctx the parse tree
	 */
	void enterDeterminer(NearbyParser.DeterminerContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#determiner}.
	 * @param ctx the parse tree
	 */
	void exitDeterminer(NearbyParser.DeterminerContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#noun}.
	 * @param ctx the parse tree
	 */
	void enterNoun(NearbyParser.NounContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#noun}.
	 * @param ctx the parse tree
	 */
	void exitNoun(NearbyParser.NounContext ctx);
	/**
	 * Enter a parse tree produced by {@link NearbyParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(NearbyParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link NearbyParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(NearbyParser.ConditionContext ctx);
}