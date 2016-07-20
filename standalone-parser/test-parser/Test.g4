grammar Test;
test1:      INTEGER NEWLINE ;
test2:      FLOAT NEWLINE ;
test3:      NUMBER NEWLINE ;
test4:      TIME NEWLINE ;
test5:      STRING NEWLINE ;
//test6:      LONG_PHRASE NEWLINE ;

NEWLINE:    [\r\n]+ ;
fragment INTEGER:    ('-'|'+')?('0'..'9')+ ;
fragment FLOAT:      ('-'|'+')?(('0'..'9')*'.'('0'..'9')+) ;
NUMBER:     INTEGER | FLOAT ;
TIME:       ('0'..'2')?('0'..'9')(':'('0'..'5')('0'..'9'))? ; //24 hour clock, covers some invalid times too
STRING:   (~[\r\n])+ ; //.+( .+)?( .+)? ; //between one and three "words"
//LONG_PHRASE:    .+( .+)?( .+)?( .+)?( .+)? ; //between one and five "words"