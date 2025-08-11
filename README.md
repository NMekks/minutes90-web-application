# **minutes90 - Professional Football Network MVP**

`minutes90` is a professional networking platform designed to connect football (soccer) professionals, including players, clubs, agents, and scouts. Conceived as a "LinkedIn for Football," this Minimum Viable Product (MVP) demonstrates core end-to-end functionality, from user authentication and profile management to social interaction and multilingual support.

## **Live Demo**

A live version of the application is deployed and can be accessed at the following URL:

**[https://minutes90-mvp.rf.gd/](https://minutes90-mvp.rf.gd/)** <!-- Replace with your actual InfinityFree domain -->

## **Current Status & Known Issues**

This MVP has been fully deployed, but please be aware of the current status of some features on the live server:

*   **User Authentication:** The UI for registration and login is complete. However, the backend integration for creating a persistent user session is a work in progress. You can create a user, but the application does not yet have a persistent "logged-in" state.
*   **Language Switching (i18n):** The code for multilingual support (EN/DE/AR) using `react-i18next` is fully implemented in the frontend. However, there are known issues in the deployed environment that may prevent the language from switching correctly.
*   **Data Source:** The application is currently populated with **mock data** to demonstrate the full UI. The backend PHP API endpoints are built and deployed, but the final connection to populate the UI from the database is pending.

## **Core Features**

| Feature | Status | Description |
| :--- | :--- | :--- |
| **User Authentication** | UI Complete / Backend Partial | UI for a secure registration and login system for different user roles. |
| **Role-Based Access** | Implemented | The architecture supports four distinct user roles: Player, Club, Agent, and Scout. |
| **Profile Pages** | UI Complete | Component-based profile pages to display user information. (Populated with mock data). |
| **Advanced Search** | UI Complete | A functional search page to find and filter users. (Populated with mock data). |
| **Social Feed** | UI Complete | A central feed to display posts. (Populated with mock data). |
| **Multilingual UI** | Code Complete | UI supports EN, DE, and AR (including RTL), though live functionality is buggy. |
| **Messaging Interface** | UI Only | A static UI-only implementation as per MVP requirements. |
| **Subscription Flow** | UI Only | A static UI-only implementation demonstrating the subscription page. |
| **Admin Dashboard** | UI Complete | A basic admin interface demonstrating user moderation. (Populated with mock data). |


## **Technology Stack**

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js | A modern JavaScript library for building the user interface. |
| **Backend** | PHP | Custom-built backend scripts to handle all business logic. |
| **Database** | MySQL | A relational database for storing all application data. |
| **Hosting**| InfinityFree | Free hosting provider for the live LAMP stack (Linux, Apache, MySQL, PHP). |

## **Project Structure**

The project is organized into a main backend application and a `client` directory for the React frontend.
