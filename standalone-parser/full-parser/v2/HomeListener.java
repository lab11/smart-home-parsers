// Generated from Home.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link HomeParser}.
 */
public interface HomeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link HomeParser#application}.
	 * @param ctx the parse tree
	 */
	void enterApplication(HomeParser.ApplicationContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#application}.
	 * @param ctx the parse tree
	 */
	void exitApplication(HomeParser.ApplicationContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterSentence(HomeParser.SentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitSentence(HomeParser.SentenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#action_sentence}.
	 * @param ctx the parse tree
	 */
	void enterAction_sentence(HomeParser.Action_sentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#action_sentence}.
	 * @param ctx the parse tree
	 */
	void exitAction_sentence(HomeParser.Action_sentenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#action}.
	 * @param ctx the parse tree
	 */
	void enterAction(HomeParser.ActionContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#action}.
	 * @param ctx the parse tree
	 */
	void exitAction(HomeParser.ActionContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#command}.
	 * @param ctx the parse tree
	 */
	void enterCommand(HomeParser.CommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#command}.
	 * @param ctx the parse tree
	 */
	void exitCommand(HomeParser.CommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#direct_action_set}.
	 * @param ctx the parse tree
	 */
	void enterDirect_action_set(HomeParser.Direct_action_setContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#direct_action_set}.
	 * @param ctx the parse tree
	 */
	void exitDirect_action_set(HomeParser.Direct_action_setContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#direct_action}.
	 * @param ctx the parse tree
	 */
	void enterDirect_action(HomeParser.Direct_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#direct_action}.
	 * @param ctx the parse tree
	 */
	void exitDirect_action(HomeParser.Direct_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#simple_action}.
	 * @param ctx the parse tree
	 */
	void enterSimple_action(HomeParser.Simple_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#simple_action}.
	 * @param ctx the parse tree
	 */
	void exitSimple_action(HomeParser.Simple_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#states}.
	 * @param ctx the parse tree
	 */
	void enterStates(HomeParser.StatesContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#states}.
	 * @param ctx the parse tree
	 */
	void exitStates(HomeParser.StatesContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#state_phrase}.
	 * @param ctx the parse tree
	 */
	void enterState_phrase(HomeParser.State_phraseContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#state_phrase}.
	 * @param ctx the parse tree
	 */
	void exitState_phrase(HomeParser.State_phraseContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#knowable_things}.
	 * @param ctx the parse tree
	 */
	void enterKnowable_things(HomeParser.Knowable_thingsContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#knowable_things}.
	 * @param ctx the parse tree
	 */
	void exitKnowable_things(HomeParser.Knowable_thingsContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#knowable_thing}.
	 * @param ctx the parse tree
	 */
	void enterKnowable_thing(HomeParser.Knowable_thingContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#knowable_thing}.
	 * @param ctx the parse tree
	 */
	void exitKnowable_thing(HomeParser.Knowable_thingContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(HomeParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(HomeParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#clock_time}.
	 * @param ctx the parse tree
	 */
	void enterClock_time(HomeParser.Clock_timeContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#clock_time}.
	 * @param ctx the parse tree
	 */
	void exitClock_time(HomeParser.Clock_timeContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(HomeParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(HomeParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#command_pleasantries}.
	 * @param ctx the parse tree
	 */
	void enterCommand_pleasantries(HomeParser.Command_pleasantriesContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#command_pleasantries}.
	 * @param ctx the parse tree
	 */
	void exitCommand_pleasantries(HomeParser.Command_pleasantriesContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#command_query_pleasantries}.
	 * @param ctx the parse tree
	 */
	void enterCommand_query_pleasantries(HomeParser.Command_query_pleasantriesContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#command_query_pleasantries}.
	 * @param ctx the parse tree
	 */
	void exitCommand_query_pleasantries(HomeParser.Command_query_pleasantriesContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#verb}.
	 * @param ctx the parse tree
	 */
	void enterVerb(HomeParser.VerbContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#verb}.
	 * @param ctx the parse tree
	 */
	void exitVerb(HomeParser.VerbContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#determiner}.
	 * @param ctx the parse tree
	 */
	void enterDeterminer(HomeParser.DeterminerContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#determiner}.
	 * @param ctx the parse tree
	 */
	void exitDeterminer(HomeParser.DeterminerContext ctx);
	/**
	 * Enter a parse tree produced by {@link HomeParser#object}.
	 * @param ctx the parse tree
	 */
	void enterObject(HomeParser.ObjectContext ctx);
	/**
	 * Exit a parse tree produced by {@link HomeParser#object}.
	 * @param ctx the parse tree
	 */
	void exitObject(HomeParser.ObjectContext ctx);
}