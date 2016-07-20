grammar SmartHome;
application:    sentence NEWLINE ;
sentence:       action_sentence '.' | question_sentence '?' ;
action_sentence: action | action 'and' action ;
action: command 

command: direct_action
direct_action: simple_action
simple_action: verb identifier noun | verb identifier noun state_phrase


'turn on the lights' | 'turn on the music' ;
question_sentence: 'what is my weight' ;
NEWLINE:    [\r\n]+ ;
