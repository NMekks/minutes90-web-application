<?php
// CONFIG FILE USED FOR CONNECTION PURPOSES

if(!defined('SERVER')){
  define("SERVER", "localhost");
}
if(!defined('USERNAME')){
  define("USERNAME", "root");
}
if(!defined('PASSWORD')){
  define("PASSWORD", "");
}
if(!defined('DB_NAME')){
  define("DB_NAME", "minutes90");
}

// CONNECTING TO DATABASE
$conn = mysqli_connect(SERVER, USERNAME, PASSWORD, DB_NAME);

if($conn == false){
  die("Could not connect to the database. ERROR: " . mysqli_connect_error());
}

echo "Connected successfully";
?>
