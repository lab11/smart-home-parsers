grammar Nearby;

// NOTE: NO CONDITIONS, FEW FACTS

//Tell me <metric>
//  <metric> = the [current] temperature, the humidity, the brightness,
//  <how_metric> = how hot it is, how cold it is, how humid it is, how dry it is, how bright it is, how dark it is
//Tell me whether <fact>
//  <fact> = the <lockable> is locked, the <turnables> are on, the <turnable> is on, //<occupant> is in the room, there has been motion in the last X minutes, <moveable> has moved

//What is <metric>?
//<inverted how metric>?
//  how hot is it, how cold is it...




//////////////////////////////////////////////
// PARSER RULES
//////////////////////////////////////////////

start
    : (PLEASANTRY)? application EOF
//    | THANKS EOF
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
    : turn_on turnable
    | turn_off turnable
    | turn_on turnables
    | turn_off turnables
    | unlock lockable
//    | lock lockable
//    | unlock lockables
//    | lock lockables
    | dim dimmable (TO percent)?
    | brighten dimmable (TO percent)?
    | dim dimmables (TO percent)?
    | brighten dimmables (TO percent)?
    ;

info_request
    : tell_me metric
    | tell_me WHETHER fact
    ;

metric
    : temperature
    | humidity
    | brightness
    ;

fact
    : lockable is locked
//    | lockables are locked
    | turnable is on
    | turnable is off
    | turnables are on
    | turnables are off
    ;

question
    : IS TURNABLE TURN_STATE
    | ARE TURNABLES TURN_STATE
    ;

percent
    : INTEGER PCT
    ;

//////////////////////////////////////////////
// PARSER TO LEXER RULES
//////////////////////////////////////////////

turn_on: TURN_ON;
turn_off: TURN_OFF;
lock: LOCK;
unlock: UNLOCK;
dim: DIM;
brighten: BRIGHTEN;
tell_me: TELL_ME;

turnable: TURNABLE;
turnables: TURNABLES;
lockable: LOCKABLE;
//lockables: LOCKABLES;
dimmable: DIMMABLE;
dimmables: DIMMABLES;

is: IS;
are: ARE;
on: ON;
off: OFF;
locked: LOCKED;
unlocked: UNLOCKED;

temperature: TEMPERATURE;
humidity: HUMIDITY;
brightness: BRIGHTNESS;


//////////////////////////////////////////////
// LEXER RULES
//////////////////////////////////////////////

//THANKS
//    : 'thanks'
//    | 'thank you'
//    | 'you da best'
//    | 'you da real MVP'
//    ;

TEMPERATURE
    : 'the temperature'
    ;

HUMIDITY
    : 'the humidity'
    ;

BRIGHTNESS
    : 'the brightness'
    ;

TELL_ME
    : 'tell me'
    ;

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

TURN_VERB
  : 'turn on'
  | 'turn off'
  ;

LOCK_VERB
  : 'unlock'
  | 'lock'
  ;

DIM_VERB
  : 'dim'
  | 'brighten'
  ;

TURN_STATE
  : 'on'
  | 'off'
  ;

LOCKED
  : 'locked'
  ;

UNLOCKED
  : 'unlocked'
  ;

IS
  : 'is'
  ;

ARE
  : 'are'
  ;


//////////////////////////////////////////////
// DYNAMIC LEXER RULES
//////////////////////////////////////////////

TURNABLE
    : 'the light'
    ;

TURNABLES
    : 'the lights'
    ;

DIMMABLE
    : 'hue light'
    ;

DIMMABLES
    : 'the hue lights'
    ;

LOCKABLE
    : 'the door'
    ;

//LOCKABLES
//    : ''
//    ;
