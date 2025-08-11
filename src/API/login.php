<?php
// We must start the session to store login state.
session_start();

// Include our new, clean database connection config file.
require_once __DIR__ . '/../DBInitialization/config.php';


// --- Step 1: Get the JSON data sent from the React frontend ---
$data = json_decode(file_get_contents("php://input"));

// --- Step 2: Basic validation ---
if (empty($data->email) || empty($data->password)) {
    http_response_code(400); // Bad Request
    echo json_encode(['message' => 'Email and password are required.']);
    exit();
}

// --- Step 3: Sanitize inputs ---
$email = mysqli_real_escape_string($conn, trim($data->email));
$password = trim($data->password);


// --- Step 4: Find the user in the database ---
$query = "SELECT id, email, role, password FROM users WHERE email = ?";

if ($stmt = mysqli_prepare($conn, $query)) {
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    // Check if a user with that email was found
    if (mysqli_stmt_num_rows($stmt) == 1) {
        // Bind the results from the database to PHP variables
        mysqli_stmt_bind_result($stmt, $user_id, $user_email, $user_role, $stored_password_hash);
        mysqli_stmt_fetch($stmt);

        // --- Step 5: Verify the password using the SECURE built-in function ---
        if (password_verify($password, $stored_password_hash)) {
            // Password is correct!

            // Regenerate session ID for security
            session_regenerate_id(true);

            // Set session variables to "log the user in" on the server
            $_SESSION['loggedin'] = true;
            $_SESSION['user_id'] = $user_id;
            $_SESSION['email'] = $user_email;
            $_SESSION['role'] = $user_role;

            // Send a success response back to React
            http_response_code(200); // OK
            echo json_encode([
                'message' => 'Login successful!',
                'user' => [
                    'id' => $user_id,
                    'email' => $user_email,
                    'role' => $user_role
                ]
            ]);

        } else {
            // Incorrect password
            http_response_code(401); // Unauthorized
            echo json_encode(['message' => 'Incorrect email or password.']);
        }
    } else {
        // No user found with that email
        http_response_code(401); // Unauthorized
        echo json_encode(['message' => 'Incorrect email or password.']);
    }

    mysqli_stmt_close($stmt);
} else {
    // This would happen if the SQL query itself is broken
    http_response_code(500); // Internal Server Error
    echo json_encode(['message' => 'A database error occurred during login.']);
}

mysqli_close($conn);

?>