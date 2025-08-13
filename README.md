# **minutes90 - Professional Football Network MVP**

`minutes90` is a professional networking platform designed to connect football (soccer) professionals, including players, clubs, agents, and scouts. Conceived as a "LinkedIn for Football," this Minimum Viable Product (MVP) demonstrates core end-to-end functionality, from user authentication and profile management to social interaction and multilingual support.

## **Live Demo**

A live version of the application is deployed and can be accessed at the following URL:

**[https://minutes90-mvp.rf.gd/](https://minutes90-mvp.rf.gd/)** <!-- Replace with your actual InfinityFree domain -->

## **Current Status & Known Issues**

This MVP has been fully deployed, but please be aware of the current status of some features on the live server:

*   **User Authentication:** The UI for registration and login is complete, and the backend successfully creates new users in the database. However, the application does not yet have a persistent "logged-in" state to navigate to protected pages.
*   **Language Switching (i18n):** The code for multilingual support (EN/DE/AR) using `react-i18next` is fully implemented in the frontend. However, there may be issues in the deployed environment that prevent the language from switching correctly.
*   **Data Source:** To demonstrate the full UI/UX, the frontend is currently populated with **mock data**. The backend PHP API endpoints are built and deployed, but the final connection to populate the UI from the live database is pending.

## **Core Features**

| Feature | Status | Description |
| :--- | :--- | :--- |
| **User Authentication** | UI Complete / Backend Partial | UI for a secure registration and login system. Backend creates users successfully. |
| **Role-Based Access** | Implemented | The architecture supports four distinct user roles: Player, Club, Agent, and Scout. |
| **Profile Pages** | UI Complete | Component-based profile pages to display user information, stats, and embedded media. |
| **Advanced Search** | UI Complete | A functional search page to find and filter users by role. |
| **Social Feed** | UI Complete | A central feed to display posts from different users. |
| **Multilingual UI** | Code Complete | UI supports EN, DE, and AR (including RTL), though live functionality may be buggy. |
| **Messaging Interface** | UI Only | A static UI-only implementation as per MVP requirements. |
| **Subscription Flow** | UI Only | A static UI-only implementation demonstrating the subscription page. |
| **Admin Dashboard** | UI Complete | A basic admin interface demonstrating user moderation capabilities. |

## **Technology Stack**

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js | A modern JavaScript library for building the user interface. |
| | Bootstrap 5 | For responsive design and pre-built UI components. |
| | react-i18next | For handling multilingual translations. |
| | Axios | For making HTTP requests to the backend API. |
| **Backend** | PHP | Custom-built backend scripts to handle all business logic. |
| | Composer | For managing PHP dependencies (e.g., `phpdotenv`). |
| | Apache | The web server running the PHP application. |
| **Database** | MySQL | A relational database for storing all application data. |
| | phpMyAdmin | Used for database management and schema setup. |
| **Hosting**| InfinityFree | Free hosting provider for the live LAMP stack (Linux, Apache, MySQL, PHP). |

## **Project Structure**

The project is organized into a main backend application and a `client` directory for the React frontend.
```
minutes90-web-application/
├── client/
│ ├── build/ # The compiled, production-ready React app
│ ├── public/ # React's public assets (favicon, etc.)
│ ├── src/ # React source code (components, pages)
│ ├── package.json # Frontend dependencies
│ └── ...
├── public/
│ ├── .htaccess # Apache rules for the API router
│ └── index.php # Main API router
├── src/
│ ├── API/ # PHP files for each API endpoint (login, register)
│ ├── DBInitialization/ # Database setup scripts (config, createTables)
│ └── ...
├── vendor/ # Composer packages
├── .env # Local environment variables (DB credentials)
├── .htaccess # Main router for React and API on live server
├── composer.json # Backend dependencies
└── setup.php # Local database setup script
```

## **Database Schema**

The application uses a normalized MySQL schema with foreign key constraints to maintain data integrity.

| Table | Description |
| :--- | :--- |
| **users** | Stores core login information and user roles. |
| **player_profiles** | Stores specific details for users with the 'player' role. |
| **club_profiles** | Stores specific details for users with the 'club' role. |
| **agent_profiles** | Stores specific details for users with the 'agent' role. |
| **scout_profiles** | Stores specific details for users with the 'scout' role. |

## **API Documentation**

The following API endpoints have been built and deployed to support the application.

---

### **Authentication**

#### `POST /public/api/register`
Registers a new user and creates an associated profile entry in the database.
*   **Request Body:**
    ```json
    {
      "email": "player@example.com",
      "password": "securepassword123",
      "role": "player"
    }
    ```
*   **Success Response (201 Created):**
    ```json
    { "message": "User registered successfully!" }
    ```
*   **Error Response (409 Conflict):**
    ```json
    { "message": "This email address is already registered." }
    ```

#### `POST /public/api/login`
Authenticates a user's credentials against the database.
*   **Request Body:**
    ```json
    {
      "email": "player@example.com",
      "password": "securepassword123"
    }
    ```
*   **Success Response (200 OK):**
    ```json
    {
      "message": "Login successful!",
      "user": { "id": 1, "email": "player@example.com", "role": "player" }
    }
    ```
*   **Error Response (401 Unauthorized):**
    ```json
    { "message": "Incorrect email or password." }
    ```

## **Local Development Setup**

Follow these steps to run the project on a local machine where all features can be fully tested.

**Prerequisites:**
*   A local server environment like WAMP or XAMPP.
*   Node.js and npm installed.
*   Composer installed.

**1. Clone the Repository:**
```bash
git clone https://github.com/your-username/minutes90-web-application.git
cd minutes90-web-application
```

**2. Backend Setup:**
*  Create a .env file in the root directory. You can copy the structure from .env.example if one is present.
*  Edit the .env file with your local MySQL database credentials.
*  Install PHP dependencies:
```bash
composer install
```

*  Create the database and tables by running the setup script in your browser: http://localhost/minutes90-web-application/setup.php

**3. Frontend Setup:**
*  Navigate to the client directory:
```bash
cd client
```
*  Install npm dependencies:
```bash
npm install
```
*  Start the React development server:
```bash
npm start
```
*  The application will be available at http://localhost:3000. The proxy in package.json will automatically forward API requests to your local PHP server.
