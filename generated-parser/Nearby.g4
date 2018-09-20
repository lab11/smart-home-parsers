grammar Nearby;

//////////////////////////////////////////////
// PARSER RULES
//////////////////////////////////////////////

start
    : (PLEASANTRY)? application EOF
    ;

application
    : command
    | question
    ;

command
    : action
    | info_request
    ;

action
    : turn_on (turnable | turnables)
    | turn_off (turnable | turnables)
    | lower lowerables
    | raise lowerables
    ;

info_request
    : tell_me (metric | WHETHER fact)
    | what is metric
    ;

metric
    : temperature
    | humidity
    | brightness
    ;

fact
    : turnable is (on | off)
    | turnables are (on | off)
    | lowerables are (lowered | raised)
    ;

question
    : is turnable (on | off)
    | are (lowerables (lowered | raised) | turnables (on | off))
    ;

percent
    : INTEGER PCT
    ;

//////////////////////////////////////////////
// LEXER RULES
//////////////////////////////////////////////

TURN_ON
    : 'turn on'
    ;
turn_on: TURN_ON;

TURN_OFF
    : 'turn off'
    ;
turn_off: TURN_OFF;

RAISE
    : 'raise'
    ;
raise: RAISE;

LOWER
    : 'lower'
    ;
lower: LOWER;

TELL_ME
    : 'tell me'
    ;
tell_me: TELL_ME;

IS
  : 'is'
  ;
is: IS;

ARE
  : 'are'
  ;
are: ARE;

ON
  : 'on'
  ;
on: ON;

OFF
  : 'off'
  ;
off: OFF;

LOWERED
  : 'lowered'
  ;
lowered: LOWERED;

RAISED
  : 'raised'
  ;
raised: RAISED;

LOCKED
  : 'locked'
  ;
locked: LOCKED;

UNLOCKED
  : 'unlocked'
  ;
unlocked: UNLOCKED;

TEMPERATURE
    : 'the temperature'
    ;
temperature: TEMPERATURE;

HUMIDITY
    : 'the humidity'
    ;
humidity: HUMIDITY;

BRIGHTNESS
    : 'the brightness'
    ;
brightness: BRIGHTNESS;

WHAT
    : 'what'
    ;
what: WHAT;


//////////////////////////////////////////////
// LEXER RULES
//////////////////////////////////////////////

WHETHER
    : 'whether'
    ;

PLEASANTRY
    : 'could you'
    | 'could you please'
    | 'please'
    | 'i would like you to'
    ;

PCT
  : '%'
  ;

INTEGER
  : [0-9]+
  ;

TO
  : 'to'
  ;


//////////////////////////////////////////////
// DYNAMIC LEXER RULES
//////////////////////////////////////////////

N1
    : 'the front lights'
    ;

N2
    : 'the right light'
    ;

N3
    : 'the left light'
    ;

N4
    : 'the lights'
    ;

N6
    : 'the spot lights'
    ;

N7
    : 'the fluorescent lights'
    ;

N11
    : 'the blinds'
    ;

N12
    : 'the projector'
    ;

turnable
    : N2
    | N3
    | N12
    ;

turnables
    : N1
    | N4
    | N6
    | N7
    ;

lowerables
    : N11
    ;
