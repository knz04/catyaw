# Catyaw: Find Your Meow\! 🐾

Catyaw (pronounced like "Kwetiaw") is a React TypeScript web application built with Vite, Tailwind CSS, and DaisyUI. It allows users to browse a catalogue of adorable cat pictures and save their favorites.

---

## Features ✨

- **Home Page**: A welcoming landing page featuring a random cat image and an introduction to Catyaw.
- **Cat Catalogue**: Browse through a paginated list of cat pictures fetched from the Cataas API.
- **About Page**: Learn more about Catyaw and contact us through a simple form.
- **Save Functionality**: The "Save Cat" button is present on each `CatCard`, indicating future functionality for users to save their favorite cats.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for saved cats, powered by a Node.js backend with Firebase App Hosting and Neon PostgreSQL Database.

---

## How to Run the Application 🚀

To get Catyaw up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 14 or higher. You can download it from [nodejs.org](https://nodejs.org/).
- **npm** (Node Package Manager) or **Yarn**: npm comes with Node.js, or you can install Yarn separately.
- **Firebase CLI**: For backend deployment. Install globally: `npm install -g firebase-tools`.

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <your-repository-url>
    cd catyaw
    ```

2.  **Install dependencies**:

    - For the frontend:
      ```bash
      cd client
      npm install
      # or yarn install
      ```
    - For the backend functions:
      ```bash
      cd ../server/functions
      npm install
      # or yarn install
      ```
    - Return to the project root:
      ```bash
      cd ../../
      ```

### Running the Development Server (Local)

#### Frontend (Client)

1.  Navigate to the `client` directory:

    ```bash
    cd client
    ```

2.  Start the development server:

    ```bash
    npm run dev
    # or yarn dev
    ```

    This will typically start the application on `http://localhost:5173`.

#### Backend (Server - Firebase Functions Emulator)

For local backend development:

- Make sure your `server/.env` file contains your `DATABASE_URL` (if using PostgreSQL directly).

- Navigate to your `server` directory and run:

  ```bash
  node index.js
  ```

  This will start your Express server locally on `http://localhost:5000`.

---

## Deployment 🌐

### Frontend Deployment (Vercel)

The Catyaw web application frontend is deployed and accessible at: [https://catyaw.vercel.app](https://catyaw.vercel.app)

### Backend Deployment (Firebase App Hosting)

The backend API is deployed through Firebase App Hosting.
