<?php
include "database-credentials.php";

$dbname = "logging_db";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$tablename = $_GET["tablename"];
$deployment_id = $_GET["deployment_id"];
$user_id = $_GET["user_id"];
$interface_id = $_GET["interface_id"];

if ($tablename === "keystrokes") {
  $scenario_id = $_GET["scenario_id"];
  $overall_keystroke_count = $_GET["overall_keystroke_count"];
  $scenario_keystroke_count = $_GET["scenario_keystroke_count"];
  $timestamp_ms = $_GET["timestamp_ms"];
  $keycode = $_GET["keycode"];
  $is_printable = $_GET["is_printable"];
  $user_input = $_GET["user_input"];
  $sql = "INSERT INTO keystrokes (deployment_id, user_id, interface_id, scenario_id, overall_keystroke_count, scenario_keystroke_count, timestamp_ms, keycode, is_printable, user_input)
  VALUES ('" .
  $deployment_id . "', " .
  $user_id . ", " .
  $interface_id . ", " .
  $scenario_id . ", " .
  $overall_keystroke_count . ", " .
  $scenario_keystroke_count . ", " .
  $timestamp_ms . ", " .
  $keycode . ", '" .
  $is_printable . "', '" .
  $user_input . "')";
  echo $sql;
  if ($conn->query($sql) === TRUE) {
     echo "New keystroke record created successfully";
  } else {
     echo "Error with keystroke record: " . $sql . "<br>" . $conn->error;
  }

} else if ($tablename === "interactions") {
  $scenario_id = $_GET["scenario_id"];
  // submission info
  $overall_submission_count = $_GET["overall_submission_count"];
  $scenario_submission_count = $_GET["scenario_submission_count"];
  $submission = $_GET["submission"];
  $timestamp_ms = $_GET["timestamp_ms"];
  // sim state
  $projector = $_GET["projector"]; // on/off
  $left_blind = $_GET["left_blind"]; // up/down
  $right_blind = $_GET["right_blind"]; // up/down
  $fluorescent_lights = $_GET["fluorescent_lights"]; // on/off
  $front_lights = $_GET["front_lights"]; // on/off
  $wall_light = $_GET["wall_light"]; // on/off
  $left_light = $_GET["left_light"]; // on/off
  $right_light = $_GET["right_light"]; // on/off

  $sql = "INSERT INTO interactions (deployment_id, user_id, interface_id, scenario_id, overall_submission_count, scenario_submission_count, submission, timestamp_ms, projector, left_blind, right_blind, fluorescent_lights, front_lights, wall_light, left_light, right_light)
  VALUES ('" .
  $deployment_id . "', " .
  $user_id . ", " .
  $interface_id . ", " .
  $scenario_id . ", " .
  $overall_submission_count . ", " .
  $scenario_submission_count . ", '" .
  $submission . "', " .
  $timestamp_ms . ", '" .
  $projector . "', '" .
  $left_blind . "', '" .
  $right_blind . "', '" .
  $fluorescent_lights . "', '" .
  $front_lights . "', '" .
  $wall_light . "', '" .
  $left_light . "', '" .
  $right_light . "')";
  //echo $sql;
  if ($conn->query($sql) === TRUE) {
     echo "New interaction record created successfully";
  } else {
     echo "Error with interaction record: " . $sql . "<br>" . $conn->error;
  }

} else if ($tablename === "scenario_start_times") {
  $scenario_id = $_GET["scenario_id"];
  $timestamp_ms = $_GET["timestamp_ms"];
  $sql = "INSERT INTO scenario_start_times (deployment_id, user_id, interface_id, scenario_id, timestamp_ms)
  VALUES ('" .
  $deployment_id . "', " .
  $user_id . ", " .
  $interface_id . ", " .
  $scenario_id . ", " .
  $timestamp_ms . ")";
  //echo $sql;
  if ($conn->query($sql) === TRUE) {
     echo "New scenario_start_time record created successfully for Scenario " . $scenario_id;
  } else {
     echo "Error with scenario_start_time record: " . $sql . "<br>" . $conn->error;
  }

} else if ($tablename === "scenario_end_times") {
  $scenario_id = $_GET["scenario_id"];
  $timestamp_ms = $_GET["timestamp_ms"];
  $sql = "INSERT INTO scenario_end_times (deployment_id, user_id, interface_id, scenario_id, timestamp_ms)
  VALUES ('" .
  $deployment_id . "', " .
  $user_id . ", " .
  $interface_id . ", " .
  $scenario_id . ", " .
  $timestamp_ms . ")";
  //echo $sql;
  if ($conn->query($sql) === TRUE) {
     echo "New scenario_end_time record created successfully for Scenario " . $scenario_id;
  } else {
     echo "Error with scenario_end_time record: " . $sql . "<br>" . $conn->error;
  }

} else if ($tablename === "interface_start_times") {
  $scenario_id = $_GET["scenario_id"];
  $timestamp_ms = $_GET["timestamp_ms"];
  $sql = "INSERT INTO interface_start_times (deployment_id, user_id, interface_id, scenario_id, timestamp_ms)
  VALUES ('" .
  $deployment_id . "', " .
  $user_id . ", " .
  $interface_id . ", " .
  $scenario_id . ", " .
  $timestamp_ms . ")";
  //echo $sql;
  if ($conn->query($sql) === TRUE) {
     echo "New interface_start_time record created successfully for Scenario " . $scenario_id;
  } else {
     echo "Error with interface_start_time record: " . $sql . "<br>" . $conn->error;
  }

} else if ($tablename === "summary") {
  $num_correct_final_states = $_GET["num_correct_final_states"];
  $overall_elapsed_time_ms = $_GET["overall_elapsed_time_ms"];
  $scenario1_elapsed_time_ms = $_GET["scenario1_elapsed_time_ms"];
  $scenario1_interface_elapsed_time_ms = $_GET["scenario1_interface_elapsed_time_ms"];
  $scenario2_elapsed_time_ms = $_GET["scenario2_elapsed_time_ms"];
  $scenario2_interface_elapsed_time_ms = $_GET["scenario2_interface_elapsed_time_ms"];
  $scenario3_elapsed_time_ms = $_GET["scenario3_elapsed_time_ms"];
  $scenario3_interface_elapsed_time_ms = $_GET["scenario3_interface_elapsed_time_ms"];
  $overall_num_submissions = $_GET["overall_num_submissions"];
  $overall_num_keystrokes = $_GET["overall_num_keystrokes"];
  $overall_num_printable_keystrokes = $_GET["overall_num_printable_keystrokes"];
  $scenario1_num_submissions = $_GET["scenario1_num_submissions"];
  $scenario1_num_keystrokes = $_GET["scenario1_num_keystrokes"];
  $scenario1_num_printable_keystrokes = $_GET["scenario1_num_printable_keystrokes"];
  $scenario2_num_submissions = $_GET["scenario2_num_submissions"];
  $scenario2_num_keystrokes = $_GET["scenario2_num_keystrokes"];
  $scenario2_num_printable_keystrokes = $_GET["scenario2_num_printable_keystrokes"];
  $scenario3_num_submissions = $_GET["scenario3_num_submissions"];
  $scenario3_num_keystrokes = $_GET["scenario3_num_keystrokes"];
  $scenario3_num_printable_keystrokes = $_GET["scenario3_num_printable_keystrokes"];

  $sql = "INSERT INTO summary (deployment_id, user_id, interface_id, num_correct_final_states, overall_elapsed_time_ms, scenario1_elapsed_time_ms, scenario1_interface_elapsed_time_ms, scenario2_elapsed_time_ms, scenario2_interface_elapsed_time_ms, scenario3_elapsed_time_ms, scenario3_interface_elapsed_time_ms, overall_num_submissions, overall_num_keystrokes, overall_num_printable_keystrokes, scenario1_num_submissions, scenario1_num_keystrokes, scenario1_num_printable_keystrokes, scenario2_num_submissions, scenario2_num_keystrokes, scenario2_num_printable_keystrokes, scenario3_num_submissions, scenario3_num_keystrokes, scenario3_num_printable_keystrokes)
  VALUES ('" .
  $deployment_id . "', " .
  $user_id . ", " .
  $interface_id . ", " .
  $num_correct_final_states . ", " .
  $overall_elapsed_time_ms . ", " .
  $scenario1_elapsed_time_ms . ", " .
  $scenario1_interface_elapsed_time_ms . ", " .
  $scenario2_elapsed_time_ms . ", " .
  $scenario2_interface_elapsed_time_ms . ", " .
  $scenario3_elapsed_time_ms . ", " .
  $scenario3_interface_elapsed_time_ms . ", " .
  $overall_num_submissions . ", " .
  $overall_num_keystrokes . ", " .
  $overall_num_printable_keystrokes . ", " .
  $scenario1_num_submissions . ", " .
  $scenario1_num_keystrokes . ", " .
  $scenario1_num_printable_keystrokes . ", " .
  $scenario2_num_submissions . ", " .
  $scenario2_num_keystrokes . ", " .
  $scenario2_num_printable_keystrokes . ", " .
  $scenario3_num_submissions . ", " .
  $scenario3_num_keystrokes . ", " .
  $scenario3_num_printable_keystrokes . ")";
  //echo $sql;
  if ($conn->query($sql) === TRUE) {
     echo "New summary record created successfully";
  } else {
     echo "Error with summary record: " . $sql . "<br>" . $conn->error;
  }

} else if ($tablename === "final_scenario_states") {
  $scenario_id = $_GET["scenario_id"];
  // important info
  $matches_goal_state = $_GET["matches_goal_state"];
  // sim state
  $projector = $_GET["projector"]; // on/off
  $left_blind = $_GET["left_blind"]; // up/down
  $right_blind = $_GET["right_blind"]; // up/down
  $fluorescent_lights = $_GET["fluorescent_lights"]; // on/off
  $front_lights = $_GET["front_lights"]; // on/off
  $wall_light = $_GET["wall_light"]; // on/off
  $left_light = $_GET["left_light"]; // on/off
  $right_light = $_GET["right_light"]; // on/off

  $sql = "INSERT INTO final_scenario_states (deployment_id, user_id, interface_id, scenario_id, matches_goal_state, projector, left_blind, right_blind, fluorescent_lights, front_lights, wall_light, left_light, right_light)
  VALUES ('" .
  $deployment_id . "', " .
  $user_id . ", " .
  $interface_id . ", " .
  $scenario_id . ", '" .
  $matches_goal_state . "', '" .
  $projector . "', '" .
  $left_blind . "', '" .
  $right_blind . "', '" .
  $fluorescent_lights . "', '" .
  $front_lights . "', '" .
  $wall_light . "', '" .
  $left_light . "', '" .
  $right_light . "')";
  echo $sql;
  if ($conn->query($sql) === TRUE) {
     echo "New final_scenario_state record created successfully";
  } else {
     echo "Error with final_scenario_state record: " . $sql . "<br>" . $conn->error;
  }

}

$conn->close();


?>
