<?php

if (!isset($conn)) {
    die("FATAL ERROR:</b> No database connection available. Cannot create tables. Check config.php");
}

// --- SQL to create the 'users' table ---
$sql_users = "
CREATE TABLE IF NOT EXISTS `users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('player', 'club', 'agent', 'scout', 'admin') NOT NULL,
  `status` ENUM('active', 'suspended', 'pending_verification') NOT NULL DEFAULT 'pending_verification',
  `is_verified` BOOLEAN NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

if (mysqli_query($conn, $sql_users)) {
    echo "<br>`users` table is ready.";
} else {
    echo "Error creating `users` table: " . mysqli_error($conn);
}

// --- SQL for all PROFILE tables ---
$profile_tables_sql = [
    "player_profiles" => "
    CREATE TABLE IF NOT EXISTS `player_profiles` (
      `user_id` BIGINT UNSIGNED NOT NULL,
      `first_name` VARCHAR(255) NULL,
      `last_name` VARCHAR(255) NULL,
      PRIMARY KEY (`user_id`),
      FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",

    "club_profiles" => "
    CREATE TABLE IF NOT EXISTS `club_profiles` (
      `user_id` BIGINT UNSIGNED NOT NULL,
      `club_name` VARCHAR(255) NULL,
      `country` VARCHAR(255) NULL,
      PRIMARY KEY (`user_id`),
      FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",

    "agent_profiles" => "
    CREATE TABLE IF NOT EXISTS `agent_profiles` (
      `user_id` BIGINT UNSIGNED NOT NULL,
      `full_name` VARCHAR(255) NULL,
      `agency_name` VARCHAR(255) NULL,
      PRIMARY KEY (`user_id`),
      FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",

    "scout_profiles" => "
    CREATE TABLE IF NOT EXISTS `scout_profiles` (
      `user_id` BIGINT UNSIGNED NOT NULL,
      `full_name` VARCHAR(255) NULL,
      PRIMARY KEY (`user_id`),
      FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"
];

// Loop through and create each profile table
foreach ($profile_tables_sql as $table_name => $sql) {
    if (mysqli_query($conn, $sql)) {
        echo "<br>`$table_name` table is ready.";
    } else {
        echo "<br>Error creating `$table_name` table: " . mysqli_error($conn);
    }
}


?>