<?php
include "database-credentials.php";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$mytable = $_GET["q"];
$partialtext = $_GET["text"];
$userinput = $_GET["input"];

//echo ucfirst("<select>");

for($i=0; $i<count($mytable); $i++) {
  $sql = "SELECT literal FROM " . $mytable[$i];
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          if ($partialtext != '') {
            $suggestion_text = $partialtext . ' ' . $row["literal"];
            if (strpos(strtolower($suggestion_text), strtolower($userinput)) === 0) {
              $suggestion = "<div onmouseover=\"highlight_suggestion(this);\" onmouseout=\"unhighlight_suggestion(this);\" onclick=\"autofill(this);\" class=\"suggestion\" id=\"suggestion" . $i . "\">" . ucfirst($partialtext) . ' ' . $row["literal"] . "..." . "</div>";
              echo $suggestion;
            }
         	} else {
            $suggestion = "<div onmouseover=\"highlight_suggestion(this);\" onmouseout=\"unhighlight_suggestion(this);\" onclick=\"autofill(this);\" class=\"suggestion\" id=\"suggestion" . $i . "\">" . ucfirst($row["literal"]) . "..." . "</div>";
            echo $suggestion;
          }


      }
  } //else {
  //    echo "0 results";
}

//echo ucfirst("</select>");

$conn->close();



/*
$xmlDoc=new DOMDocument();
$xmlDoc->load("links.xml");

$x=$xmlDoc->getElementsByTagName('link');

//get the q parameter from URL
$q=$_GET["q"];


//lookup all links from the xml file if length of q>0
if (strlen($q)>0) {
  $hint="";
  for($i=0; $i<($x->length); $i++) {
    $y=$x->item($i)->getElementsByTagName('title');
    $z=$x->item($i)->getElementsByTagName('url');
    if ($y->item(0)->nodeType==1) {
      //find a link matching the search text
      //if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$q)) {
      if (strtolower(substr($y->item(0)->childNodes->item(0)->nodeValue,0,strlen($q))) === strtolower($q)) {
        if ($hint=="") {
          $hint="<a href='" .
          $z->item(0)->childNodes->item(0)->nodeValue .
          "' target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        } else {
          $hint=$hint . "<br /><a href='" .
          $z->item(0)->childNodes->item(0)->nodeValue .
          "' target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        }
      }
    }
  }
}

// Set output to "no suggestion" if no hint was found
// or to the correct values
if ($hint=="") {
  $response="no suggestion";
} else {
  $response=$hint;
}
*/
//output the response
//echo $response;
?>
