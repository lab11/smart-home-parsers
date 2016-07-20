grammar SmartHomeV1;

NEWLINE:    [\r\n]+ ;
fragment INTEGER:    ('-'|'+')?('0'..'9')+ ;
fragment FLOAT:      ('-'|'+')?(('0'..'9')*'.'('0'..'9')+) ;
NUMBER:     INTEGER | FLOAT ;
CLOCK_TIME:       ('0'..'2')?('0'..'9')(':'('0'..'5')('0'..'9'))?('a.m.'|'p.m.'|'am'|'pm')? ; //24 hour clock, covers some invalid times too
STRING:   (~[\r\n])+ ; 


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
    | command unless
	| command_with_conditions unless
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
	| 'remind me to' entity_EVENT_CONJUGATION_1
	| 'verify that' statements
	| 'make sure that' statements
	| 'keep' identifier objectS object_state
	| 'keep' entity entity_STATE
	| 'monitor' identifier objectS
	| 'monitor' knowable_things
	| 'notify me' condition
	| simple_actions
	| 'check' ONLINE_SERVICE
	| 'check' identifier ONLINE_SERVICE
	| 'check' identifier DATA_SOURCES
	| 'check' identifier PLURAL_UPDATES
	| 'check on' entity
	| 'check on' identifier objectS
	| 'check' identifier objectS
	| 'keep track of when' EVENTS
	| 'keep track of when' factS
//	| 'tell' entity 'that' <textbox('custom message')>
//	| 'inform' entity 'that' <textbox('custom message')>
	| 'ensure that' statements
	| 'give me' DATA_SOURCES
	| 'have' identifier noun simple_actions
	| 'have' identifier noun state_phrase
	| 'help me' simple_actions
	| 'inform me of' identifier PLURAL_UPDATES
	| 'inform me of' identifier DATA_SOURCES
	| 'offer to' simple_actions
	| 'wake' entity 'up'
	| 'cut back on' DATA_SOURCES 'by' NUMBER UNITS
	| 'greet' entity
	| 'decide whether to' simple_actions
    ;
simple_action: verb identifier noun
	| verb identifier noun state_phrase
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
knowable_thing: identifier DATA_SOURCES
	| INDIRECT_REFERENCES
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
identifier: 'the'
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
noun: objectS
	| objectS DESCRIPTION
    ;
MUSIC: 'music'
//	| 'music by' <textbox('artist')>
//	| <textbox('genre')> 'music'
	| 'background music'
    ;
SONG: 'song'
//	| 'song by' <textbox('artist')>
//	| 'song' <textbox('song title')>
//	| 'song' <textbox('song title')> 'by' <textbox('artist')>
    ;
ALBUM: 'album' ; //<textbox('album')>
//	| 'album' <textbox('album')> 'by' <textbox('artist')>
//	| 'album by' <textbox('artist')>
//    ;
PLAYLIST: 'playlist' ; //<textbox('playlist name')>
//	| <textbox('description or name')> 'playlist'
//    ;
TELEVISION: 'television'
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
location: identifier SPACE
	| 'inside'
	| 'outside'
	| 'school'
	| 'work'
    ;
SPACE: 'room'
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
	| 'cooking' MEAL
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
	| 'preparing' MEAL
	| identifier 'morning routine'
    ;
entity: 'I'
	| 'people'
	| 'they'
	| identifier 'kids'
	| identifier 'children'
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
	| identifier 'stranger'
	| 'an unidentified person'
	| 'anyone'
	| identifier 'dog'
	| identifier 'cat'
	| 'them'
	| 'he'
	| 'she'
	| 'him'
	| 'her'
	| 'us'
	| 'me'
	| identifier 'friends'
	| identifier 'fish'
	| 'my family'
//	| <textbox('custom name')>
	| 'my parents'
	| 'my in-laws'
	| 'everyone'
    ;
UTILITY: 'energy'
	| 'electricity'
	| 'power'
	| 'water'
	| 'gas'
	| 'utility'
    ;
MEAL: 'breakfast'
	| 'lunch'
	| 'dinner'
    ;

// ATTRIBUTES
STATES: state_phrase
	| state_phrase 'and' ADDITIONAL_STATE
    ;
ADDITIONAL_STATE: STATES ;
state_phrase: 'to' object_state
	| 'at' object_state
	| 'of' DATA_SOURCES
//	| 'that says' <textbox('custom message')>
//	| 'to' entity 'that says' <textbox('custom message')>
//	| 'to say' <textbox('custom message')>
	| object_state
	| 'to' entity
	| 'to my' PERSONAL_ORGANIZERS
    ;
COLOR: BASE_COLOR
	| 'warm' BASE_COLOR
	| 'cool' BASE_COLOR
	| 'bright' BASE_COLOR
	| 'light' BASE_COLOR
	| 'hot' BASE_COLOR
	| 'dark' BASE_COLOR
	| 'cold' BASE_COLOR
//	| <textbox('custom color')>
    ;
BASE_COLOR: 'red'
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
POWER: STEP 'power'
	| STEP 'brightness'
	| PERCENT 'power'
	| PERCENT 'brightness'
	| 'dim'
	| 'bright'
    ;
STEP: 'low'
	| 'mid'
	| 'high'
	| 'full'
	| 'half'
	| 'medium'
    ;
PERCENT: NUMBER '%' ;
VOLUME: STEP 'volume'
	| PERCENT 'volume'
    ;
TEMPERATURE: 'warm'
	| 'cool'
	| 'hot'
	| 'cold'
	| DEGREES_F 'degrees Fahrenheit'
	| DEGREES_C 'degrees Celsius'
	| 'optimal temperatures'
    ;
DEGREES_F: NUMBER ;
DEGREES_C: NUMBER ;
UNITS: 'dollars'
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

// conditionS
 command_with_conditions:  command condition
	| condition  command
	| 
    ;
condition: 'if' statements
	| 'when' statements
	| dependent_clauses
    ;
dependent_clause: WHILE
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
	| EVENT
	| fact dependent_clauses
	| EVENT dependent_clauses	
    ;
factS: fact
	| fact 'and' ADDITIONAL_fact
	| fact 'or' ADDITIONAL_fact
    ;
ADDITIONAL_fact: factS ;
EVENTS: EVENT
	| EVENT 'and' ADDITIONAL_EVENT
    ;
ADDITIONAL_EVENT: EVENTS ;

// factS 
// Make sure that, check to see if, tell me if, let me know if, if, when...// see “that the” phrases on SBAR list - when, if, whenever
fact: entity_fact
	| ENVIRONMENT_fact
	| update_fact
	| object_fact
	| DATA_fact
    ;
entity_fact: 'I am' entity_STATE
	| 'we are' entity_STATE
	| 'you are' entity_STATE
	| 'someone is' entity_STATE
	| 'someone else is' entity_STATE
	| 'no one is' entity_STATE
	| 'nobody is' entity_STATE
	| 'they are' entity_STATE
	| identifier 'pets are' entity_STATE
	| 'a stranger is' entity_STATE
	| 'an unidentified person is' entity_STATE
	| 'anyone is' entity_STATE
	| 'the dog is' entity_STATE
	| 'the cat is' entity_STATE
	| 'she is' entity_STATE
	| 'he is' entity_STATE
	| 'everyone is' entity_STATE
	| entity_CONJUGATION_1 'need to' entity_EVENT_CONJUGATION_1
	| entity_CONJUGATION_2 'needs to' entity_EVENT_CONJUGATION_1
	| entity_CONJUGATION_1 'want to' entity_EVENT_CONJUGATION_1
	| entity_CONJUGATION_2 'wants to' entity_EVENT_CONJUGATION_1
	| entity 'should' entity_EVENT_CONJUGATION_1
	| 'I am not' entity_STATE
	| 'we are not' entity_STATE
	| 'you are not' entity_STATE
	| 'someone is not' entity_STATE
	| 'someone else is not' entity_STATE
	| 'they are not' entity_STATE
	| identifier 'pets are not' entity_STATE
	| 'a stranger is not' entity_STATE
	| 'an unidentified person is not' entity_STATE
	| 'anyone is not' entity_STATE
	| 'the dog is not' entity_STATE
	| 'the cat is not' entity_STATE
	| 'she is not' entity_STATE
	| 'he is not' entity_STATE
	| 'everyone is not' entity_STATE
	| entity_CONJUGATION_1 'do not need to' entity_EVENT_CONJUGATION_1
	| entity_CONJUGATION_2 'does not need to' entity_EVENT_CONJUGATION_1
	| entity_CONJUGATION_1 'do not want to' entity_EVENT_CONJUGATION_1
	| entity_CONJUGATION_2 'does not want to' entity_EVENT_CONJUGATION_1
	| entity 'should not' entity_EVENT_CONJUGATION_1
    ;
entity_STATE: 'home'
	| 'in' identifier location
	| 'at the door'
	| 'present'
	| 'anywhere in' identifier location
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
	| 'entering' identifier location
	| 'nearby'
	| 'leaving'
	| 'leaving' identifier location
	| 'approaching' identifier location
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
	| 'done with' MEAL
	| 'finished' activity
	| 'available'
	| 'beginning to overuse' UTILITY
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

ENVIRONMENT_fact: 'it is' ENVIRONMENT_STATE
	| 'it is not' ENVIRONMENT_STATE
    ;
ENVIRONMENT_STATE: CLOCK_TIME
	| 'after' CLOCK_TIME
	| 'before' CLOCK_TIME
	| 'below' DEGREES_F 'degrees Fahrenheit'
	| 'below' DEGREES_C 'degrees Celsius'
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

update_fact: 'there are' identifier PLURAL_UPDATES
	| 'there are' identifier PLURAL_UPDATES 'from' entity
	| 'there are' identifier PLURAL_UPDATES 'from' ONLINE_SERVICE
	| 'there are' identifier PLURAL_UPDATES 'from work'
	| 'there is' identifier SINGULAR_UPDATE
	| 'there is anything'
	| 'there is' identifier SINGULAR_UPDATE 'from' entity
	| 'there is anything from' entity
	| 'there is' identifier SINGULAR_UPDATE 'from' ONLINE_SERVICE
	| 'there is anything from' ONLINE_SERVICE
	| 'there is' identifier SINGULAR_UPDATE 'from work'
	| 'there is anything from work'
	| 'there are no' PLURAL_UPDATES
	| 'there are no' PLURAL_UPDATES 'from' entity
	| 'there are no' PLURAL_UPDATES 'from' ONLINE_SERVICE
	| 'there are no' PLURAL_UPDATES 'from work'
	| 'there is no' SINGULAR_UPDATE
	| 'there is nothing'
	| 'there is no' SINGULAR_UPDATE 'from' entity
	| 'there is nothing from' entity
	| 'there is no' SINGULAR_UPDATE 'from' ONLINE_SERVICE
	| 'there is nothing from' ONLINE_SERVICE
	| 'there is no' SINGULAR_UPDATE 'from work'
	| 'there is nothing from work'
    ;
PLURAL_UPDATES: 'transportation alerts'
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
	| ONLINE_SERVICE 'messages'
	| 'new' ONLINE_SERVICE 'messages'
	| ONLINE_SERVICE 'alerts'
	| ONLINE_SERVICE 'updates'
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
SINGULAR_UPDATE: 'message'
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
ONLINE_SERVICE: 'Facebook'
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

object_fact: identifier objectS RELATION object_state ;
objectS: object
	| object 'and' ADDITIONAL_object
	| object 'or' ADDITIONAL_object
    ;
ADDITIONAL_object: objectS ;
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
	| PLAYLIST
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
	| MUSIC
	| SONG
	| ALBUM
	| 'lock'
	| 'locks'
	| TELEVISION
	| 'temperature'
	| 'temperatures'
	| 'recipe'
	| 'workout routine'
	| 'media'
	| 'news'
	| 'local news'
	| 'world news'
	| ONLINE_SERVICE
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
RELATION: 'is'
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
	| 'below' DEGREES_C 'degrees Celsius'
	| 'below' DEGREES_F 'degrees Fahrenheit'
	| 'above' DEGREES_C 'degrees Celsius'
	| 'above' DEGREES_F 'degrees Fahrenheit'
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
	| COLOR
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
	| COLOR
	| POWER
	| VOLUME
	| TEMPERATURE
	| 'my preferred settings'
	| 'a predefined setting'
	| 'secure'
	| 'secured'
	| 'energy efficient'
	| 'automated'
	| NUMBER
    ;

DATA_fact: identifier DATA_SOURCES RELATION DATA_STATE ;
DATA_SOURCES: DATA
	| DATA 'and' ADDITIONAL_DATA
    ;
ADDITIONAL_DATA: DATA_SOURCES ;
DATA: 'energy consumption'
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
	| UTILITY 'bill'
	| 'costs'
	| 'currently available ingredients'
	| 'mood'
	| 'top news on' ONLINE_SERVICE
	| 'trending content on' ONLINE_SERVICE
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
DATA_STATE: 'unusually high'
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
PERSONAL_ORGANIZERS: 'calendar'
	| 'Google Calendar'
	| 'schedule'
	| 'to-do list'
	| 'grocery list'
	| 'lists'
	| 'daily reminders'
	| 'preferences'
    ;

// EVENTS - when, if, whenever, as, as soon as, --- must be followed by location - a room, the garage, the yard, the kitchen, the house the home, my home, for school, for work, school, work, at school, at work, at the door, the door, in, out, away, from outside, etc -- also time -- today, in the winter, at night

EVENT: entity_EVENT
	| ENVIRONMENT_EVENT
	| UPDATE_EVENT
	| object_EVENT
	| DATA_EVENT
    ;
entity_EVENT: entity_CONJUGATION_1 entity_EVENT_CONJUGATION_1
	| entity_CONJUGATION_2 entity_EVENT_CONJUGATION_2
    ;
entity_CONJUGATION_1: 'I'
	| 'people'
	| 'they'
	| identifier 'kids'
	| identifier 'children'
	| 'we'
	| 'my pets'
	| 'my sisters'
	| 'my brothers'
	| 'you'
	| identifier 'friends'
	| 'my parents'
	| 'my in-laws'
    ;
entity_EVENT_CONJUGATION_1: 'approach'
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
	| 'consume' identifier objectS
	| 'eat'
	| 'eat' MEAL
	| 'eat' NUMBER 'calories'
	| 'exercise'
	| 'forget'
	| 'get' identifier SINGULAR_UPDATE
	| 'get' identifier PLURAL_UPDATES
	| 'receive' identifier PLURAL_UPDATES
	| 'receive'  identifier SINGULAR_UPDATE
	| 'lose' identifier nouns
	| 'lost' identifier nouns
	| 'accidentally leave' identifier objectS object_state
	| 'finish' activity
	| 'start' activity
	| 'finish' MEAL
	| 'start' MEAL
	| 'access the Internet'
	| 'put' entity 'out in the yard'
	| 'cut back on' DATA_SOURCES 'by' NUMBER UNITS
	| 'cut back on' activity 'by' NUMBER UNITS
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
	| 'pick up food for' MEAL
	| 'maintain my current weight'
	| 'listen to' identifier MUSIC
	| 'watch' identifier TELEVISION
	| 'have' identifier objectS
	| 'get gas'
	| 'do something healthy'
    ;

entity_CONJUGATION_2: 'my husband'
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
	| identifier 'stranger'
	| 'an unidentified person'
	| 'anyone'
	| identifier 'dog'
	| identifier 'cat'
	| 'he'
	| 'she'
	| 'my pet'
	| 'anyone'
	| 'my family'
	| 'everyone'
//	| <textbox('custom name')>
    ;
entity_EVENT_CONJUGATION_2: 'approaches'
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
	| 'consumes' identifier objectS
	| 'eats'
	| 'eats' MEAL
	| 'eats' NUMBER 'calories'
	| 'exercises'
	| 'forgets'
	| 'gets' identifier SINGULAR_UPDATE
	| 'gets' identifier PLURAL_UPDATES
	| 'receives' identifier PLURAL_UPDATES
	| 'receives' identifier SINGULAR_UPDATE
	| 'loses' identifier nouns
	| 'lost' identifier nouns
	| 'accidentally leaves' identifier objectS object_state
	| 'finishes' activity
	| 'starts' activity
	| 'finishes' MEAL
	| 'starts' MEAL
	| 'accesses the Internet'
	| 'puts' entity 'out in the yard'
	| 'cuts back on' DATA_SOURCES 'by' NUMBER UNITS
	| 'cuts back on' activity 'by' NUMBER UNITS
	| 'gains more than' NUMBER 'pounds of fat'
	| 'walks' NUMBER 'steps'
	| 'locks' identifier nouns
	| 'opens' identifier nouns
	| 'closes' identifier nouns
	| 'turns on' identifier nouns
	| 'turns off' identifier nouns
	| 'knocks'
	| 'wanders off'
	| 'does not respond'
	| 'touches my car'
	| 'falls and is unable to stand'
	| 'cancels'
	| 'does something else'
	| 'goes grocery shopping'
	| 'goes to the store'
	| 'picks up food for' MEAL
	| 'maintains their current weight'
	| 'listens to' identifier MUSIC
	| 'watches' identifier TELEVISION
	| 'has' identifier objectS
	| 'gets gas'
	| 'does something healthy'
    ;

ENVIRONMENT_EVENT: 'it' ENVIRONMENT_CHANGE ;
ENVIRONMENT_CHANGE: 'gets dark'
	| 'starts to get dark'
	| 'reaches that temperature'
	| 'is happening'
	| 'gets below' DEGREES_C 'degrees Celsius'
	| 'gets below' DEGREES_F 'degrees Fahrenheit'
	| 'drops below' DEGREES_C 'degrees Celsius'
	| 'drops below' DEGREES_F 'degrees Fahrenheit'
	| 'falls below' DEGREES_F 'degrees Fahrenheit'
	| 'falls below' DEGREES_C 'degrees Celsius'
	| 'goes above' DEGREES_F 'degrees Fahrenheit'
	| 'goes above' DEGREES_C 'degrees Celsius'
	| 'gets too cold'
	| 'gets too hot'
    ;

UPDATE_EVENT: 'I have' UPDATES
	| 'they have' UPDATES
	| identifier 'kids have' UPDATES
	| 'we have' UPDATES
	| 'my boyfriend has' UPDATES
	| 'my husband has' UPDATES
	| 'my sister has' UPDATES
	| 'somebody has' UPDATES
    ;
UPDATES: SINGULAR_UPDATE
	| PLURAL_UPDATES
	| NUMBER 'minutes until the bus arrives'
    ;

object_EVENT: identifier objectS object_BEHAVIOR
	| identifier SINGULAR_UPDATE object_BEHAVIOR 
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
	| ENVIRONMENT_EVENT
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

DATA_EVENT: identifier DATA_SOURCES DATA_BEHAVIOR ;
DATA_BEHAVIOR: 'rises above' PERCENT
	| 'goes over' NUMBER UNITS
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
	| 'rise above' PERCENT
	| 'go over' NUMBER UNITS
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
QUESTION: QUESTION_ABOUT_entity
	| QUESTION_ABOUT_object
	| QUESTION_ABOUT_UPDATE
	| QUESTION_ABOUT_ENVIRONMENT
	| QUESTION_ABOUT_DATA
	| HOW_QUESTION
	| WHAT_QUESTION
	| WHEN_QUESTION
	| WHERE_QUESTION
	| WHO_QUESTION
    ;
QUESTION_ABOUT_entity: 'are' entity entity_STATE
	| 'is' entity entity_STATE
	| 'am I' entity_STATE
    ;
QUESTION_ABOUT_ENVIRONMENT: 'is it' ENVIRONMENT_STATE ;
QUESTION_ABOUT_UPDATE: 'are there' identifier PLURAL_UPDATES
	| 'are there' identifier PLURAL_UPDATES 'from' entity
	| 'are there' identifier PLURAL_UPDATES 'from work'
	| 'are there' identifier PLURAL_UPDATES 'from' ONLINE_SERVICE
	| 'is there' identifier SINGULAR_UPDATE
	| 'is there' identifier SINGULAR_UPDATE 'from' entity
	| 'is there' identifier SINGULAR_UPDATE 'from work'
	| 'is there' identifier SINGULAR_UPDATE 'from' ONLINE_SERVICE
    ;
QUESTION_ABOUT_object: 'are' identifier objectS object_state
	| 'is' identifier objectS object_state
	| 'have' identifier objectS 'been' object_state
	| 'has' identifier objectS 'been' object_state
	| 'was' identifier objectS object_state
	| 'were' identifier objectS object_state
	| 'are' identifier objectS 'forecast to be' object_state
	| 'is' identifier objectS 'forecast to be' object_state
    ;
QUESTION_ABOUT_DATA: 'is' identifier DATA_SOURCES DATA_STATE
	| 'are' identifier DATA_SOURCES DATA_STATE 
    ;
HOW_QUESTION: 'how anxious am I'
	| 'how dirty is the house'
	| 'how hot is it'
	| 'how am' HOW_AM
	| 'how high' HOW_HIGH
	| 'how is' HOW_IS
	| 'how did' HOW_DID
	| 'how well' HOW_WELL
	| 'how are' HOW_ARE
	| 'how can' entity HOW_CAN_entity
	| 'how long' HOW_LONG
	| 'how many' HOW_MANY
	| 'how much' HOW_MUCH
	| 'how far' HOW_FAR
	| 'how fast' HOW_FAST
    ;
HOW_AM: entity 'feeling'
	| entity 'doing'
	| entity
    ;
HOW_HIGH: 'is' identifier 'blood sugar'
	| 'is' identifier 'blood pressure'
	| 'is' identifier 'heart rate'
    ;
HOW_IS: 'the traffic'
	| 'the weather'
	| 'my blood sugar'
	| 'my exercise program going'
	| 'my heart rate'
	| 'my blood pressure'
	| 'my progress towards my weight goal'
	| 'the stock market'
	| entity
    ;
HOW_DID: 'I sleep last night' ;
HOW_WELL: 'have I been working out'
	| 'have I been sleeping'
	| 'did I sleep last night'
    ;
HOW_ARE: 'my vitals'
	| 'you'
	| entity
    ;
HOW_CAN_entity: 'reduce' identifier 'utility bills'
	| 'conserve energy'
	| 'conserve water'
	| 'conserve gas'
	| 'conserve electricity'
	| 'conserve resources'
	| 'reduce' identifier 'utility usage'
	| 'be healthier'
	| 'cook a particular meal'
	| 'improve' identifier 'sleeping habits'
	| 'reduce' identifier 'costs'
	| 'save money on utilities'
    ;
HOW_LONG: 'have my washer and dryer been running'
	| 'long will the commute be'
    ;
HOW_MANY: 'calories have I burned'
	| 'calories do I need to eat' //<today> <after my exercise routine>
	| 'minutes do I need to exercise' GOAL_DEPENDENCY//<on my elliptical> <in order to eat three pieces of pepp pizza>
	| 'steps have I taken'
	| 'steps do I need to take' GOAL_DEPENDENCY //<if I eat 1500 calories> <and want to maintain my current weight>
    ;
HOW_MUCH: 'do I weigh'
	| 'am I exercising right now'
	| 'energy' RELATION identifier objectS 'consuming'
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
	| 'money would I save if I' EVENT
	| 'money is in my bank account'
	| 'will my bills be' TIME
	| 'am I using of each utility'
	| 'will my electricity cost' TIME
	| 'does each utility cost'
	| 'energy do' identifier objectS 'consume'
	| 'energy does' identifier objectS 'consume'
	| 'electricity' RELATION identifier objectS 'consuming'
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
HOW_FAR: 'did' entity 'travel' ;
HOW_FAST: 'is' identifier 'heart beating'
	| 'is' identifier 'car going'
    ;
WHAT_QUESTION: 'what' objectS RELATION object_state
	| 'what is' identifier DATA_SOURCES
	| 'what are' identifier DATA_SOURCES
	| 'what color are the lights'
	| 'what color is the light'
	| 'what is new on' ONLINE_SERVICE
	| 'what is new on TV'
    ;
WHEN_QUESTION: 'when do' entity 'need to' entity_EVENT
	| 'when does' entity 'need to' entity_EVENT
	| 'when is' entity entity_STATE
	| 'when are' entity entity_STATE
	| 'when will' entity entity_EVENT
	| 'when will' entity 'be' entity_STATE
	| 'when did' entity EVENT
	| 'when was' entity entity_fact
	| 'when were' entity entity_fact
	| 'when do' identifier objectS 'need to' object_EVENT
	| 'when does' identifier objectS 'need to' object_EVENT
	| 'when is' identifier objectS object_state
	| 'when are' identifier objectS object_state
	| 'when will' identifier objectS object_EVENT
	| 'when will' identifier objectS 'be' object_state
	| 'when did' identifier objectS object_EVENT
	| 'when was' identifier objectS object_fact
	| 'when were' identifier objectS object_fact
    ;
WHERE_QUESTION: 'where are' entity
	| 'where is' entity
	| 'where was' entity
	| 'where were' entity
	| 'where is' identifier objectS
    ;
WHO_QUESTION: 'who is' entity_STATE
	| 'who are my new messages from'
	| 'who has a birthday'
    ;


// INDIRECT QUESTIONS
INDIRECT_REFERENCES: INDIRECT_REFERENCE_PHRASE
	| INDIRECT_REFERENCE_PHRASE 'and' ADDITIONAL_INDIRECT_QUESTION
    ;
ADDITIONAL_INDIRECT_QUESTION: INDIRECT_REFERENCES ;
INDIRECT_REFERENCE_PHRASE: INDIRECT_REFERENCE
	| INDIRECT_REFERENCE dependent_clauses
    ;
INDIRECT_REFERENCE: 'what' OPTIONS_FOR_WHAT
	| 'what' identifier OPTIONS_FOR_WHAT_identifier
	| 'what the' OPTIONS_FOR_WHAT_THE
	| 'what I' OPTIONS_FOR_WHAT_I
	| 'what is' OPTIONS_FOR_WHAT_IS
	| 'how' OPTIONS_FOR_HOW
	| 'how I'
	| 'how long' OPTIONS_FOR_HOW_LONG
	| 'how many' OPTIONS_FOR_HOW_MANY
	| 'how much' OPTIONS_FOR_HOW_MUCH
	| 'how much electricity' OPTIONS_FOR_HOW_MUCH_ELECTRICITY 
	| 'how much I' OPTIONS_FOR_HOW_MUCH_I
	| 'how to' OPTIONS_FOR_HOW_TO 
	| 'when' WHEN_REFERENCE
	| 'where' WHERE_REFERENCE
	| 'who' WHO_REFERENCE
	| 'whether' WHETHER_REFERENCE
    ;
OPTIONS_FOR_WHAT: object RELATION object_state ;
OPTIONS_FOR_WHAT_identifier: DATA_SOURCES 'is'
	| DATA_SOURCES 'is for' entity
	| 'exercise program is'
	| 'mood is'
	| entity 'does during the day'
	| entity 'do during the day'
	| entity 'is doing'
	| entity 'are doing'
    ;
OPTIONS_FOR_WHAT_THE: 'forecast is'
	| 'humidity is'
	| 'perfect temperature is for my body temperature'
	| 'temperature is'
	| 'weather is'
	| 'weather is going to be like'
	| 'weather will be like'
    ;
OPTIONS_FOR_WHAT_I: 'weigh'
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
OPTIONS_FOR_WHAT_IS: 'causing illness'
	| 'in my refrigerator for me to eat'
	| 'in the refrigerator'
	| 'new on' ONLINE_SERVICE
	| 'out of stock'
    ;
OPTIONS_FOR_HOW: 'anxious I am feeling right now'
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
OPTIONS_FOR_HOW_I: 'am feeling'
	| 'can reduce my utility bills'
	| 'feel'
	| 'slept last night'
	| 'long I have left on my washer and dryer'
    ;
OPTIONS_FOR_HOW_LONG: 'the commute will be' ;
OPTIONS_FOR_HOW_MANY: 'calories I\'ve burned'
	| 'calories I need to eat today after my exercise routine'
	| 'minutes I need to exercise on my elliptical to eat three pieces of pepperoni pizza'
	| 'steps I\'ve taken'
	| 'steps I\'ve walked in a day'
	| 'steps I\'ve taken through my day'
	| 'steps I must take today if I eat 1500 calories and want to maintain my current weight'
    ;
OPTIONS_FOR_HOW_MUCH: 'am I exercising right now'
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
OPTIONS_FOR_HOW_MUCH_ELECTRICITY: 'gas and water is being consumed currently/is currently in use'
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
OPTIONS_FOR_HOW_MUCH_I: 'weigh'
	| 'am spending every month'
	| 'could save at slightly reduced levels'
	| 'currently weigh'
	| 'have exercised historically'
	| 'sleep'
	| 'slept'
	| 'will be spending at current levels of electricity/heating/etc'
    ;
OPTIONS_FOR_HOW_TO: 'be healthier'
	| 'clean'
	| 'cook a certain recipe'
	| 'improve my sleeping habits'
	| 'make a particular meal'
	| 'reduce cost'
	| 'save money on UTILITY usage in my home'
    ;
WHEN_REFERENCE: statements ;
WHERE_REFERENCE: entity_CONJUGATION_2 'is'
	| 'I am'
	| entity_CONJUGATION_1 'are' 
	| 'it is'
	| identifier objectS 'are'
	| identifier objectS 'is'
    ;
WHO_REFERENCE: 'is' entity_STATE
	| 'was' entity_STATE
    ;
WHETHER_REFERENCE: statements ;

//// DEPENDENCY CLAUSES

// WHILE - facts
WHILE: 'while' factS ;

// BEFORE if I am not home before dark
BEFORE: 'before' EVENTS
	| 'before' TIME
	| NUMBER TIME_UNIT 'before' EVENTS
	| NUMBER TIME_UNIT 'before' TIME
    ;

// AFTER
AFTER: 'after' EVENTS
	| 'after' TIME
	| NUMBER TIME_UNIT 'after' EVENTS
	| NUMBER TIME_UNIT 'after' TIME
    ;

// UNTIL - applies to action sets?
UNTIL: 'until' statements
	| 'until' TIME
    ;

// UNLESS - applies to action sets?
unless: 'unless' statements ;

// GOAL DEPENDENCY
GOAL_DEPENDENCY: 'in order to lose weight'
	| 'in order to save money'
	| 'in order to catch the bus'
	| 'in order to' //<textbox('custom goal')>
	| 'so that' //<textbox('custom reason')>
	| 'for me to review'
    ;

// DESCRIPTION DEPENDENCY (for nouns only)
DESCRIPTION: 'that' RELATION object_state
	| 'that I am in'
	| 'that' entity entity_CRITERIA
    ;
entity_CRITERIA: 'have left' object_state
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
location_dependency: location_PHRASE
	| location_PHRASE 'or' ADDITIONAL_location
	| location_PHRASE 'and' ADDITIONAL_location
    ;
location_PHRASE: 'in' location
	| 'in' location 'that' entity 'in'
	| 'in' location 'that is' location_ATTRIBUTE
	| 'in' location 'that are' location_ATTRIBUTE
	| 'in' identifier location_ATTRIBUTE SPACE
	| 'to'
	| 'for'
	| 'in'
	| 'out'
	| 'at' location
	| 'from' location
	| 'for' location
    ;
location_ATTRIBUTE: 'occupied'
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
ADDITIONAL_location: location_dependency ;

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
	| 'for' identifier TIME_UNIT
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

// SOURCE DEPENDENCY
BASED_ON: 'based on' SOURCE ;
SOURCE: INDIRECT_REFERENCE
	| identifier DATA_SOURCES
	| identifier DATA_SOURCES 'and' ADDITIONAL_SOURCE
	| INDIRECT_REFERENCE 'and' ADDITIONAL_SOURCE
	| INDIRECT_REFERENCE 'or' ADDITIONAL_SOURCE
	| INDIRECT_REFERENCE 'but not' ADDITIONAL_SOURCE
	| identifier DATA_SOURCES 'or' ADDITIONAL_SOURCE
	| identifier DATA_SOURCES 'but not' ADDITIONAL_SOURCE 
    ;
ADDITIONAL_SOURCE: SOURCE ;
