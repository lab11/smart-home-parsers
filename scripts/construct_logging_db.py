# connect to mysql database tokens_db
# look at grammar file
# stick lexer rules into database

import re
import pymysql.cursors
import database_credentials as config

db_name = "logging_db"

def main():
    delete_database(db_name)
    create_database(db_name)

    schema = get_schema()
    for table in schema:
        build_table(table)

def get_schema():
    return [
        {"tablename": "summary",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},

            {"colname": "num_correct_final_states", "type": "SMALLINT"},

            {"colname": "overall_elapsed_time_ms", "type": "BIGINT"},

            {"colname": "scenario1_elapsed_time_ms", "type": "INTEGER"},
            {"colname": "scenario1_interface_elapsed_time_ms", "type": "INTEGER"},

            {"colname": "scenario2_elapsed_time_ms", "type": "INTEGER"},
            {"colname": "scenario2_interface_elapsed_time_ms", "type": "INTEGER"},

            {"colname": "scenario3_elapsed_time_ms", "type": "INTEGER"},
            {"colname": "scenario3_interface_elapsed_time_ms", "type": "INTEGER"},

            {"colname": "overall_num_submissions", "type": "SMALLINT"},
            {"colname": "overall_num_keystrokes", "type": "INTEGER"},
            {"colname": "overall_num_printable_keystrokes", "type": "INTEGER"},

            {"colname": "scenario1_num_submissions", "type": "SMALLINT"},
            {"colname": "scenario1_num_keystrokes", "type": "INTEGER"},
            {"colname": "scenario1_num_printable_keystrokes", "type": "INTEGER"},

            {"colname": "scenario2_num_submissions", "type": "SMALLINT"},
            {"colname": "scenario2_num_keystrokes", "type": "INTEGER"},
            {"colname": "scenario2_num_printable_keystrokes", "type": "INTEGER"},

            {"colname": "scenario3_num_submissions", "type": "SMALLINT"},
            {"colname": "scenario3_num_keystrokes", "type": "INTEGER"},
            {"colname": "scenario3_num_printable_keystrokes", "type": "INTEGER"}
            ]
        },

        {"tablename": "tokens",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},
            {"colname": "scenario_id", "type": "TINYINT"},

            {"colname": "token", "type": "VARCHAR(50)"},
            {"colname": "semantic_type", "type": "VARCHAR(50)"},
            {"colname": "was_submitted", "type": "ENUM('true', 'false')"}
            ]
        },

        {"tablename": "keystrokes",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},
            {"colname": "scenario_id", "type": "TINYINT"},

            {"colname": "overall_keystroke_count", "type": "INTEGER"},
            {"colname": "scenario_keystroke_count", "type": "INTEGER"},
            {"colname": "timestamp_ms", "type": "BIGINT"},
            {"colname": "keycode", "type": "SMALLINT"},
            {"colname": "is_printable", "type": "ENUM('true', 'false')"},
            {"colname": "user_input", "type": "VARCHAR(100)"}
            ]
        },

        {"tablename": "scenario_start_times",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},
            {"colname": "scenario_id", "type": "TINYINT"},

            {"colname": "timestamp_ms", "type": "BIGINT"}
            ]
        },

        {"tablename": "interface_start_times",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},
            {"colname": "scenario_id", "type": "TINYINT"},

            {"colname": "timestamp_ms", "type": "BIGINT"}
            ]
        },

        {"tablename": "scenario_end_times",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},
            {"colname": "scenario_id", "type": "TINYINT"},

            {"colname": "timestamp_ms", "type": "BIGINT"}
            ]
        },

        {"tablename": "interactions",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},
            {"colname": "scenario_id", "type": "TINYINT"},

            # submission (the user's input)
            {"colname": "overall_submission_count", "type": "SMALLINT"},
            {"colname": "scenario_submission_count", "type": "SMALLINT"},
            {"colname": "submission", "type": "VARCHAR(100)"},
            {"colname": "timestamp_ms", "type": "BIGINT"},

            # state(the system's output)
            {"colname": "projector", "type": "ENUM('on', 'off')"},
            {"colname": "left_blind", "type": "ENUM('up', 'down')"},
            {"colname": "right_blind", "type": "ENUM('up', 'down')"},
            {"colname": "fluorescent_lights", "type": "ENUM('on', 'off')"},
            {"colname": "front_lights", "type": "ENUM('on', 'off')"},
            {"colname": "wall_light", "type": "ENUM('on', 'off')"},
            {"colname": "left_light", "type": "ENUM('on', 'off')"},
            {"colname": "right_light", "type": "ENUM('on', 'off')"}
            ]
        },

        {"tablename": "final_scenario_states",
        "fields": [
            {"colname": "deployment_id", "type": "VARCHAR(50)"},
            {"colname": "user_id", "type": "SMALLINT"},
            {"colname": "interface_id", "type": "TINYINT"},
            {"colname": "scenario_id", "type": "TINYINT"},

            # important info
            {"colname": "matches_goal_state", "type": "ENUM('true', 'false')"},

            # state
            {"colname": "projector", "type": "ENUM('on', 'off')"},
            {"colname": "left_blind", "type": "ENUM('up', 'down')"},
            {"colname": "right_blind", "type": "ENUM('up', 'down')"},
            {"colname": "fluorescent_lights", "type": "ENUM('on', 'off')"},
            {"colname": "front_lights", "type": "ENUM('on', 'off')"},
            {"colname": "wall_light", "type": "ENUM('on', 'off')"},
            {"colname": "left_light", "type": "ENUM('on', 'off')"},
            {"colname": "right_light", "type": "ENUM('on', 'off')"}
            ]
        }
        ]

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

def build_table(table_schema):
    db = connect_logging_db()
    try:
        with db.cursor() as cursor:
            tablename = table_schema["tablename"]
            fields = table_schema["fields"]
            schema_str = ""
            for field in fields:
                schema_str += "{} {}, ".format(field["colname"], field["type"])
            schema_str = " (" + schema_str[:-2] + ")"
            sql = "CREATE TABLE " + tablename + schema_str
            print(sql)
            print("\n")
            cursor.execute(sql)
            db.commit()
    finally:
        db.close()
        pass

def connect_mysql():
    # Connect to the database
    connection = pymysql.connect(host='localhost',
                				 port=config.port,
                                 user=config.username,
                                 password=config.password,
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection

def connect_logging_db():
    # Connect to the database
    connection = pymysql.connect(host='localhost',
                				 port=config.port,
                                 user=config.username,
                                 password=config.password,
                                 db=db_name,
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection


if __name__=="__main__":
    main()
