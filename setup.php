<?php
// This is your ONE-TIME setup script.

echo "<h1>Application Setup Initialized</h1>";
echo "<p>This script will ensure the database and all required tables exist.</p>";
echo "<hr>";

// THE CORRECT PATH:
// __DIR__ is the current folder (C:\...\minutes90-web-application)
// We look for the 'vendor' folder directly inside it. No '..' is needed.
require_once __DIR__ . '/vendor/autoload.php';

// Load the .env file from the current directory
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
echo "<p><b>INFO:</b> Environment variables loaded.</p><hr>";

// STEP 1: Create the DATABASE
// Correct path to the src folder
require_once __DIR__ . '/src/DBInitialization/create_db.php';

// STEP 2: Connect to the DATABASE
// Correct path to the src folder
require_once __DIR__ . '/src/DBInitialization/config.php';

// STEP 3: Create the TABLES
// Correct path to the src folder
require_once __DIR__ . '/src/DBInitialization/createTables.php';

// STEP 4: Final Verification
echo "<h2>Setup Complete!</h2>";
if (isset($conn) && mysqli_ping($conn)) {
    echo "<br> VERIFIED: The application is connected to the database and all tables are ready.";
} else {
    echo "<br> VERIFICATION FAILED: Something went wrong.";
}

if (isset($conn)) {
    mysqli_close($conn);
}
?>