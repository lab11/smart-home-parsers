<?php

$str_json = file_get_contents('php://input');

$data = $str_json;

$options = array(
  'http' => array(
    'method'  => 'POST',
    'content' => json_encode(json_decode( $data )),
    'header'=>  "Content-Type: application/json\r\n" .
                "Accept: application/json\r\n"
    )
);

$url = "http://68.40.57.31:8080/post1";

$context  = stream_context_create( $options );
$result = file_get_contents( $url, false, $context );
$response = json_decode( $result );
?>
