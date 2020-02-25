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
$sql = "SELECT sentence FROM language WHERE sentence LIKE '" . $partialtext . "%'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $i = 0;
    while($row = $result->fetch_assoc()) {
        //$suggestion = $row["sentence"] . "..." . "<br>";
        $suggestion = "<div onmouseover=\"highlight_suggestion(this);\" onmouseout=\"unhighlight_suggestion(this);\" onclick=\"autofill(this);\" class=\"suggestion\" id=\"suggestion" . $i . "\">" . ucfirst($row["sentence"]) . "</div>";
        $i++;
        echo ucfirst($suggestion);
    }
  } //else {
  //    echo "0 results";

$conn->close();
?>
