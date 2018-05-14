/* KNOWN GOOD SMALL GRAMMAR BELOW - ORIGINAL DEMO GRAMMAR

start
    : application EOF
    ;

application
    : action
    | query
    ;
action
    : immediate_action
    | conditional_action
    ;
immediate_action
    : verb determiner noun
    ;

conditional_action
    : condition immediate_action
    ;

condition
    : when when_condition
    ;

query
    : are are_query
    ;

//////////////////////////////
are: ARE ;
are_query: ARE_QUERY ;
verb: VERB ;
determiner: DETERMINER ;
noun: NOUN ;
when: WHEN ;
when_condition: WHEN_CONDITION ;
////////////////////////////////

ARE
   : 'are'
   ;

ARE_QUERY
   : 'the lights on'
   ;

WHEN
    : 'when'
    | 'if'
    ;

WHEN_CONDITION
    : 'there is motion'
    ;

WS
    : [ \t\r\n]+ -> skip
    ;

VERB
    : 'turn on'
    | 'turn off'
    ;
DETERMINER
    : 'the'
    ;
NOUN
    : 'lights'
    | 'projector'
    ;
