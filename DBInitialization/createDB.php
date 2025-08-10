<?php
// CREATE DATABASE FILE

$conn = mysqli_connect("localhost", "root", "");

if ($conn == false) {
    die("Could not connect to the server. ERROR: " . mysqli_connect_error());
}

// Create DB creation query
$query = "CREATE DATABASE IF NOT EXISTS minutes90";

if (mysqli_query($conn, $query)) {
    echo "Database creation was successful";
} else {
    echo ("Database creation was unsuccessful. ERROR: " . mysqli_error($link));
}

mysqli_close($conn);
?>
