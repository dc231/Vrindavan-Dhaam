# Vrindavan Dhaam

Welcome to **Vrindavan Dhaam**, a full-stack MERN application designed to be a comprehensive digital guide and booking platform for the sacred Braj region, including Mathura, Vrindavan, Goverdhan, Barsana, and Nandgaon. This application provides users with a beautiful and intuitive interface to explore holy sites and plan their pilgrimage, while offering a powerful dashboard for administrators to manage the platform's content.

Made with ❤️ by Dheeraj Chaudhary

## Features

This project is packed with features for both regular users and administrators.

### 👤 User Features

* **Interactive Homepage:** A stunning, multi-section homepage with an animated hero section, feature highlights, and a preview of sacred destinations.
* **User Authentication:** Secure user registration and login system using JWT for authentication.
* **User Profile:** A dedicated profile page where users can view and update their personal information.
* **Region Exploration:** Browse through the five main regions of Braj, each with its own list of significant places.
* **Detailed Place Views:** View detailed information for each temple or site, including descriptions, timings, and a "Get Directions" button that opens Google Maps.
* **Service Listings:** Browse dedicated pages for booking vehicles and viewing hotel accommodations.
* **Responsive Design:** A clean, light-themed, and fully responsive UI that works beautifully on desktops, tablets, and mobile devices, featuring a modern slide-out navigation menu.
* **Toast Notifications:** User-friendly pop-up notifications for actions like login, logout, and registration.

### ⚙️ Admin Features

* **Separate Admin Login:** A dedicated and secure login page for administrators.
* **Admin Dashboard:** A private, protected dashboard with a sidebar for easy navigation through admin functionalities.
* **User Management:** View a complete list of all registered users in a clean, organized table.
* **Content Management:**
    * **Vehicles:** A full CRUD (Create, Read, Update, Delete) interface to add, view, and manage vehicle listings.
    * **Hotels:** A full CRUD interface to add, view, and manage hotel listings.
    * **Tour Packages:** A full CRUD interface to create and manage tour packages that bundle vehicles and hotels.

## Tech Stack

This project is built using the MERN stack and other modern web technologies.

### Frontend

* **React** (with Vite for a fast development experience)
* **React Router DOM** for client-side routing
* **Axios** for making API requests
* **Framer Motion** for smooth animations
* **Lucide React** for clean and modern icons
* **React Hot Toast** for user notifications
* **CSS Modules** for component-scoped styling

### Backend

* **Node.js** as the runtime environment
* **Express.js** as the web framework
* **MongoDB** (with Mongoose) as the database
* **JSON Web Tokens (JWT)** for secure authentication
* **Bcrypt.js** for password hashing
* **Cookie Parser** for handling JWT cookies
* **CORS** for cross-origin resource sharing

## Setup and Installation

To get this project running on your local machine, please follow these steps.

### Prerequisites

* Node.js installed on your machine
* MongoDB Atlas account (or a local MongoDB installation)
* A code editor (like VS Code)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/dc231/Vrindavan-Dhaam.git](https://github.com/dc231/Vrindavan-Dhaam.git)
    cd vrindavan-dhaam
    ```

2.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Set Up Environment Variables:**
    In the `backend` folder, create a new file named `.env` and add the following variables. Replace the placeholder values with your own.
    ```
    PORT=5001
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_string
    ```

5.  **Run the Application:**
    You will need two separate terminals to run both the backend and frontend servers.

    * **To run the backend server:**
        ```bash
        cd backend
        npm start
        ```
    * **To run the frontend server:**
        ```bash
        cd frontend
        npm run dev
        ```

The application should now be running, with the frontend accessible at `http://localhost:5173` (or another port specified by Vite) and the backend at `http://localhost:5001`.