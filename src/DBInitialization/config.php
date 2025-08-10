<?php

// 1. Get the variables from the $_ENV array
$host = $_ENV['DB_HOST'];
$db_name = $_ENV['DB_NAME'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

// 2. Define constants (as you originally wanted)
if (!defined('SERVER'))   define("SERVER", $host);
if (!defined('USERNAME')) define("USERNAME", $user);
if (!defined('PASSWORD')) define("PASSWORD", $pass);
if (!defined('DB_NAME'))  define("DB_NAME", $db_name);

$conn = mysqli_connect(SERVER, USERNAME, PASSWORD, DB_NAME);

if ($conn == false) {
  die("Could not connect to the database '" . DB_NAME . mysqli_connect_error());
}

echo "<br>Connection Successful!";

?>