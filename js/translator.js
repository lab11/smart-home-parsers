//// LISTENER FOR CONSTRUCTING SENTENCES IN TARGET LANGUAGE
var NearbyListener = require('generated-parser/NearbyListener').NearbyListener;
TargetTranslator = function() {
    NearbyListener.call(this);
    this.target_sentence = {};
    return this;
}

TargetTranslator.prototype = Object.create(NearbyListener.prototype);
TargetTranslator.prototype.constructor = TargetTranslator;

TargetTranslator.prototype.enterCore_Action = function(ctx) {
   console.log();
};

TargetTranslator.prototype.exitImmediate_action = function(ctx) {
   this.target_sentence["type"] = "immediate_action";
}

TargetTranslator.prototype.exitConditional_action = function(ctx) {
   this.target_sentence["type"] = "conditional_action";
}

TargetTranslator.prototype.exitQuery = function(ctx) {
   this.target_sentence["type"] = "query";
}

TargetTranslator.prototype.exitVerb = function(ctx) {
   this.target_sentence["verb"] = ctx.getText();
}

NearbyListener.prototype.exitDeterminer = function(ctx) {
   this.target_sentence["determiner"] = ctx.getText();
};

NearbyListener.prototype.exitNoun = function(ctx) {
   this.target_sentence["noun"] = ctx.getText();
};

NearbyListener.prototype.exitCondition = function(ctx) {
   this.target_sentence["condition"] = ctx.getText();
};

NearbyListener.prototype.exitAre_query = function(ctx) {
   this.target_sentence["query"] = "Are " + ctx.getText();
};

NearbyListener.prototype.exitWhen_condition = function(ctx) {
   this.target_sentence["condition_type"] = "event";
   this.target_sentence["condition"] = ctx.getText();
};
