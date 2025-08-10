<?php

echo "<h1>Database Setup Orchestrator</h1>";
echo "<p>This script will first attempt to create the database, then it will attempt to connect to it.</p>";
echo "<hr>";

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();


// Run the database creation script
require_once __DIR__ . '/../src/DBInitialization/create_db.php';

// Run the database connection config script
require_once __DIR__ . '/../src/DBInitialization/config.php';

// --- STEP 3: Ensure all TABLES exist ---
require_once __DIR__ . '/../src/DBInitialization/createTables.php';

if (isset($conn) && mysqli_ping($conn)) {
    echo "<br> VERIFIED: The application is connected to the database and all tables are ready";
} else {
    echo "<br> VERIFICATION FAILED";
}

// Close the connection used for setup
if (isset($conn)) {
    mysqli_close($conn);
}

?>