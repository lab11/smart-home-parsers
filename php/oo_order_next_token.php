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
        if ($value > strlen($partialtext) + 1) {
          $next_token_index = $value;
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
        array_push($seen_list, $next_token_string);

        // Insert bold and other formatting
        $next_token_string = rtrim(ucfirst($next_token_string));
        $pos = strlen($partialtext);
        $next_token_string = "<b>" . substr($next_token_string, 0, $pos) . "</b>" . substr($next_token_string, $pos);
        $suggestion = "<div onmouseover=\"highlight_suggestion(this);\" onmouseout=\"unhighlight_suggestion(this);\" onclick=\"autofill(this);\" class=\"suggestion\" id=\"suggestion" . $i . "\">" . $next_token_string . $continue . "</div>";
        $i++;

        echo ucfirst($suggestion);
      }
    }
    // if nothing matches from beginning, return out-of-order anywhere matches
  }
  else {
    $sql = "SELECT sentence FROM language WHERE sentence LIKE '%" . $partialtext . "%'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $i = 0;
        while($row = $result->fetch_assoc()) {
            $suggestion_str = $row["sentence"];
            $startpos = strpos($suggestion_str, $partialtext);
            $endpos = $startpos + strlen($partialtext);
            $suggestion_str = ucfirst($suggestion_str);
            $suggestion_str = substr($suggestion_str, 0, $startpos) . "<b>" . substr($suggestion_str, $startpos, strlen($partialtext)) . "</b>" . substr($suggestion_str, $endpos);
            $suggestion = "<div onmouseover=\"highlight_suggestion(this);\" onmouseout=\"unhighlight_suggestion(this);\" onclick=\"autofill(this);\" class=\"suggestion\" id=\"suggestion" . $i . "\">" . $suggestion_str . "</div>";
            $i++;
            echo ucfirst($suggestion);
        }
    }
  }

$conn->close();
?>
