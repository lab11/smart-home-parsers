grammar SmartHomeV1;

NEWLINE:    [\r\n]+ ;
fragment INTEGER:    ('-'|'+')?('0'..'9')+ ;
fragment FLOAT:      ('-'|'+')?(('0'..'9')*'.'('0'..'9')+) ;
NUMBER:     INTEGER | FLOAT ;
CLOCK_TIME:       ('0'..'2')?('0'..'9')(':'('0'..'5')('0'..'9'))?('a.m.'|'p.m.'|'am'|'pm')? ; //24 hour clock, covers some invalid times too
STRING:   (~[\r\n])+ ; 
LOGICAL_OP:	'and'
	| 'or'
	| 'not'
	| 'but not'
	;


// Orig below

// ROOT
application:    (sentence)+ NEWLINE ;
sentence: action_sentence '.' 
    | question_sentence '?'
    ;
action_sentence: action
    | action 'and' action_sentence
    ;
action: command 
    | command_with_conditions 
    | command UNLESS
	| command_with_conditions UNLESS
    ;
question_sentence: question_phrase
	| question_phrase 'and' question_sentence
    ;


// DIRECT ACTIONS
 command: 'I would like for you to' direct_action_set
	| 'I would like to' direct_action_set
	| 'I need you to' direct_action_set
	| 'I want you to' direct_action_set
	| 'I would like for you to' direct_action_set
	| 'I would like for you to' direct_action_set 'but do not' direct_action_set
	| 'I need you to' direct_action_set
	| 'I want you to' direct_action_set 'but do not' direct_action_set
	| 'I would like for you to' direct_action_set 'but do not' direct_action_set
	| direct_action_set
	| 'do not' direct_action_set
	| 'I want to know' knowable_things
	| 'I would like to know' knowable_things
    ;
direct_action_set: direct_action
	| direct_action 'and' direct_action
	| direct_action 'or' direct_action
    ;
direct_action: 'check and see' knowable_things
	| 'track' knowable_things
	| 'determine' knowable_things
	| 'let me know' knowable_things
	| 'tell me' knowable_things
	| 'keep track of' knowable_things
	| 'remind me to' entity_event_conjugation_1
	| 'verify that' statements
	| 'make sure that' statements
	| 'keep' determiner objects object_state
	| 'keep' entity entity_state
	| 'monitor' determiner objects
	| 'monitor' knowable_things
	| 'notify me' condition
	| simple_actions
	| 'check' online_service
	| 'check' determiner online_service
	| 'check' determiner data_sources
	| 'check' determiner plural_updates
	| 'check on' entity
	| 'check on' determiner objects
	| 'check' determiner objects
	| 'keep track of when' events_
	| 'keep track of when' facts
//	| 'tell' entity 'that' <textbox('custom message')>
//	| 'inform' entity 'that' <textbox('custom message')>
	| 'ensure that' statements
	| 'give me' data_sources
	| 'have' determiner noun simple_actions
	| 'have' determiner noun state_phrase
	| 'help me' simple_actions
	| 'inform me of' determiner plural_updates
	| 'inform me of' determiner data_sources
	| 'offer to' simple_actions
	| 'wake' entity 'up'
	| 'cut back on' data_sources 'by' NUMBER units_
	| 'greet' entity
	| 'decide whether to' simple_actions
    ;
simple_action: verb determiner noun
	| verb determiner noun state_phrase
    ;
simple_actions: simple_action
	| simple_action 'and' simple_action
	| simple_action 'or' simple_action
    ;
additional_simple_action: simple_actions ;
knowable_things: knowable_thing
	| knowable_thing 'and' additional_knowable_thing
	| knowable_thing 'or' additional_knowable_thing 
    ;
knowable_thing: determiner data_sources
	| indirect_references
	| condition
    ;
additional_knowable_thing: knowable_things ;
verb: 'turn'
	| 'turn on'
	| 'turn off'
	| 'lock'
	| 'unlock'
	| 'make'
	| 'play'
	| 'set'
	| 'cut on'
	| 'cut off'
	| 'dim'
	| 'brighten'
	| 'put on'
	| 'turn up'
	| 'turn down'
	| 'stop'
	| 'finish'
	| 'access'
	| 'manage'
	| 'read aloud'
	| 'act as'
	| 'activate'
	| 'add'
	| 'adjust'
	| 'clean'
	| 'post to'
	| 'email entity'
	| 'send entity'
	| 'customize'
	| 'personalize'
	| 'increase'
	| 'decrease'
	| 'boot up'
	| 'brew'
	| 'calculate'
	| 'call entity'
	| 'cancel'
	| 'change'
	| 'close'
	| 'compile'
	| 'connect to'
	| 'conserve'
	| 'contact entity'
	| 'control'
	| 'cook'
	| 'cool'
	| 'keep track of'
	| 'create'
	| 'detect'
	| 'disable'
	| 'enable'
	| 'display'
	| 'allow'
	| 'feed'
	| 'draw'
	| 'drop'
	| 'lower'
	| 'find'
	| 'track'
	| 'follow'
	| 'heat'
	| 'heat up'
	| 'lose'
	| 'locate'
	| 'hold'
	| 'improve'
	| 'let'
	| 'light up'
	| 'list'
	| 'log onto'
	| 'log me out of'
	| 'look at'
	| 'look up'
	| 'lower'
	| 'raise'
	| 'maintain'
	| 'make'
	| 'vibrate'
	| 'regulate'
	| 'monitor'
	| 'suggest'
	| 'offer me'
	| 'open'
	| 'shut'
	| 'operate'
	| 'order me'
	| 'order'
	| 'pause'
	| 'pay'
	| 'perform'
	| 'plan'
	| 'preheat'
	| 'prepare'
	| 'program'
	| 'pull up'
	| 'put on'
	| 'raise'
	| 'randomly turn on'
	| 'randomly turn off'
	| 'read me'
	| 'read'
	| 'record'
	| 'reduce'
	| 'regulate'
	| 'remember'
	| 'reply to'
	| 'report'
	| 'request'
	| 'respond to'
	| 'resume'
	| 'ring'
	| 'run'
	| 'schedule'
	| 'secure'
	| 'set'
	| 'set up'
	| 'shut down'
	| 'shut off'
	| 'shut'
	| 'sing'
	| 'sound'
	| 'soften'
	| 'start'
	| 'suggest'
	| 'tailor'
	| 'text'
	| 'track'
	| 'update'
	| 'vibrate'
	| 'warm'
	| 'warm up'
	| 'bring up'
	| 'provide'
	| 'select'
	| 'answer'
	| 'sync'
	| 'queue up'
	| 'measure'
	| 'figure out'
	| 'dispense'
	| 'switch'
	| 'switch off'
	| 'switch on'
	| 'crank up'
	| 'crank down'
    ;
determiner: 'the'
	| 'some'
	| 'the current'
	| 'my current'
	| 'the current'
	| 'any'
	| 'a'
	| 'an'
	| 'my'
	| 'my favorite'
	| 'all'
	| location
	| 'each'
	| 'every'
	| 'one of my'
	| 'one of the'
	| 'our'
	| 'his'
	| 'hers'
	| 'their'
	| 'important'
	| 'the next'
	| 'my next'
	| 'new'
	| 'this'
	| 'that'
    ;
nouns: noun
	| noun 'and' additional_noun
	| noun 'or' additional_noun
    ;
additional_noun: nouns ;
noun: objects
	| objects DESCRIPTION
    ;
music_: 'music'
//	| 'music by' <textbox('artist')>
//	| <textbox('genre')> 'music'
	| 'background music'
    ;
song_: 'song'
//	| 'song by' <textbox('artist')>
//	| 'song' <textbox('song title')>
//	| 'song' <textbox('song title')> 'by' <textbox('artist')>
    ;
album_: 'album' ; //<textbox('album')>
//	| 'album' <textbox('album')> 'by' <textbox('artist')>
//	| 'album by' <textbox('artist')>
//    ;
playlist_: 'playlist' ; //<textbox('playlist name')>
//	| <textbox('description or name')> 'playlist'
//    ;
television_: 'television'
	| 'movie'
	| 'movies'
	| 'video'
	| 'videos'
	| 'show'
	| 'shows'
//	| <textbox('film genre')>
//	| <textbox('film genre')> 'movie'
//	| <textbox('TV show genre')> 'show'
//	| <textbox('TV show')>
//	| <textbox('movie title')>
    ;
location: determiner space_
	| 'inside'
	| 'outside'
	| 'school'
	| 'work'
    ;
space_: 'room'
	| 'house'
	| 'living room'
	| 'bathroom'
	| 'bedroom'
	| 'master bedroom'
	| 'rooms'
	| 'garage'
	| 'yard'
	| 'kitchen'
	| 'home'
	| 'school'
	| 'office'
	| 'work'
	| 'door'
	| 'outside'
	| 'inside'
	| 'guest bedroom'
	| 'guest bathroom'
	| 'dining room'
	| 'attic'
	| 'cellar'
	| 'basement'
	| 'foyer'
	| 'parlor'
	| 'closet'
	| 'den'
	| 'porch'
	| 'hall'
	| 'family room'
	| 'library'
	| 'nursery'
	| 'garden'
	| 'mud room'
	| 'gym'
	| 'game room'
	| 'laundry room'
	| 'pantry'
	| 'sunroom'
	| 'washroom'
	| 'household'
    ;
activity: 'cooking'
	| 'cooking' meal_
	| 'sleeping'
	| 'showering'
	| 'exercising'
	| 'working out'
	| 'getting dressed'
	| 'coming home'
	| 'working'
	| 'driving'
	| 'leaving'
	| 'getting ready'
	| 'reading'
	| 'doing homework'
	| 'preparing' meal_
	| determiner 'morning routine'
    ;
entity: 'I'
	| 'people'
	| 'they'
	| determiner 'kids'
	| determiner 'children'
	| 'we'
	| 'my pets'
	| 'my pet'
	| 'my husband'
	| 'my wife'
	| 'my boyfriend'
	| 'my girlfriend'
	| 'my sister'
	| 'my sisters'
	| 'my brother'
	| 'my brothers'
	| 'my mother'
	| 'my father'
	| 'you'
	| 'someone'
	| 'someone else'
	| 'no one'
	| 'nobody'
	| determiner 'stranger'
	| 'an unidentified person'
	| 'anyone'
	| determiner 'dog'
	| determiner 'cat'
	| 'them'
	| 'he'
	| 'she'
	| 'him'
	| 'her'
	| 'us'
	| 'me'
	| determiner 'friends'
	| determiner 'fish'
	| 'my family'
//	| <textbox('custom name')>
	| 'my parents'
	| 'my in-laws'
	| 'everyone'
    ;
utility_: 'energy'
	| 'electricity'
	| 'power'
	| 'water'
	| 'gas'
	| 'utility'
    ;
meal_: 'breakfast'
	| 'lunch'
	| 'dinner'
    ;

// ATTRIBUTES
states_: state_phrase
	| state_phrase 'and' additional_state
    ;
additional_state: states_ ;
state_phrase: 'to' object_state
	| 'at' object_state
	| 'of' data_sources
//	| 'that says' <textbox('custom message')>
//	| 'to' entity 'that says' <textbox('custom message')>
//	| 'to say' <textbox('custom message')>
	| object_state
	| 'to' entity
	| 'to my' personal_organizers
    ;
color_: base_color
	| 'warm' base_color
	| 'cool' base_color
	| 'bright' base_color
	| 'light' base_color
	| 'hot' base_color
	| 'dark' base_color
	| 'cold' base_color
//	| <textbox('custom color')>
    ;
base_color: 'red'
	| 'pink'
	| 'salmon'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'teal'
	| 'aqua'
	| 'blue'
	| 'purple'
	| 'pink'
	| 'white'
	| 'gold'
    ;
power_: step_ 'power'
	| step_ 'brightness'
	| percent_ 'power'
	| percent_ 'brightness'
	| 'dim'
	| 'bright'
    ;
step_: 'low'
	| 'mid'
	| 'high'
	| 'full'
	| 'half'
	| 'medium'
    ;
percent_: NUMBER '%' ;
volume_: step_ 'volume'
	| percent_ 'volume'
    ;
temperature_: 'warm'
	| 'cool'
	| 'hot'
	| 'cold'
	| degrees_f 'degrees Fahrenheit'
	| degrees_c 'degrees Celsius'
	| 'optimal temperatures'
    ;
degrees_f: NUMBER ;
degrees_c: NUMBER ;
units_: 'dollars'
	| 'watts'
	| 'gallons'
	| 'steps'
	| 'calories'
	| 'pounds'
	| 'beats per minute'
	| 'minutes'
	| 'hours'
	| 'days'
	| 'percent'
	| 'degrees'
	| 'levels'
    ;

// conditions
 command_with_conditions:  command condition
	| condition  command
	| 
    ;
condition: 'if' statements
	| 'when' statements
	| dependent_clauses
    ;
dependent_clause: while_
	| TIME_DEPENDENCY
	| location_dependency
	| BEFORE
	| AFTER
	| BASED_ON
	| UNTIL
	| GOAL_DEPENDENCY
    ;
dependent_clauses: dependent_clause
	| dependent_clause 'and' additional_dependency
	| dependent_clause 'or' additional_dependency
    ;
additional_dependency: dependent_clauses ;
statements: statement
	| statement 'and' additional_statement
	| statement 'or' additional_statement
    ;
additional_statement: statements ;
statement: fact
	| event_
	| fact dependent_clauses
	| event_ dependent_clauses	
    ;
facts: fact
	| fact 'and' additional_fact
	| fact 'or' additional_fact
    ;
additional_fact: facts ;
events_: event_
	| event_ 'and' additional_event
    ;
additional_event: events_ ;

// facts 
// Make sure that, check to see if, tell me if, let me know if, if, when...// see “that the” phrases on SBAR list - when, if, whenever
fact: entity_fact
	| environment_fact
	| update_fact
	| object_fact
	| data_fact
    ;
entity_fact: 'I am' entity_state
	| 'we are' entity_state
	| 'you are' entity_state
	| 'someone is' entity_state
	| 'someone else is' entity_state
	| 'no one is' entity_state
	| 'nobody is' entity_state
	| 'they are' entity_state
	| determiner 'pets are' entity_state
	| 'a stranger is' entity_state
	| 'an unidentified person is' entity_state
	| 'anyone is' entity_state
	| 'the dog is' entity_state
	| 'the cat is' entity_state
	| 'she is' entity_state
	| 'he is' entity_state
	| 'everyone is' entity_state
	| entity_conjugation_1 'need to' entity_event_conjugation_1
	| entity_conjugation_2 'needs to' entity_event_conjugation_1
	| entity_conjugation_1 'want to' entity_event_conjugation_1
	| entity_conjugation_2 'wants to' entity_event_conjugation_1
	| entity 'should' entity_event_conjugation_1
	| 'I am not' entity_state
	| 'we are not' entity_state
	| 'you are not' entity_state
	| 'someone is not' entity_state
	| 'someone else is not' entity_state
	| 'they are not' entity_state
	| determiner 'pets are not' entity_state
	| 'a stranger is not' entity_state
	| 'an unidentified person is not' entity_state
	| 'anyone is not' entity_state
	| 'the dog is not' entity_state
	| 'the cat is not' entity_state
	| 'she is not' entity_state
	| 'he is not' entity_state
	| 'everyone is not' entity_state
	| entity_conjugation_1 'do not need to' entity_event_conjugation_1
	| entity_conjugation_2 'does not need to' entity_event_conjugation_1
	| entity_conjugation_1 'do not want to' entity_event_conjugation_1
	| entity_conjugation_2 'does not want to' entity_event_conjugation_1
	| entity 'should not' entity_event_conjugation_1
    ;
entity_state: 'home'
	| 'in' determiner location
	| 'at the door'
	| 'present'
	| 'anywhere in' determiner location
	| 'not home'
	| 'not at home'
	| 'away from home'
	| 'away'
	| 'gone'
	| 'out of the house'
	| NUMBER 'minutes from returning home'
	| 'close to returning home'
	| 'coming home from work'
	| 'coming home'
	| 'about to enter'
	| 'entering' determiner location
	| 'nearby'
	| 'leaving'
	| 'leaving' determiner location
	| 'approaching' determiner location
	| 'leaving for work'
	| 'ready to go to work'
	| 'ready to leave'
	| 'awake'
	| 'about to go to sleep'
	| 'asleep'
	| 'asleep at night'
	| 'sleeping'
	| 'anxious'
	| 'feeling down'
	| 'being unhealthy'
	| 'hungry'
	| 'bored'
	| 'calm'
	| 'happy'
	| 'unhappy'
	| 'sad'
	| 'upset'
	| 'healthy'
	| 'unhealthy'
	| 'getting healthier'
	| 'sleep deprived'
	| 'in the mood for it'
	| 'hot'
	| 'cold'
	| 'going out to exercise'
	| 'cooling down'
	| 'approaching the car'
	| 'driving'
	| 'low on gas'
	| 'driving dangerously'
	| 'looking for it'
	| 'not'
	| 'done'
	| 'done with' meal_
	| 'finished' activity
	| 'available'
	| 'beginning to overuse' utility_
	| 'late for work'
	| 'in need of a cab'
	| 'due'
	| 'too far from home'
	| 'moving too fast'
	| 'on the couch'
	| 'ready to come inside'
	| 'outside'
	| 'ready to go out'
	| 'having a party'
	| 'having company over'
    ;

environment_fact: 'it is' environment_state
	| 'it is not' environment_state
    ;
environment_state: CLOCK_TIME
	| 'after' CLOCK_TIME
	| 'before' CLOCK_TIME
	| 'below' degrees_f 'degrees Fahrenheit'
	| 'below' degrees_c 'degrees Celsius'
	| 'cool enough'
	| 'warm enough'
	| 'too warm'
	| 'too cold'
	| 'too hot'
	| 'from work'
	| 'from' entity
	| 'hot'
	| 'cold'
	| 'raining'
	| 'bright out'
	| 'sunny out'
	| 'snowing'
	| 'winter'
	| 'summer'
	| 'on'
	| 'off'
	| 'daytime'
	| 'night out'
	| 'morning'
	| 'afternoon'
	| 'evening'
	| 'sunrise'
	| 'sunset'
	| 'dinner'
	| 'lunch'
	| 'breakfast'
    ;

update_fact: 'there are' determiner plural_updates
	| 'there are' determiner plural_updates 'from' entity
	| 'there are' determiner plural_updates 'from' online_service
	| 'there are' determiner plural_updates 'from work'
	| 'there is' determiner singular_update
	| 'there is anything'
	| 'there is' determiner singular_update 'from' entity
	| 'there is anything from' entity
	| 'there is' determiner singular_update 'from' online_service
	| 'there is anything from' online_service
	| 'there is' determiner singular_update 'from work'
	| 'there is anything from work'
	| 'there are no' plural_updates
	| 'there are no' plural_updates 'from' entity
	| 'there are no' plural_updates 'from' online_service
	| 'there are no' plural_updates 'from work'
	| 'there is no' singular_update
	| 'there is nothing'
	| 'there is no' singular_update 'from' entity
	| 'there is nothing from' entity
	| 'there is no' singular_update 'from' online_service
	| 'there is nothing from' online_service
	| 'there is no' singular_update 'from work'
	| 'there is nothing from work'
    ;
plural_updates: 'transportation alerts'
	| 'updates on the forecast'
	| 'weather alerts'
	| 'emails'
	| 'new emails'
	| 'email notifications'
	| 'messages'
	| 'new messages'
	| 'important messages'
	| 'message notifications'
	| 'text messages'
	| 'phone calls'
	| 'alerts'
	| 'notifications'
	| 'updates'
	| online_service 'messages'
	| 'new' online_service 'messages'
	| online_service 'alerts'
	| online_service 'updates'
	| 'social media alerts'
	| 'social media updates'
	| 'news alerts'
	| 'news updates'
	| 'new voicemails'
	| 'voicemails'
	| 'chat messages'
	| 'texts'
	| 'suggestions'
	| 'things'
    ;
singular_update: 'message'
	| 'new message'
	| 'text message'
	| 'new text message'
	| 'email'
	| 'new email'
	| 'mail'
	| 'new mail'
	| 'alert'
	| 'update'
	| 'phone call'
	| 'notification'
	| 'voicemail'
	| 'physical mail'
    ;
online_service: 'Facebook'
	| 'Twitter'
	| 'YouTube'
	| 'Reddit'
	| 'Pinterest'
	| 'Foursquare'
	| 'Instagram'
	| 'Evernote'
	| 'Dropbox'
	| 'Campfire'
	| 'Slack'
	| 'Google Drive'
	| 'Calendar'
	| 'Gmail'
	| 'Uber'
	| 'Lyft'
	| 'the public transit authority'
	| 'the news'
	| 'my RSS feeds'
	| 'my social networks'
	| 'my social network accounts'
	| 'my Facebook page'
	| 'my email'
    ;

object_fact: determiner objects relation_ object_state ;
objects: object
	| object 'and' additional_object
	| object 'or' additional_object
    ;
additional_object: objects ;
object: 'appliance'
	| 'appliances'
	| 'plumbing'
	| 'bus'
	| 'mail'
	| 'sun'
	| 'electricity'
	| 'energy'
	| 'water'
	| 'gas'
	| 'washer'
	| 'washing machine'
	| 'utilities'
	| 'dryer'
	| 'coffee'
	| 'coffee maker'
	| 'coffee pot'
	| 'lights'
	| 'light'
	| 'door'
	| 'doors'
	| 'windows'
	| 'window'
	| 'weather'
	| 'water heater'
	| 'heat'
	| 'heater'
	| 'air'
	| 'air conditioning'
	| 'air conditioner'
	| 'car'
	| 'objects'
	| location
	| 'motion sensors'
	| playlist_
	| 'TV'
	| 'game'
	| 'blinds'
	| 'alarm'
	| 'phone'
	| 'lighting'
	| 'oven'
	| 'breakfast'
	| 'lunch'
	| 'dinner'
	| 'system'
	| 'speakers'
	| 'power'
	| 'devices'
	| 'computer'
	| 'shower'
	| 'sensors'
	| 'traffic'
	| 'stereo'
	| 'radio'
	| 'outlets'
	| 'groceries'
	| 'ingredients'
	| 'food'
	| 'electronics'
	| 'bills'
	| 'costs'
	| 'workout'
	| 'watch'
	| 'refrigerator'
	| 'fan'
	| 'fans'
	| 'dishwasher'
	| 'TV remote'
	| 'remote control'
	| 'keys'
	| 'car keys'
	| 'purse'
	| 'pizza'
	| 'wine'
	| 'beer'
	| 'garage door'
	| 'doorbell'
	| 'storm'
	| 'something unusual'
	| 'something'
	| 'medication'
	| 'stove'
	| 'clock'
	| 'items'
	| 'smartphone'
	| 'clothes'
	| 'tracker'
	| 'things'
	| 'anything'
	| 'door lock'
	| 'door locks'
	| 'outlet'
	| 'thermostat'
	| 'glucose monitor'
	| 'EEG headset'
	| 'blood pressure monitor'
	| 'heart rate monitor'
	| music_
	| song_
	| album_
	| 'lock'
	| 'locks'
	| television_
	| 'temperature'
	| 'temperatures'
	| 'recipe'
	| 'workout routine'
	| 'media'
	| 'news'
	| 'local news'
	| 'world news'
	| online_service
	| 'results'
	| 'command'
	| 'appointment'
	| 'appointments'
	| 'channel'
	| 'security alarm'
	| 'it'
//	| <textbox('custom station')> radio station
	| 'home'
	| 'ways to reduce costs'
	| 'intrusion detection system'
	| 'security system'
	| 'security lockdown'
	| 'commute'
	| 'podcast'
	| 'laundry'
	| 'dry cleaning'
	| 'babysitter'
	| 'meeting'
	| 'Facebook status'
	| 'energy efficiency'
	| 'music library'
	| 'video library'
	| 'media library'
    ;
relation_: 'is'
	| 'is not'
	| 'are'
	| 'are not'
	| 'has'
	| 'does not have'
	| 'have'
	| 'do not have'
	| 'have been'
	| 'have not been'
	| 'was'
	| 'were'
	| 'was not'
	| 'were not'
	| 'is estimated to be'
	| 'is forecast to be'
	| 'are estimated to be'
	| 'are forecast to be'
	| 'seems to be'
	| 'can be'
	| 'need to be'
	| 'is set at'
	| 'is not estimated to be'
	| 'is not forecast to be'
	| 'are not estimated to be'
	| 'are not forecast to be'
	| 'does not seem to be'
	| 'cannot be'
	| 'does not need to be'
	| 'is not set at'
    ;

object_state: 'in use'
	| 'not in use'
	| 'broken'
	| 'on'
	| 'off'
	| NUMBER 'minutes away'
	| 'near'
	| 'arrived'
	| 'occupied'
	| 'unoccupied'
	| 'out'
	| 'not out'
	| 'warm'
	| 'cool'
	| 'cold'
	| 'hot'
	| 'done'
	| 'finished'
	| 'ready'
	| 'locked'
	| 'unlocked'
	| 'not locked'
	| 'opened'
	| 'closed'
	| 'open'
	| 'unusually high'
	| 'high'
	| 'running low'
	| 'too high'
	| 'too low'
	| 'below' degrees_c 'degrees Celsius'
	| 'below' degrees_f 'degrees Fahrenheit'
	| 'above' degrees_c 'degrees Celsius'
	| 'above' degrees_f 'degrees Fahrenheit'
	| 'nice'
	| 'good'
	| 'bad'
	| 'problems'
	| 'about to come on'
	| 'moved'
	| 'activated'
	| 'playing'
	| 'quiet'
	| 'loud'
	| 'paused'
	| 'running'
	| 'up'
	| 'down'
	| 'ringing'
	| 'bright'
	| 'dim'
	| color_
	| 'enabled'
	| 'disabled'
	| 'tailored to my needs'
	| 'tailored to my preferences'
	| 'available'
	| 'playing'
	| 'possible'
	| 'lost'
	| 'located'
	| 'arriving'
	| 'late'
	| 'here'
	| 'recorded'
	| 'prepared'
	| 'turned on'
	| 'turned down'
	| 'turned off'
	| 'paid'
	| 'is over'
	| 'needs maintenance'
	| 'secure'
	| 'drawing power'
	| 'not drawing power'
	| 'taken'
	| 'above-freezing temperatures'
	| 'clean'
	| 'dirty'
	| 'updated'
	| 'scheduled'
	| color_
	| power_
	| volume_
	| temperature_
	| 'my preferred settings'
	| 'a predefined setting'
	| 'secure'
	| 'secured'
	| 'energy efficient'
	| 'automated'
	| NUMBER
    ;

data_fact: determiner data_sources relation_ data_state ;
data_sources: data_
	| data_ 'and' additional_data
    ;
additional_data: data_sources ;
data_: 'energy consumption'
	| 'electricity usage'
	| 'water usage'
	| 'gas usage'
	| 'utility usage'
	| 'weight'
	| 'heart rate'
	| 'blood pressure'
	| 'blood sugar'
	| 'temperature'
	| 'humidity'
	| 'motion'
	| 'movement'
	| 'step count'
	| 'mood'
	| 'health'
	| 'habits'
	| 'fitness'
	| 'calories'
	| 'daily caloric intake'
	| 'quality of sleep'
	| 'sleep duration'
	| 'weather forecast'
	| 'weather status'
	| 'weather'
	| 'traffic conditions'
	| 'road conditions'
	| utility_ 'bill'
	| 'costs'
	| 'currently available ingredients'
	| 'mood'
	| 'top news on' online_service
	| 'trending content on' online_service
	| 'preferences'
	| 'schedule'
	| 'to-do list'
	| 'grocery list'
	| 'lists'
	| 'daily reminders'
	| 'suggestions'
	| 'muscle mass'
	| 'blood glucose'
	| 'brain waves'
	| 'activities'
	| 'number'
	| 'amount'
	| 'patterns'
	| 'things'
	| 'anything'
    ;
data_state: 'unusually high'
	| 'high'
	| 'low'
	| 'good'
	| 'bad'
	| 'too high'
	| 'too low'
	| 'decreasing'
	| 'increasing'
	| 'changing'
	| 'improving'
	| 'getting worse'
	| 'sunny'
	| 'cloudy'
	| 'rainy'
	| 'snowy'
	| 'cold'
	| 'warm'
	| 'hot'
	| 'cool'
	| 'new'
	| 'funny'
	| 'unusual'
	| 'busy'
	| 'free'
	| 'at its limit'
    ;
personal_organizers: 'calendar'
	| 'Google Calendar'
	| 'schedule'
	| 'to-do list'
	| 'grocery list'
	| 'lists'
	| 'daily reminders'
	| 'preferences'
    ;

// events_ - when, if, whenever, as, as soon as, --- must be followed by location - a room, the garage, the yard, the kitchen, the house the home, my home, for school, for work, school, work, at school, at work, at the door, the door, in, out, away, from outside, etc -- also time -- today, in the winter, at night

event_: entity_event
	| environment_event
	| update_event
	| object_event
	| data_event
    ;
entity_event: entity_conjugation_1 entity_event_conjugation_1
	| entity_conjugation_2 entity_event_conjugation_2
    ;
entity_conjugation_1: 'I'
	| 'people'
	| 'they'
	| determiner 'kids'
	| determiner 'children'
	| 'we'
	| 'my pets'
	| 'my sisters'
	| 'my brothers'
	| 'you'
	| determiner 'friends'
	| 'my parents'
	| 'my in-laws'
    ;
entity_event_conjugation_1: 'approach'
	| 'enter'
	| 'leave'
	| 'return'
	| 'get ready to leave'
	| 'left'
	| 'walk in'
	| 'walk into'
	| 'walk out of'
	| 'walk through'
	| 'move through'
	| 'come in'
	| 'get home'
	| 'will be home'
	| 'come home from being'
	| 'wake up'
	| 'go to sleep'
	| 'appear to be waking up'
	| 'begin feeling drowsy'
	| 'fall asleep'
	| 'get in bed'
	| 'awake'
	| 'awaken'
	| 'get into bed'
	| 'get up'
	| 'go to bed'
	| 'got to sleep'
	| 'sleep'
	| 'got enough sleep'
	| 'walk away'
	| 'arrive home'
	| 'come back home'
	| 'come home'
	| 'get home'
	| 'get off work'
	| 'ask you to'
	| 'command them to'
	| 'say so'
	| 'tell you to'
//	| 'send' entity 'a message saying that' <textbox('custom')>
//	| 'say' <textbox('custom')>
	| 'consume' determiner objects
	| 'eat'
	| 'eat' meal_
	| 'eat' NUMBER 'calories'
	| 'exercise'
	| 'forget'
	| 'get' determiner singular_update
	| 'get' determiner plural_updates
	| 'receive' determiner plural_updates
	| 'receive'  determiner singular_update
	| 'lose' determiner nouns
	| 'lost' determiner nouns
	| 'accidentally leave' determiner objects object_state
	| 'finish' activity
	| 'start' activity
	| 'finish' meal_
	| 'start' meal_
	| 'access the Internet'
	| 'put' entity 'out in the yard'
	| 'cut back on' data_sources 'by' NUMBER units_
	| 'cut back on' activity 'by' NUMBER units_
	| 'gain more than' NUMBER 'pounds of fat'
	| 'walk' NUMBER 'steps'
	| simple_actions
	| 'knock'
	| 'wander off'
	| 'do not respond'
	| 'fall and seem unable to stand'
	| 'cancel'
	| 'do something else'
	| 'go grocery shopping'
	| 'go to the store'
	| 'pick up food for' meal_
	| 'maintain my current weight'
	| 'listen to' determiner music_
	| 'watch' determiner television_
	| 'have' determiner objects
	| 'get gas'
	| 'do something healthy'
    ;

entity_conjugation_2: 'my husband'
	| 'my wife'
	| 'my boyfriend'
	| 'my girlfriend'
	| 'my sister'
	| 'my brother'
	| 'my mother'
	| 'my father'
	| 'someone'
	| 'someone else'
	| 'no one'
	| 'nobody'
	| determiner 'stranger'
	| 'an unidentified person'
	| 'anyone'
	| determiner 'dog'
	| determiner 'cat'
	| 'he'
	| 'she'
	| 'my pet'
	| 'anyone'
	| 'my family'
	| 'everyone'
//	| <textbox('custom name')>
    ;
entity_event_conjugation_2: 'approaches'
	| 'enters'
	| 'leaves'
	| 'returns'
	| 'gets ready to leave'
	| 'left'
	| 'walks in'
	| 'walks into'
	| 'walks out of'
	| 'walks through'
	| 'moves through'
	| 'comes in'
	| 'gets home'
	| 'will be home'
	| 'comes home from being'
	| 'wakes up'
	| 'goes to sleep'
	| 'appears to be waking up'
	| 'begins feeling drowsy'
	| 'falls asleep'
	| 'gets in bed'
	| 'awakens'
	| 'gets into bed'
	| 'gets up'
	| 'goes to bed'
	| 'went to sleep'
	| 'sleeps'
	| 'got enough sleep'
	| 'walks away'
	| 'arrives home'
	| 'comes back home'
	| 'comes home'
	| 'gets home'
	| 'gets off work'
	| 'asks you to'
	| 'commands them to'
	| 'says so'
	| 'tells you to'
//	| 'sends you a message saying that' <textbox('custom')>
//	| 'says' <textbox('custom')>
	| 'consumes' determiner objects
	| 'eats'
	| 'eats' meal_
	| 'eats' NUMBER 'calories'
	| 'exercises'
	| 'forgets'
	| 'gets' determiner singular_update
	| 'gets' determiner plural_updates
	| 'receives' determiner plural_updates
	| 'receives' determiner singular_update
	| 'loses' determiner nouns
	| 'lost' determiner nouns
	| 'accidentally leaves' determiner objects object_state
	| 'finishes' activity
	| 'starts' activity
	| 'finishes' meal_
	| 'starts' meal_
	| 'accesses the Internet'
	| 'puts' entity 'out in the yard'
	| 'cuts back on' data_sources 'by' NUMBER units_
	| 'cuts back on' activity 'by' NUMBER units_
	| 'gains more than' NUMBER 'pounds of fat'
	| 'walks' NUMBER 'steps'
	| 'locks' determiner nouns
	| 'opens' determiner nouns
	| 'closes' determiner nouns
	| 'turns on' determiner nouns
	| 'turns off' determiner nouns
	| 'knocks'
	| 'wanders off'
	| 'does not respond'
	| 'touches my car'
	| 'falls and is unable to stand'
	| 'cancels'
	| 'does something else'
	| 'goes grocery shopping'
	| 'goes to the store'
	| 'picks up food for' meal_
	| 'maintains their current weight'
	| 'listens to' determiner music_
	| 'watches' determiner television_
	| 'has' determiner objects
	| 'gets gas'
	| 'does something healthy'
    ;

environment_event: 'it' environment_change ;
environment_change: 'gets dark'
	| 'starts to get dark'
	| 'reaches that temperature'
	| 'is happening'
	| 'gets below' degrees_c 'degrees Celsius'
	| 'gets below' degrees_f 'degrees Fahrenheit'
	| 'drops below' degrees_c 'degrees Celsius'
	| 'drops below' degrees_f 'degrees Fahrenheit'
	| 'falls below' degrees_f 'degrees Fahrenheit'
	| 'falls below' degrees_c 'degrees Celsius'
	| 'goes above' degrees_f 'degrees Fahrenheit'
	| 'goes above' degrees_c 'degrees Celsius'
	| 'gets too cold'
	| 'gets too hot'
    ;

update_event: 'I have' UPDATES
	| 'they have' UPDATES
	| determiner 'kids have' UPDATES
	| 'we have' UPDATES
	| 'my boyfriend has' UPDATES
	| 'my husband has' UPDATES
	| 'my sister has' UPDATES
	| 'somebody has' UPDATES
    ;
UPDATES: singular_update
	| plural_updates
	| NUMBER 'minutes until the bus arrives'
    ;

object_event: determiner objects object_BEHAVIOR
	| determiner singular_update object_BEHAVIOR 
    ;
object_BEHAVIOR: 'goes off'
	| 'go off'
	| 'comes'
	| 'opens'
	| 'closes'
	| 'open'
	| 'close'
	| 'shut'
	| 'are opened'
	| 'are closed'
	| 'are shut'
	| 'is over'
	| 'finish'
	| 'finishes'
	| 'end'
	| 'ends'
	| 'start'
	| 'starts'
	| 'ring'
	| 'rings'
	| environment_event
	| 'turn on'
	| 'turn off'
	| 'turns on'
	| 'turns off'
	| 'comes in'
	| 'comes on'
	| 'pops up'
	| 'comes through'
	| 'is moved'
	| 'is broken into'
	| 'happen'
	| 'happens'
	| 'change'
	| 'changes'
	| 'stays' object_state
    ;

data_event: determiner data_sources data_behavior ;
data_behavior: 'rises above' percent_
	| 'goes over' NUMBER units_
	| 'gets high'
	| 'gets low'
	| 'gets unusually high'
	| 'gets unusually low'
	| 'looks good'
	| 'looks bad'
	| 'gets too high'
	| 'gets too low'
	| 'decreases'
	| 'increases'
	| 'changes'
	| 'improves'
	| 'gets worse'
	| 'varies an unusual amount'
	| 'reaches its limit'
	| 'rise above' percent_
	| 'go over' NUMBER units_
	| 'get high'
	| 'get low'
	| 'get unusually high'
	| 'get unusually low'
	| 'look good'
	| 'look bad'
	| 'get too high'
	| 'get too low'
	| 'decrease'
	| 'increase'
	| 'change'
	| 'improve'
	| 'gets worse'
	| 'vary an unusual amount'
	| 'reach their limit'
    ;


// QUESTIONS
question_phrase: QUESTION
	| QUESTION dependent_clauses
    ;
QUESTION: question_about_entity
	| question_about_object
	| question_about_update
	| question_about_environment
	| question_about_data
	| how_question
	| what_question
	| when_question
	| where_question
	| who_question
    ;
question_about_entity: 'are' entity entity_state
	| 'is' entity entity_state
	| 'am I' entity_state
    ;
question_about_environment: 'is it' environment_state ;
question_about_update: 'are there' determiner plural_updates
	| 'are there' determiner plural_updates 'from' entity
	| 'are there' determiner plural_updates 'from work'
	| 'are there' determiner plural_updates 'from' online_service
	| 'is there' determiner singular_update
	| 'is there' determiner singular_update 'from' entity
	| 'is there' determiner singular_update 'from work'
	| 'is there' determiner singular_update 'from' online_service
    ;
question_about_object: 'are' determiner objects object_state
	| 'is' determiner objects object_state
	| 'have' determiner objects 'been' object_state
	| 'has' determiner objects 'been' object_state
	| 'was' determiner objects object_state
	| 'were' determiner objects object_state
	| 'are' determiner objects 'forecast to be' object_state
	| 'is' determiner objects 'forecast to be' object_state
    ;
question_about_data: 'is' determiner data_sources data_state
	| 'are' determiner data_sources data_state 
    ;
how_question: 'how anxious am I'
	| 'how dirty is the house'
	| 'how hot is it'
	| 'how am' how_am
	| 'how high' how_high
	| 'how is' how_is
	| 'how did' how_did
	| 'how well' how_well
	| 'how are' how_are
	| 'how can' entity how_can_entity
	| 'how long' how_long
	| 'how many' how_many
	| 'how much' how_much
	| 'how far' how_far
	| 'how fast' how_fast
    ;
how_am: entity 'feeling'
	| entity 'doing'
	| entity
    ;
how_high: 'is' determiner 'blood sugar'
	| 'is' determiner 'blood pressure'
	| 'is' determiner 'heart rate'
    ;
how_is: 'the traffic'
	| 'the weather'
	| 'my blood sugar'
	| 'my exercise program going'
	| 'my heart rate'
	| 'my blood pressure'
	| 'my progress towards my weight goal'
	| 'the stock market'
	| entity
    ;
how_did: 'I sleep last night' ;
how_well: 'have I been working out'
	| 'have I been sleeping'
	| 'did I sleep last night'
    ;
how_are: 'my vitals'
	| 'you'
	| entity
    ;
how_can_entity: 'reduce' determiner 'utility bills'
	| 'conserve energy'
	| 'conserve water'
	| 'conserve gas'
	| 'conserve electricity'
	| 'conserve resources'
	| 'reduce' determiner 'utility usage'
	| 'be healthier'
	| 'cook a particular meal'
	| 'improve' determiner 'sleeping habits'
	| 'reduce' determiner 'costs'
	| 'save money on utilities'
    ;
how_long: 'have my washer and dryer been running'
	| 'long will the commute be'
    ;
how_many: 'calories have I burned'
	| 'calories do I need to eat' //<today> <after my exercise routine>
	| 'minutes do I need to exercise' GOAL_DEPENDENCY//<on my elliptical> <in order to eat three pieces of pepp pizza>
	| 'steps have I taken'
	| 'steps do I need to take' GOAL_DEPENDENCY //<if I eat 1500 calories> <and want to maintain my current weight>
    ;
how_much: 'do I weigh'
	| 'am I exercising right now'
	| 'energy' relation_ determiner objects 'consuming'
	| 'exercise did' entity 'do'
	| 'exercise have I done'
	| 'exercise has' entity 'done'
	| 'should' entity 'exercise'
	| 'have I exercised historically'
	| 'sleep did' entity 'get'
	| 'sleep do I get'
	| 'traffic is there'
	| 'does electricity cost'
	| 'does gas cost'
	| 'does water cost'
	| 'money can I save if I' direct_action
	| 'money would I save if I' event_
	| 'money is in my bank account'
	| 'will my bills be' TIME	| 'am I using of each utility'
	| 'will my electricity cost' TIME
	| 'does each utility cost'
	| 'energy do' determiner objects 'consume'
	| 'energy does' determiner objects 'consume'
	| 'electricity' relation_ determiner objects 'consuming'
	| 'electricity have appliances used'
	| 'electricity am I using'
	| 'electricity do' entity 'consume'
	| 'electricity does' entity 'consume'
	| 'electricity have' entity 'used'
	| 'electricity has' entity 'used'
	| 'am I spending'
	| 'could I save by reducing water consumption'
	| 'could I save by reducing electricity consumption'
	| 'could I save by reducing gas consumption'
	| 'water do' entity 'use'
	| 'am I paying for electricity'
	| 'am I paying for water'
	| 'am I paying for gas'
	| 'am I paying for utilities'
    ;
how_far: 'did' entity 'travel' ;
how_fast: 'is' determiner 'heart beating'
	| 'is' determiner 'car going'
    ;
what_question: 'what' objects relation_ object_state
	| 'what is' determiner data_sources
	| 'what are' determiner data_sources
	| 'what color are the lights'
	| 'what color is the light'
	| 'what is new on' online_service
	| 'what is new on TV'
    ;
when_question: 'when do' entity 'need to' entity_event
	| 'when does' entity 'need to' entity_event
	| 'when is' entity entity_state
	| 'when are' entity entity_state
	| 'when will' entity entity_event
	| 'when will' entity 'be' entity_state
	| 'when did' entity event_
	| 'when was' entity entity_fact
	| 'when were' entity entity_fact
	| 'when do' determiner objects 'need to' object_event
	| 'when does' determiner objects 'need to' object_event
	| 'when is' determiner objects object_state
	| 'when are' determiner objects object_state
	| 'when will' determiner objects object_event
	| 'when will' determiner objects 'be' object_state
	| 'when did' determiner objects object_event
	| 'when was' determiner objects object_fact
	| 'when were' determiner objects object_fact
    ;
where_question: 'where are' entity
	| 'where is' entity
	| 'where was' entity
	| 'where were' entity
	| 'where is' determiner objects
    ;
who_question: 'who is' entity_state
	| 'who are my new messages from'
	| 'who has a birthday'
    ;


// INDIRECT QUESTIONS
indirect_references: indirect_reference_phrase
	| indirect_reference_phrase 'and' additional_indirect_question
    ;
additional_indirect_question: indirect_references ;
indirect_reference_phrase: indirect_reference
	| indirect_reference dependent_clauses
    ;
indirect_reference: 'what' options_for_what
	| 'what' determiner options_for_what_determiner
	| 'what the' options_for_what_the
	| 'what I' options_for_what_I
	| 'what is' options_for_what_is
	| 'how' options_for_how
	| 'how I'
	| 'how long' options_for_how_long
	| 'how many' OPTIONS_FOR_how_many
	| 'how much' options_for_how_much
	| 'how much electricity' options_for_how_much_electricity 
	| 'how much I' options_for_how_much_I
	| 'how to' options_for_how_to 
	| 'when' when_reference
	| 'where' where_reference
	| 'who' who_reference
	| 'whether' whether_reference
    ;
options_for_what: object relation_ object_state ;
options_for_what_determiner: data_sources 'is'
	| data_sources 'is for' entity
	| 'exercise program is'
	| 'mood is'
	| entity 'does during the day'
	| entity 'do during the day'
	| entity 'is doing'
	| entity 'are doing'
    ;
options_for_what_the: 'forecast is'
	| 'humidity is'
	| 'perfect temperature is for my body temperature'
	| 'temperature is'
	| 'weather is'
	| 'weather is going to be like'
	| 'weather will be like'
    ;
options_for_what_I: 'weigh'
	| 'am doing'
	| 'can cook'
	| 'eat'
	| 'have on my schedule'
	| 'have used up in the pantry'
	| 'like'
	| 'might need to get at the store'
	| 'say I am going to do'
	| 'want'
	| 'watch on TV'
    ;
options_for_what_is: 'causing illness'
	| 'in my refrigerator for me to eat'
	| 'in the refrigerator'
	| 'new on' online_service
	| 'out of stock'
    ;
options_for_how: 'anxious I am feeling right now'
	| 'cold and hot it is'
	| 'dirty the house is'
	| 'fast it is going'
	| 'he is doing'
	| 'high my my blood sugar is'
	| 'my heart rate is'
	| 'hot it is in the room'
	| 'the traffic is'
	| 'the weather will be today'
	| 'well I have been working out the last week'
	| 'well I sleep'
    ;
options_for_how_I: 'am feeling'
	| 'can reduce my utility bills'
	| 'feel'
	| 'slept last night'
	| 'long I have left on my washer and dryer'
    ;
options_for_how_long: 'the commute will be' ;
OPTIONS_FOR_how_many: 'calories I\'ve burned'
	| 'calories I need to eat today after my exercise routine'
	| 'minutes I need to exercise on my elliptical to eat three pieces of pepperoni pizza'
	| 'steps I\'ve taken'
	| 'steps I\'ve walked in a day'
	| 'steps I\'ve taken through my day'
	| 'steps I must take today if I eat 1500 calories and want to maintain my current weight'
    ;
options_for_how_much: 'am I exercising right now'
	| 'are they currently consuming'
	| 'energy'
	| 'exercise I did this week'
	| 'exercise I have done total'
	| 'gas it is consuming'
	| 'it costs'
	| 'money I can save'
	| 'money is in my bank account'
	| 'my total bills will be this month'
	| 'of each utility I am using at any given time'
	| 'the cost of my electricity will be so far this month'
	| 'water and electricity I am using'
	| 'water and gas that I am using'
    ;
options_for_how_much_electricity: 'gas and water is being consumed currently/is currently in use'
	| 'water and gas cost'
	| 'all the appliances consume'
	| 'they are currently using'
	| 'appliances have used'
	| 'I am using'
	| 'I am using in my home'
	| 'I consume'
	| 'I have used this month'
	| 'I used'
	| 'is being used'
    ;
options_for_how_much_I: 'weigh'
	| 'am spending every month'
	| 'could save at slightly reduced levels'
	| 'currently weigh'
	| 'have exercised historically'
	| 'sleep'
	| 'slept'
	| 'will be spending at current levels of electricity/heating/etc'
    ;
options_for_how_to: 'be healthier'
	| 'clean'
	| 'cook a certain recipe'
	| 'improve my sleeping habits'
	| 'make a particular meal'
	| 'reduce cost'
	| 'save money on utility_ usage in my home'
    ;
when_reference: statements ;
where_reference: entity_conjugation_2 'is'
	| 'I am'
	| entity_conjugation_1 'are' 
	| 'it is'
	| determiner objects 'are'
	| determiner objects 'is'
    ;
who_reference: 'is' entity_state
	| 'was' entity_state
    ;
whether_reference: statements ;

//// DEPENDENCY CLAUSES

// while_ - facts
while_: 'while' facts ;

// BEFORE if I am not home before dark
BEFORE: 'before' events_
	| 'before' TIME
	| NUMBER TIME_UNIT 'before' events_
	| NUMBER TIME_UNIT 'before' TIME
    ;

// AFTER
AFTER: 'after' events_
	| 'after' TIME
	| NUMBER TIME_UNIT 'after' events_
	| NUMBER TIME_UNIT 'after' TIME
    ;

// UNTIL - applies to action sets?
UNTIL: 'until' statements
	| 'until' TIME
    ;

// UNLESS - applies to action sets?
UNLESS: 'unless' statements ;

// GOAL DEPENDENCY
GOAL_DEPENDENCY: 'in order to lose weight'
	| 'in order to save money'
	| 'in order to catch the bus'
	| 'in order to' //<textbox('custom goal')>
	| 'so that' //<textbox('custom reason')>
	| 'for me to review'
    ;

// DESCRIPTION DEPENDENCY (for nouns only)
DESCRIPTION: 'that' relation_ object_state
	| 'that I am in'
	| 'that' entity ENTITY_CRITERIA
    ;
ENTITY_CRITERIA: 'have left' object_state
	| 'has left' object_state
	| 'like'
	| 'likes'
	| 'enjoy'
	| 'enjoys'
	| 'suggest'
	| 'suggests'
	| 'specify'
	| 'specifies'
	| 'might like'
	| 'would use'
	| 'have lost'
	| 'have forgotten'
	| 'has lost'
	| 'has forgotten'
	| 'need'
	| 'needs'
    ;

// location DEPENDENCY
location_dependency: LOCATION_PHRASE
	| LOCATION_PHRASE LOGICAL_OP location_dependency
    ;
LOCATION_PHRASE: 'in' location
	| 'in' location 'that' entity 'in'
	| 'in' location 'that is' LOCATION_ATTRIBUTE
	| 'in' location 'that are' LOCATION_ATTRIBUTE
	| 'in' determiner LOCATION_ATTRIBUTE space_
	| 'to'
	| 'for'
	| 'in'
	| 'out'
	| 'at' location
	| 'from' location
	| 'for' location
    ;
LOCATION_ATTRIBUTE: 'occupied'
	| 'unoccupied'
	| 'hot'
	| 'cold'
	| 'warm'
	| 'bright'
	| 'dark'
	| 'quiet'
	| 'loud'
	| 'nearby'
    ;

// TIME DEPENDENCY
TIME_DEPENDENCY: TIME
	| TIME 'and' TIME
    ;
TIME: 'tonight'
	| 'today'
	| 'tomorrow'
	| 'this' TIME_UNIT
	| 'at night'
	| 'during the' TIME_UNIT
	| 'at that time'
	| 'at' CLOCK_TIME
	| 'next' TIME_UNIT
	| 'daily'
	| 'nightly'
	| 'weekly'
	| 'monthly'
	| 'yearly'
	| 'for today'
	| 'for tomorrow'
	| 'for' determiner TIME_UNIT
	| 'for' CLOCK_TIME
	| 'right now'
	| 'every' TIME_UNIT
	| 'each' TIME_UNIT
	| 'last' TIME_UNIT
	| 'sunrise'
	| 'sunset'
	| 'in' NUMBER TIME_UNIT
	| 'dinnertime'
	| 'lunchtime'
	| 'breakfast'
	| 'dark'
	| 'at certain times'
	| 'dusk'
	| 'currently'
	| 'in' SEASON
    ;
TIME_UNIT: 'morning'
	| 'afternoon'
	| 'evening'
	| 'week'
	| 'month'
	| 'year'
	| 'day'
	| 'night'
	| 'second'
	| 'minute'
	| 'hour'
	| 'seconds'
	| 'minutes'
	| 'hours'
	| 'days'
	| 'weeks'
	| 'months'
	| 'years'
	| SEASON
    ;
SEASON: 'winter'
	| 'spring'
	| 'summer'
	| 'fall'
    ;

// source_ DEPENDENCY
BASED_ON: 'based on' source_ ;
source_: indirect_reference
	| determiner data_sources
	| determiner data_sources LOGICAL_OP additional_source
	| indirect_reference LOGICAL_OP additional_source
    ;
additional_source: source_ ;