<?php
$command="ls /var/www/html";
$output = [];
exec($command, $output);
print_r($output);
?>