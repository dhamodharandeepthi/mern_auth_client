# MERN Authentication App

This is a MERN (MongoDB, Express, React, Node.js) stack application that allows users to sign up, log in, and manage their profile. The app uses JWT (JSON Web Token) for secure authentication.

## App link

https://mern-auth-implementation.netlify.app/

## Demo Video

https://github.com/user-attachments/assets/7ad66df7-1d45-44d6-8c95-3bde3bd8750b

## Features

User registration (Sign Up)
User login (Log In)
Profile management (View and Update)
JWT-based authentication
Protected routes for authorized users only

## Technologies Used

- **MongoDB:** NoSQL database for storing user data.
- **Express:** Web framework for Node.js to handle server-side logic.
- **React:** Frontend library for building user interfaces.
- **Node.js:** Server-side JavaScript runtime.
- **JWT (JSON Web Token):** Secure token-based authentication.
- **Axios:** For making HTTP requests from the frontend to the backend.
- **Bootstrap:** For styling the UI components

## API Endpoints

### Authentication

- **POST /api/auth/signup:** Register a new user.
- **POST /api/auth/login:** Log in a user and return a JWT.

### Profile

- **GET /api/auth/profile:** Fetch the profile of the logged-in user (requires authentication).
- **PUT /api/auth/profile:** Update the profile of the logged-in user (requires authentication).

---