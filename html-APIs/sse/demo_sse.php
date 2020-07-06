<?php
header('Content-Type: text/event-stream');
header('Cache-control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}\n\n";
flush();

// while(true) {
//     $time = date('r');
//     echo "data:Time: $time\n\n";
//     @ob_flush();flush();
//     sleep(1);
//     }
?>