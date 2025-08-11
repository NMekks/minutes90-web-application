<?php
// This is your LIVE API ROUTER.
// All requests from React will come here.

// Set global headers for all API responses
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight CORS requests from the browser
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit();
}

// Load Environment Variables for every request
require_once __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Simple Router Logic
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$base_path = str_replace('/index.php', '', $_SERVER['SCRIPT_NAME']);
$endpoint = str_replace($base_path, '', $request_uri);

// Direct the request to the correct API file
switch ($endpoint) {
    case '/api/register':
        require_once __DIR__ . '/../src/api/register.php';
        break;

    // --- THIS CASE IS NOW VALID ---
    case '/api/login':
        require_once __DIR__ . '/../src/api/login.php';
        break;

    default:
        // If the endpoint doesn't match, send a 404 Not Found error
        http_response_code(404);
        echo json_encode(['message' => 'Endpoint not found.']);
        break;
}

?>