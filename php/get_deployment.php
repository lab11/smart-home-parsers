<?php
$myfile = fopen("deployment.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("deployment.txt"));
fclose($myfile);
?>
