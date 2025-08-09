# Catyaw: Find Your Meow\! 🐾

Catyaw (pronounced like "Kwetiaw") is a React TypeScript web application built with Vite, Tailwind CSS, and DaisyUI. It allows users to browse a catalogue of adorable cat pictures and save their favorites.

---

## Features ✨

- **Home Page**: A welcoming landing page featuring a random cat image and an introduction to Catyaw.
- **Cat Catalogue**: Browse through a paginated list of cat pictures fetched from the Cataas API.
- **About Page**: Learn more about Catyaw and contact us through a simple form.
- **Save Functionality**: The "Save Cat" button is present on each `CatCard`, indicating future functionality for users to save their favorite cats.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for saved cats, powered by a Node.js backend with Firebase Firestore.

---

## How to Run the Application 🚀

To get Catyaw up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 14 or higher. You can download it from [nodejs.org](https://nodejs.org/).
- **npm** (Node Package Manager) or **Yarn**: npm comes with Node.js, or you can install Yarn separately.
- **Firebase CLI**: For backend deployment and local Firebase Function testing. Install globally: `npm install -g firebase-tools`.

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

For local development, you can run your Firebase Functions locally.

1.  Ensure you have initialized Firebase in your `server/functions` directory (`firebase init functions`).

2.  Navigate to the `server` directory:

    ```bash
    cd server
    ```

3.  Start the Firebase Functions emulator:

    ```bash
    firebase emulators:start --only functions
    ```

    This will provide local URLs for your functions (e.g., `http://localhost:5001/your-project-id/asia-east1/api`). You'll need to update your frontend's `backendApiUrl` to point to this local function URL for testing.

---

## Building for Production 📦

#### Frontend (Client)

To create a production-ready build of the frontend application:

1.  Navigate to the `client` directory:

    ```bash
    cd client
    ```

2.  Run the build command:

    ```bash
    npm run build
    # or yarn build
    ```

    This command will compile and optimize your application, placing the output in the `client/dist/` directory.

---

## Deployment 🌐

### Frontend Deployment (Vercel)

The Catyaw web application frontend is deployed and accessible at: [https://catyaw.vercel.app](https://catyaw.vercel.app)

### Backend Deployment (Firebase App Hosting)

The backend API is deployed through Firebase App Hosting.

<!-- **Step-by-step process for backend deployment:**

1.  **Get a PostgreSQL Database (e.g., NeonDB)**: Obtain your database connection string (`DATABASE_URL`).

2.  **Generate Firebase Service Account Key**: In your Firebase project console, go to Project settings \> Service accounts and generate a new private key (JSON file).

3.  **Configure Environment Variable**: Set the entire JSON content of your service account key as an environment variable (e.g., `FIREBASE_SERVICE_ACCOUNT_KEY_JSON`) on your Firebase Cloud Function.

4.  **Deploy Backend Functions**: From your project root (`catyaw/`), run the Firebase CLI command:

    ```bash
    firebase deploy --only functions
    ```

    This will deploy your Node.js backend API to Firebase Cloud Functions.

5.  **Update Frontend API URL**: After deployment, update the `backendApiUrl` constant in your frontend code (`client/src/components/CatCard.tsx` and `client/src/pages/Saves.tsx`) to point to your deployed Firebase Cloud Function URL (e.g., `https://REGION-YOUR-PROJECT-ID.cloudfunctions.net/api`). -->

**For local backend development:**

- Make sure your `server/.env` file contains your `DATABASE_URL` (if using PostgreSQL directly) or `FIREBASE_SERVICE_ACCOUNT_KEY_PATH` (if using Firebase Admin SDK pointing to a local file).

- Navigate to your `server` directory and run:

  ```bash
  node index.js
  ```

  This will start your Express server locally on `http://localhost:5000`.
