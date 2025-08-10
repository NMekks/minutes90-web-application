<?php

$host = $_ENV['DB_HOST'];
$db_name = $_ENV['DB_NAME'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

$server_conn = mysqli_connect($host, $user, $pass);

// Check the server connection
if ($server_conn == false) {
  
  die("FATAL ERROR: Could not connect to MySQL server." . mysqli_connect_error());
}
echo "Successfully connected to MySQL server.";


$sql_create_db = "CREATE DATABASE IF NOT EXISTS `$db_name`";

if (mysqli_query($server_conn, $sql_create_db)) {
  echo "<br> Success! Database '$db_name' is ready.";
} else {
  die("FATAL ERROR:</b> Could not create database. MySQL Error: " . mysqli_error($server_conn));
}

// Close the temporary server connection, we don't need it anymore.
mysqli_close($server_conn);
?>