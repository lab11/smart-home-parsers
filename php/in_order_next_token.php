<?php
include "database-credentials.php";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//$mytable = $_GET["q"];
$partialtext = $_GET["text"];

//for($i=0; $i<count($mytable); $i++) {
$sql = "SELECT sentence, token_indices FROM language WHERE sentence LIKE '" . $partialtext . "%'";
$result = $conn->query($sql);

$seen_list = array();

if ($result->num_rows > 0) {
    // output data of each row
    $i = 0;
    while($row = $result->fetch_assoc()) {

      // Get the start index of the next token
      $token_indices = array_map('intval', explode(' ', $row["token_indices"]));
      $next_token_index = 0;
      foreach ($token_indices as $key => $value) {
        if ($value > strlen($partialtext)) {
          $next_token_index = $value + 1;
          break;
        }
      }

      // If no next token found, then the suggestion will go to the end
      // Also, there won't be ... at the end in that case
      $continue = "...";
      if ($next_token_index == 0) {
        $next_token_index = strlen($row["sentence"]);
        $continue = "";
      }

      // Get the suggestion
      $next_token_string = substr($row["sentence"], 0, $next_token_index);

      // Only add suggestion if it isn't a duplicate when truncated
      if (!in_array($next_token_string, $seen_list)) {
        $suggestion = "<div onmouseover=\"highlight_suggestion(this);\" onmouseout=\"unhighlight_suggestion(this);\" onclick=\"autofill(this);\" class=\"suggestion\" id=\"suggestion" . $i . "\">" . rtrim(ucfirst($next_token_string)) . $continue . "</div>";
        $i++;
        array_push($seen_list, $next_token_string);
        echo ucfirst($suggestion);
      }
    }
  }

$conn->close();
?>
