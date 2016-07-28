// Generated from Nearby.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by NearbyParser.
function NearbyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

NearbyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
NearbyListener.prototype.constructor = NearbyListener;

// Enter a parse tree produced by NearbyParser#application.
NearbyListener.prototype.enterApplication = function(ctx) {
};

// Exit a parse tree produced by NearbyParser#application.
NearbyListener.prototype.exitApplication = function(ctx) {
};


// Enter a parse tree produced by NearbyParser#action.
NearbyListener.prototype.enterAction = function(ctx) {
};

// Exit a parse tree produced by NearbyParser#action.
NearbyListener.prototype.exitAction = function(ctx) {
};


// Enter a parse tree produced by NearbyParser#immediate_action.
NearbyListener.prototype.enterImmediate_action = function(ctx) {
};

// Exit a parse tree produced by NearbyParser#immediate_action.
NearbyListener.prototype.exitImmediate_action = function(ctx) {
};


// Enter a parse tree produced by NearbyParser#conditional_action.
NearbyListener.prototype.enterConditional_action = function(ctx) {
};

// Exit a parse tree produced by NearbyParser#conditional_action.
NearbyListener.prototype.exitConditional_action = function(ctx) {
};



exports.NearbyListener = NearbyListener;