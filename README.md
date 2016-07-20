Repo for various natural language interface to smart home programs.

```antlr4 <grammar file>.g4
javac <grammar name>*.java
grun <grammar name> <root rule> -gui```

Ex.:

```antlr4 SmartHomeV1.g4
javac SmartHomeV1*.java
grun SmartHomeV1 application -gui```

Type stuff to parse, hit newline, then ctrl+D for EOF will start parse.