# connect to mysql database tokens_db
# look at grammar file
# stick lexer rules into database

import re
import pymysql.cursors
import database_credentials as config

special_rules = ["INTEGER"]

def test_read():
    print(read_table(config.dbname, "_TURN_ON"))

def test_search():
    print(search_table(config.dbname, "language", "sentence", "projector"))


def search_table(dname, tablename, col, word):
    db = connect_tokens_db()
    try:
        cursor = db.cursor()
        cursor.execute("SELECT sentence from {} WHERE {} LIKE '%{}%'".format(tablename, col, word))
        response = cursor.fetchall()
        db.commit()
    finally:
        db.close()
    results = []
    for r in response:
        results.append(r[col])
    return results

def read_table(dbname, tablename):
    db = connect_tokens_db()
    try:
        cursor = db.cursor()
        cursor.execute("SELECT literal from " + tablename)
        response = cursor.fetchall()
        db.commit()
    finally:
        db.close()
    print(response)
    return response


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
    test_search()
