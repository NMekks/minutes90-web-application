<?php
// This is the API-SAFE configuration file.
// Its only job is to create a database connection and make it available.
// It produces NO output.

// This file assumes the .env variables have already been loaded by the script that includes it.
$host = $_ENV['DB_HOST'];
$db_name = $_ENV['DB_NAME'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

// Establish the database connection.
$conn = mysqli_connect($host, $user, $pass, $db_name);

// Check the connection and handle errors gracefully for an API.
if ($conn == false) {
  // Log the real error for developers to see in the PHP error logs.
  error_log("MySQLi Connection Error: " . mysqli_connect_error());
  
  // Send a proper JSON error response back to the frontend.
  http_response_code(500);
  echo json_encode(['message' => 'Database service is unavailable. Please try again later.']);
  
  // Stop the script.
  exit();
}

// Set the character set for the connection.
mysqli_set_charset($conn, "utf8mb4");

// The $conn variable is now ready for any script that includes this file.
?>