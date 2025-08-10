<?php
// Include the database connection config.
require_once __DIR__ . '/../DBInitialization/config.php';

// Get the JSON data from the React frontend.
$data = json_decode(file_get_contents("php://input"));

// --- Step 1: Validate incoming data ---
if (empty($data->email) || empty($data->password) || empty($data->role)) {
    echo json_encode(['message' => 'Incomplete data. Email, password, and role are required.']);
    exit();
}
if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['message' => 'Invalid email format.']);
    exit();
}
$allowed_roles = ['player', 'club', 'agent', 'scout'];
if (!in_array($data->role, $allowed_roles)) {
    echo json_encode(['message' => 'Invalid role selected.']);
    exit();
}

// --- Step 2: Sanitize data and prepare variables ---
$email = mysqli_real_escape_string($conn, trim($data->email));
$password = trim($data->password);
$role = mysqli_real_escape_string($conn, trim($data->role));

// Use the SECURE, built-in password hashing function.
$password_hash = password_hash($password, PASSWORD_BCRYPT);


// --- Step 3: Check if the user's email already exists ---
$sql_check = "SELECT id FROM users WHERE email = ?";
$stmt_check = mysqli_prepare($conn, $sql_check);
mysqli_stmt_bind_param($stmt_check, "s", $email);
mysqli_stmt_execute($stmt_check);
mysqli_stmt_store_result($stmt_check);
if (mysqli_stmt_num_rows($stmt_check) > 0) {
    http_response_code(409); // Conflict
    echo json_encode(['message' => 'This email address is already registered.']);
    mysqli_stmt_close($stmt_check);
    exit();
}
mysqli_stmt_close($stmt_check);


// --- Step 4: Use a TRANSACTION to safely insert into multiple tables ---
// A transaction ensures that if one query fails, all queries are undone (rolled back).
mysqli_begin_transaction($conn);

try {
    // Insert into the main 'users' table
    $sql_users = "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";
    $stmt_users = mysqli_prepare($conn, $sql_users);
    mysqli_stmt_bind_param($stmt_users, "sss", $email, $password_hash, $role);
    mysqli_stmt_execute($stmt_users);

    // Get the ID of the new user we just created
    $new_user_id = mysqli_insert_id($conn);
    mysqli_stmt_close($stmt_users);

    // Now, insert a corresponding row into the correct profile table
    $profile_sql = "";
    switch ($role) {
        case 'player':
            $profile_sql = "INSERT INTO player_profiles (user_id, display_name) VALUES (?, ?)";
            // For now, we'll just use the email as a temporary display name.
            $display_name = explode('@', $email)[0];
            $stmt_profile = mysqli_prepare($conn, $profile_sql);
            mysqli_stmt_bind_param($stmt_profile, "is", $new_user_id, $display_name);
            break;
        case 'club':
            $profile_sql = "INSERT INTO club_profiles (user_id, club_name) VALUES (?, ?)";
            $club_name = "New Club"; // Placeholder
            $stmt_profile = mysqli_prepare($conn, $profile_sql);
            mysqli_stmt_bind_param($stmt_profile, "is", $new_user_id, $club_name);
            break;
        case 'agent':
            $profile_sql = "INSERT INTO agent_profiles (user_id, full_name) VALUES (?, ?)";
            $full_name = "New Agent"; // Placeholder
            $stmt_profile = mysqli_prepare($conn, $profile_sql);
            mysqli_stmt_bind_param($stmt_profile, "is", $new_user_id, $full_name);
            break;
        case 'scout':
            $profile_sql = "INSERT INTO scout_profiles (user_id, full_name) VALUES (?, ?)";
            $full_name = "New Scout"; // Placeholder
            $stmt_profile = mysqli_prepare($conn, $profile_sql);
            mysqli_stmt_bind_param($stmt_profile, "is", $new_user_id, $full_name);
            break;
    }

    // Execute the profile insertion
    mysqli_stmt_execute($stmt_profile);
    mysqli_stmt_close($stmt_profile);

    // If both inserts were successful, commit the transaction to make it permanent
    mysqli_commit($conn);

    // Send success response
    http_response_code(201); // Created
    echo json_encode(['message' => 'User registered successfully!']);

} catch (mysqli_sql_exception $exception) {
    // If anything went wrong, roll back the transaction
    mysqli_rollback($conn);

    // Send an error response
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'message' => 'Failed to register user due to a database error.',
        'error' => $exception->getMessage() // Optional: for debugging
    ]);
} finally {
    // Always close the main connection
    mysqli_close($conn);
}
?>