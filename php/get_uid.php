<?php
// $myfile = fopen("deployment.txt", "r") or die("Unable to open file!");
// $counter = (int) fread($myfile,filesize("deployment.txt"));
// echo "user" . (string) $counter . "_" . (string) rand(0, 99999999999);
// //$counter = $counter + 1;
// fclose($myfile); //instead, need to write incremented counter to file

$fp = fopen('counter.txt', 'c+');
flock($fp, LOCK_EX);

$counter = (int)fread($fp, filesize('counter.txt'));

echo $counter; //. "_" . (string)rand(0, 99999999999);

ftruncate($fp, 0);
fseek($fp, 0);
fwrite($fp, $counter + 1);

flock($fp, LOCK_UN);
fclose($fp);
?>
