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
    : turn_on (turnable | turnables)
    | turn_off (turnable | turnables)
    | unlock lockable
//    | lock lockable
//    | unlock lockables
//    | lock lockables
      | dim (dimmable | dimmables) (TO percent)?
      | brighten (dimmable | dimmables) (TO percent)?
    ;

info_request
    : tell_me (metric | tell_me WHETHER fact)
    ;

metric
    : temperature
    | humidity
    | brightness
    ;

fact
    : lockable is locked
//    | lockables are locked
    | turnable is (on | off)
    | turnables are (on | off)
    ;

question
    : is turnable (on | off)
    | are turnables (on | off)
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

LOCK
    : 'lock'
    ;
lock: LOCK;

UNLOCK
    : 'unlock'
    ;
unlock: UNLOCK;

DIM
    : 'dim'
    ;
dim: DIM;

BRIGHTEN
    : 'brighten'
    ;
brighten: BRIGHTEN;

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



turnable: TURNABLE;
turnables: TURNABLES;
lockable: LOCKABLE;
//lockables: LOCKABLES;
dimmable: DIMMABLE;
dimmables: DIMMABLES;




//////////////////////////////////////////////
// LEXER RULES
//////////////////////////////////////////////

//THANKS
//    : 'thanks'
//    | 'thank you'
//    | 'you da best'
//    | 'you da real MVP'
//    ;

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

TURNABLE
    : 'the workbench light'
    | 'the projector'
    ;

TURNABLES
    : 'the lights'
    | 'the floor lamps'
    ;

DIMMABLE
    : 'Pat"s hue light'
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
