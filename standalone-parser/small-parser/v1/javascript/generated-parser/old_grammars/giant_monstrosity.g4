/*
Controllable devices:
lights (power state)
hue lights (power state, color, brightness)
projector (power state)
door (lock state)

Accessible data:
Power
Motion
Pressure
Humidity
Temperature
Brightness
Motion

Synthesized data:
Occupancy

Example sentences:
turn on the lights (in the room)
turn off the lights (in the room)
turn on the floor lamps
turn off the floor lamps
turn on the hues
turn off the hues
turn on my lights
turn off my lights
turn on Josh's light
turn on Josh's light for five seconds
turn on the projector
turn off the projector
unlock the door
lock the door

are the lights on
are my lights on
is my light on
is the door locked
are the hues on
is Josh's light on
is the projector on

how much power is X using
how much power is this room using
what is the pressure in this room
what is the humidity
what is the humidity in 4908
how bright is it in 4908
how bright is it
how bright was it yesterday
how bright was it last month
how bright was it an hour ago
show me the brightness for the last hour
what was the brightness yesterday
how hot...
how cold...
what is the temperature...
what was the temperature...
is there motion...
has there been motion...
was there motion...
show me motion....


if the projector is on, turn it off
if the door becomes unlocked, turn on josh's light for five seconds
if there is motion, turn on the lights
if there is no motion for 15 minutes, turn off the lights
if there is someone here, turn on the lights
if there is no one here, turn off the lights
if there is nobody here, turn off the lights
when someone enters the room, turn on the lights
when everyone leaves the room, turn off the lights
when someone leaves the room, flash the lights

*/










/*


application: sentence ;
sentence: action_sentence (PERIOD)? ;
   // | question_sentence QUESTION_MARK
   // ;
action_sentence: action
    | action BOOLEAN_OPERATOR action_sentence
    ;
action: command
    //| command_with_conditions
    //| command UNLESS
    //| command_with_conditions UNLESS
    ;
//question_sentence: question_phrase
    //| question_phrase 'and' question_sentence
    //;


// DIRECT ACTIONS
command: command_pleasantries direct_action_set
    | direct_action_set
    | DO_NOT direct_action_set
    //| COMMAND_QUERY_PLEASANTRIES knowable_things
    | command_query_pleasantries knowable_things
    ;

direct_action_set: direct_action
    | direct_action BOOLEAN_OPERATOR direct_action_set
    ;
direct_action: simple_action ;
simple_action: verb determiner object (states)? ;

states: state_phrase
    | state_phrase BOOLEAN_OPERATOR states
    ;
state_phrase: PREPOSITION OBJECT_STATE
//  | 'of' data_sources
//  | 'that says' STRING
//  | 'to' entity 'that says' STRING
//  | 'to say' STRING
    | OBJECT_STATE
    | PREPOSITION ENTITY
    | PREPOSITION DETERMINER PERSONAL_ORGANIZERS
    ;

knowable_things: knowable_thing
    | knowable_thing BOOLEAN_OPERATOR knowable_things
    ;
knowable_thing: DETERMINER DATA
//    | indirect_references
//    | condition
    ;





///////////////////////////////////////////////////////////////////////////////
//                               LEXER RULES                                 //
///////////////////////////////////////////////////////////////////////////////

fragment INTEGER:    ('-'|'+')?('0'..'9')+ ;
fragment FLOAT:      ('-'|'+')?(('0'..'9')*'.'('0'..'9')+) ;

//punctuation
QUESTION_MARK: '?' -> skip;
PERIOD: '.' -> skip ;

//white space
WS  : [ \t\r\n]+ -> skip ;

number: NUMBER | WS ;
NUMBER:             INTEGER | FLOAT ;
//24 hour clock, covers some invalid times too
clock_time: CLOCK_TIME | WS ;
CLOCK_TIME:       ('0'..'2')?('0'..'9')(':'('0'..'5')('0'..'9'))?('a.m.'|'p.m.'|'am'|'pm')? ;

string: STRING | WS ;
STRING: 'why';//  (~[\r\n])+ ;


//logic!
AND: 'and' ;
OR: 'or' ;
NOT: 'not' ;
NO: 'no' ;
DO_NOT: 'do not' ;
BOOLEAN_OPERATOR: AND
    | OR
    | NOT
    | 'but not'
    | 'but do not'
    ;
command_pleasantries: COMMAND_PLEASANTRIES | WS ;
COMMAND_PLEASANTRIES: 'I would like for you to'
    | 'I would like you to'
    | 'I would like to'
    | 'I need you to'
    | 'I want you to'
    | 'I would like for you to'
    | 'I would like for you to'
    | 'I need you to'
    | 'I want you to'
    | 'I would like for you to'
    ;
command_query_pleasantries: COMMAND_QUERY_PLEASANTRIES | WS ;
COMMAND_QUERY_PLEASANTRIES: 'I want to know'
    | 'I would like to know'
    ;
DIRECT_ACTION_VERBS: 'check and see'
    | 'track'
    | 'determine'
    | 'let me know'
    | 'tell me'
    | 'keep track of'
    | 'remind me to'
    | 'verify that'
    | 'make sure that'
    | 'keep'
    | 'monitor'
    | 'notify me'
    | 'check'
    | 'check on'
    | 'keep track of when'
//  | 'tell'
//  | 'inform'
    | 'ensure that'
    | 'give me'
    | 'have'
    | 'help me'
    | 'inform me of'
    | 'offer to'
    | 'wake'
    | 'cut back on'
    | 'greet'
    | 'decide whether to'
    ;
verb: VERB | WS ;
VERB: 'turn'
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
    | 'email ENTITY'
    | 'send ENTITY'
    | 'customize'
    | 'personalize'
    | 'increase'
    | 'decrease'
    | 'boot up'
    | 'brew'
    | 'calculate'
    | 'call ENTITY'
    | 'cancel'
    | 'change'
    | 'close'
    | 'compile'
    | 'connect to'
    | 'conserve'
    | 'contact ENTITY'
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
determiner: DETERMINER | WS ;
DETERMINER: 'the'
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
    | SPACE
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
MUSIC: 'music'
    | 'music by' ARTIST
    |  GENRE 'music'
    | 'background music'
    ;
ARTIST: STRING ;
GENRE: STRING ;
SONG: 'song'
    | 'song by' ARTIST
    | 'song' SONG_TITLE
    | 'song' SONG_TITLE 'by' ARTIST
    ;
SONG_TITLE: STRING;
ALBUM: 'album' ALBUM_NAME
    | 'album' ALBUM_NAME 'by' ARTIST
    | 'album by' ARTIST
    ;
ALBUM_NAME: STRING ;
PLAYLIST: 'playlist' PLAYLIST_NAME
    | PLAYLIST_DESCRIPTOR 'playlist'
    ;
PLAYLIST_NAME: STRING;
PLAYLIST_DESCRIPTOR: STRING;
TELEVISION: 'television'
    | 'movie'
    | 'movies'
    | 'video'
    | 'videos'
    | 'show'
    | 'shows'
    | FILM_GENRE
    | FILM_GENRE 'movie'
    | TV_SHOW_GENRE 'show'
    | TV_SHOW
    | MOVIE_TITLE
    ;
FILM_GENRE: STRING ;
TV_SHOW_GENRE: STRING ;
TV_SHOW: STRING ;
MOVIE_TITLE: STRING ;
LOCATION: DETERMINER SPACE
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
ACTIVITY: 'cooking'
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
    | DETERMINER 'morning routine'
    ;
ENTITY: 'I'
    | 'people'
    | 'they'
    | 'you'
    | 'we'
    | DETERMINER 'kids'
    | DETERMINER 'children'
    | DETERMINER 'pets'
    | DETERMINER 'sisters'
    | DETERMINER 'brothers'
    | DETERMINER 'friends'
    | DETERMINER 'parents'
    | DETERMINER 'in-laws'
    // Conjugation 2 below
    | DETERMINER 'husband'
    | DETERMINER 'wife'
    | DETERMINER 'boyfriend'
    | DETERMINER 'girlfriend'
    | DETERMINER 'sister'
    | DETERMINER 'brother'
    | DETERMINER 'mother'
    | DETERMINER 'father'
    | 'work'
    | DETERMINER 'work'
    | 'someone'
    | 'someone else'
    | 'no one'
    | 'nobody'
    | DETERMINER 'stranger'
    | 'an unidentified person'
    | 'anyone'
    | DETERMINER 'dog'
    | DETERMINER 'cat'
    | 'he'
    | 'she'
    | DETERMINER 'pet'
    | 'anyone'
    | DETERMINER 'family'
    | 'everyone'
//  | CUSTOM_NAME
    ;
IT: 'it' ;
THERE: 'there' ;

//CUSTOM_NAME: STRING ;
UTILITY: 'energy'
    | 'electricity'
    | 'power'
    | 'water'
    | 'gas'
    | 'utility'
    ;
MEAL: 'breakfast'
    | 'brunch'
    | 'lunch'
    | 'dinner'
    ;

//MESSAGE_SPEC: 'that says' <textbox('custom message')>
//  | 'to' ENTITY 'that says' <textbox('custom message')>
//  | 'to say' <textbox('custom message')>
//  ;

PREPOSITION: 'at'
    | 'of'
    | 'to'
    | 'from'
    | 'for'
    | 'in'
    | 'out'
    ;

COLOR: BASE_COLOR
    | 'warm' BASE_COLOR
    | 'cool' BASE_COLOR
    | 'bright' BASE_COLOR
    | 'light' BASE_COLOR
    | 'hot' BASE_COLOR
    | 'dark' BASE_COLOR
    | 'cold' BASE_COLOR
//  | <textbox('custom color')>
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

IF: 'if' ;
WHEN: 'when' ;

BE: 'am'
    | 'are'
    | 'is'
    | 'was'
    | 'were'
    ;

HAS: 'have'
    | 'has'
    ;

OUGHT_TO: 'need to'
    | 'needs to'
    | 'want to'
    | 'wants to'
    | 'should'
    | 'ought to'
    ;
OUGHT_NOT_TO: 'do not need to'
    | 'don\'t need to'
    | 'does not need to'
    | 'doesn\'t need to'
    | 'do not want to'
    | 'don\'t want to'
    | 'does not want to'
    | 'doesn\'t want to'
    | 'should not'
    | 'shouldn\'t'
    | 'ought not'
    | 'oughtn\'t'
    ;

ENTITY_STATE: 'home'
    | 'in' DETERMINER LOCATION
    | 'at the door'
    | 'present'
    | 'anywhere in' DETERMINER LOCATION
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
    | 'entering' DETERMINER LOCATION
    | 'nearby'
    | 'leaving'
    | 'leaving' DETERMINER LOCATION
    | 'approaching' DETERMINER LOCATION
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
    | 'finished' ACTIVITY
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
    | 'from' ENTITY
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


UPDATES: PLURAL_UPDATES | SINGULAR_UPDATE ;

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
    | 'nothing'
    | 'anything'
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

//OBJECTS: OBJECT
//    | OBJECT BOOLEAN_OPERATOR OBJECT
//    ;
object: OBJECT | WS ;
OBJECT: 'appliance'
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
    | 'OBJECT'
    | LOCATION
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
//  | <textbox('custom station')> radio station
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

OBJECT_STATE: 'in use'
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

ENTITY_EVENT: 'approach'
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
//  | 'send' ENTITY 'a message saying that' <textbox('custom')>
//  | 'say' <textbox('custom')>
    | 'consume' DETERMINER OBJECT
    | 'eat'
    | 'eat' MEAL
    | 'eat' NUMBER 'calories'
    | 'exercise'
    | 'forget'
    | 'get' DETERMINER SINGULAR_UPDATE
    | 'get' DETERMINER PLURAL_UPDATES
    | 'receive' DETERMINER PLURAL_UPDATES
    | 'receive'  DETERMINER SINGULAR_UPDATE
    | 'lose' DETERMINER OBJECT
    | 'lost' DETERMINER OBJECT
    | 'accidentally leave' DETERMINER OBJECT OBJECT_STATE
    | 'finish' ACTIVITY
    | 'start' ACTIVITY
    | 'finish' MEAL
    | 'start' MEAL
    | 'access the Internet'
    | 'put' ENTITY 'out in the yard'
    | 'cut back on' DATA 'by' NUMBER UNITS
    | 'cut back on' ACTIVITY 'by' NUMBER UNITS
    | 'gain more than' NUMBER 'pounds of fat'
    | 'walk' NUMBER 'steps'
//    | simple_actions
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
    | 'listen to' DETERMINER MUSIC
    | 'watch' DETERMINER TELEVISION
    | 'have' DETERMINER OBJECT
    | 'get gas'
    | 'do something healthy'
    // CONJUGATION 2 below!!
    | 'approaches'
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
//  | 'sends you a message saying that' <textbox('custom')>
//  | 'says' <textbox('custom')>
    | 'consumes' DETERMINER OBJECT
    | 'eats'
    | 'eats' MEAL
    | 'eats' NUMBER 'calories'
    | 'exercises'
    | 'forgets'
    | 'gets' DETERMINER SINGULAR_UPDATE
    | 'gets' DETERMINER PLURAL_UPDATES
    | 'receives' DETERMINER PLURAL_UPDATES
    | 'receives' DETERMINER SINGULAR_UPDATE
    | 'loses' DETERMINER OBJECT
    | 'lost' DETERMINER OBJECT
    | 'accidentally leaves' DETERMINER OBJECT OBJECT_STATE
    | 'finishes' ACTIVITY
    | 'starts' ACTIVITY
    | 'finishes' MEAL
    | 'starts' MEAL
    | 'accesses the Internet'
    | 'puts' ENTITY 'out in the yard'
    | 'cuts back on' DATA 'by' NUMBER UNITS
    | 'cuts back on' ACTIVITY 'by' NUMBER UNITS
    | 'gains more than' NUMBER 'pounds of fat'
    | 'walks' NUMBER 'steps'
    | 'locks' DETERMINER OBJECT
    | 'opens' DETERMINER OBJECT
    | 'closes' DETERMINER OBJECT
    | 'turns on' DETERMINER OBJECT
    | 'turns off' DETERMINER OBJECT
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
    | 'listens to' DETERMINER MUSIC
    | 'watches' DETERMINER TELEVISION
    | 'has' DETERMINER OBJECT
    | 'gets gas'
    | 'does something healthy'
    ;

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

OBJECT_BEHAVIOR: 'goes off'
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
//    | ENVIRONMENT_EVENT
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
    | 'stays' OBJECT_STATE
    ;

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

//////////////////////////////////
UNFINISHED MODIFICATIONS BELOW
//////////////////////////////////

question_about_OBJECT: 'are' DETERMINER OBJECT OBJECT_STATE
    | 'is' DETERMINER OBJECT OBJECT_STATE
    | 'have' DETERMINER OBJECT 'been' OBJECT_STATE
    | 'has' DETERMINER OBJECT 'been' OBJECT_STATE
    | 'was' DETERMINER OBJECT OBJECT_STATE
    | 'were' DETERMINER OBJECT OBJECT_STATE
    | 'are' DETERMINER OBJECT 'forecast to be' OBJECT_STATE
    | 'is' DETERMINER OBJECT 'forecast to be' OBJECT_STATE
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
    | 'how can' ENTITY how_can_ENTITY
    | 'how long' how_long
    | 'how many' how_many
    | 'how much' how_much
    | 'how far' how_far
    | 'how fast' how_fast
    ;
how_high: 'is' DETERMINER 'blood sugar'
    | 'is' DETERMINER 'blood pressure'
    | 'is' DETERMINER 'heart rate'
    ;
how_is: 'the traffic'
    | 'the weather'
    | 'my blood sugar'
    | 'my exercise program going'
    | 'my heart rate'
    | 'my blood pressure'
    | 'my progress towards my weight goal'
    | 'the stock market'
    | ENTITY
    | ENTITY 'feeling'
    | ENTITY 'doing'
    ;
how_did: 'I sleep last night' ;
how_well: 'have I been working out'
    | 'have I been sleeping'
    | 'did I sleep last night'
    ;
how_are: 'my vitals'
    | 'you'
    | ENTITY
    ;
how_can_ENTITY: 'reduce' DETERMINER 'utility bills'
    | 'conserve energy'
    | 'conserve water'
    | 'conserve gas'
    | 'conserve electricity'
    | 'conserve resources'
    | 'reduce' DETERMINER 'utility usage'
    | 'be healthier'
    | 'cook a particular meal'
    | 'improve' DETERMINER 'sleeping habits'
    | 'reduce' DETERMINER 'costs'
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
    | 'energy' RELATION DETERMINER OBJECT 'consuming'
    | 'exercise did' ENTITY 'do'
    | 'exercise have I done'
    | 'exercise has' ENTITY 'done'
    | 'should' ENTITY 'exercise'
    | 'have I exercised historically'
    | 'sleep did' ENTITY 'get'
    | 'sleep do I get'
    | 'traffic is there'
    | 'does electricity cost'
    | 'does gas cost'
    | 'does water cost'
    | 'money can I save if I' direct_action
    | 'money would I save if I' event_
    | 'money is in my bank account'
    | 'will my bills be' TIME   | 'am I using of each utility'
    | 'will my electricity cost' TIME
    | 'does each utility cost'
    | 'energy do' DETERMINER OBJECT 'consume'
    | 'energy does' DETERMINER OBJECT 'consume'
    | 'electricity' RELATION DETERMINER OBJECT 'consuming'
    | 'electricity have appliances used'
    | 'electricity am I using'
    | 'electricity do' ENTITY 'consume'
    | 'electricity does' ENTITY 'consume'
    | 'electricity have' ENTITY 'used'
    | 'electricity has' ENTITY 'used'
    | 'am I spending'
    | 'could I save by reducing water consumption'
    | 'could I save by reducing electricity consumption'
    | 'could I save by reducing gas consumption'
    | 'water do' ENTITY 'use'
    | 'am I paying for electricity'
    | 'am I paying for water'
    | 'am I paying for gas'
    | 'am I paying for utilities'
    ;
how_far: 'did' ENTITY 'travel' ;
how_fast: 'is' DETERMINER 'heart beating'
    | 'is' DETERMINER 'car going'
    ;
what_question: 'what' OBJECT RELATION OBJECT_STATE
    | 'what is' DETERMINER DATA
    | 'what are' DETERMINER DATA
    | 'what color are the lights'
    | 'what color is the light'
    | 'what is new on' ONLINE_SERVICE
    | 'what is new on TV'
    ;
when_question: 'when do' ENTITY 'need to' ENTITY_event
    | 'when does' ENTITY 'need to' ENTITY_event
    | 'when is' ENTITY ENTITY_STATE
    | 'when are' ENTITY ENTITY_STATE
    | 'when will' ENTITY ENTITY_event
    | 'when will' ENTITY 'be' ENTITY_STATE
    | 'when did' ENTITY event_
    | 'when was' ENTITY ENTITY_FACT
    | 'when were' ENTITY ENTITY_FACT
    | 'when do' DETERMINER OBJECT 'need to' OBJECT_event
    | 'when does' DETERMINER OBJECT 'need to' OBJECT_event
    | 'when is' DETERMINER OBJECT OBJECT_STATE
    | 'when are' DETERMINER OBJECT OBJECT_STATE
    | 'when will' DETERMINER OBJECT OBJECT_event
    | 'when will' DETERMINER OBJECT 'be' OBJECT_STATE
    | 'when did' DETERMINER OBJECT OBJECT_event
    | 'when was' DETERMINER OBJECT OBJECT_fact
    | 'when were' DETERMINER OBJECT OBJECT_fact
    ;
where_question: 'where are' ENTITY
    | 'where is' ENTITY
    | 'where was' ENTITY
    | 'where were' ENTITY
    | 'where is' DETERMINER OBJECT
    ;
who_question: 'who is' ENTITY_STATE
    | 'who are my new messages from'
    | 'who has a birthday'
    ;


WHO: 'who' ;
WHERE: 'where' ;
WHAT: 'what' ;
WHEN: 'when' ;
WHY: 'why' ;
WHETHER: 'whether' ;
HOW: 'how'
    | 'how long'
    | 'how much'
    | 'how to'

indirect_reference: 'what' options_for_what
    | 'what' DETERMINER options_for_what_DETERMINER
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

options_for_what: WHAT DETERMINER DATA BE
    | WHAT DETERMINER DATA BE 'for' ENTITY
    | WHAT DETERMINER 'exercise program is'
    | WHAT DETERMINER 'mood is'
    | WHAT ENTITY 'does during the day'
    | WHAT ENTITY 'do during the day'
    | WHAT ENTITY 'is doing'
    | WHAT ENTITY 'are doing'
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
    | 'new on' ONLINE_SERVICE
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
    | 'save money on UTILITY usage in my home'
    ;

where_reference: ENTITY 'is'
    | 'I am'
    | ENTITY 'are'
    | 'it is'
    | DETERMINER OBJECT 'are'
    | DETERMINER OBJECT 'is'
    ;
who_reference: 'who' BE ENTITY_STATE ;


//////////////////////////////////
UNFINISHED MODIFICATIONS ABOVE
//////////////////////////////////


WHILE: 'while' ;
BEFORE: 'before' ;
AFTER: 'after' ;
UNTIL: 'until' ;
UNLESS: 'unless' ;
IN_ORDER_TO: 'in order to'
    | 'so that';

DEFINITE_ARTICLE: 'that'
    | 'the'
    | 'those'
    ;

ENTITY_CRITERIA: 'have left' OBJECT_STATE
    | 'has left' OBJECT_STATE
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
    | 'for' DETERMINER TIME_UNIT
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

BASED_ON: 'based on' ;

*/
