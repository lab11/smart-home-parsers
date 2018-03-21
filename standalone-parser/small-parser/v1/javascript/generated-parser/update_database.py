# connect to mysql database tokens_db
# look at grammar file
# stick lexer rules into database

import re
import pymysql.cursors
import database_credentials as config

special_rules = ["INTEGER"]

def main():
    lines = get_lines()
    lexer_rules = get_lexer_rules(lines)
    delete_database(config.dbname)
    create_database(config.dbname)
    build_tables_automatically(lexer_rules)
    build_tables_from_special_rules()

def delete_database(dbname):
    db = connect_mysql()
    try:
        cursor = db.cursor()
        cursor.execute("DROP DATABASE IF EXISTS " + dbname)
        db.commit()
    finally:
        db.close()

def create_database(dbname):
    db = connect_mysql()
    try:
        cursor = db.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS " + dbname)
        db.commit()
    finally:
        db.close()

def build_tables_automatically(lexer_rules):
    db = connect_tokens_db()
    try:
        with db.cursor() as cursor:
            for lexer_rule in lexer_rules:
                tokens = lexer_rules[lexer_rule]
                tablename = "_" + lexer_rule
                # Create table for lexer_rule
                sql = "CREATE TABLE " + tablename + "(literal VARCHAR(50))"
                cursor.execute(sql)
                # Create a new record for each literal
                for token in tokens:
                    print(token)
                    sql = "INSERT INTO " + tablename + " (literal) VALUES (%s)"
                    cursor.execute(sql, (token))
                db.commit()
    finally:
        db.close()

def build_tables_from_special_rules():
    pass
    #db = connect()

def get_lines():
    f = open("Nearby-cases.g4")
    lines = f.read()
    return lines

def get_lexer_rules(lines):
    data = lines
    pat = re.compile(r'\n[A-Z]+[^;]*')
    match = pat.findall(data)
    rules = {}
    for m in match:
        lines = m.split("\n")
        rule_name = lines[1].lstrip().rstrip()
        tokens = []
        if rule_name not in special_rules:
            for line in lines[2:-1]:
                pat2 = re.compile(r"'(.*?)(?<!\\)'")
                matches = pat2.findall(line)
                if len(matches) > 0:
                    token = matches[0]
                    token = token.replace("\\'", "'")
                    tokens.append(token)
        rules[rule_name] = tokens
    return rules

def connect_mysql():
    # Connect to the database
    connection = pymysql.connect(host='localhost',
				 port=config.port,
                                 user=config.username,
                                 password=config.password,
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection

def connect_tokens_db():
    # Connect to the database
    connection = pymysql.connect(host='localhost',
				 port=config.port,
                                 user=config.username,
                                 password=config.password,
                                 db=config.dbname,
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection


if __name__=="__main__":
    main()
