# Next.js Firebase Authentication

## Objective

Leverage Firebase to enhance a Next.js application with real-time capabilities and authentication. You'll set up Firebase in a Next.js project, implement Google Sign-In authentication, and handle user sessions.

## Project Overview

This project demonstrates the integration of Firebase Authentication with a Next.js application, enabling Google Sign-In for users. The project includes real-time capabilities and user session handling.

## Firebase Setup

1. Go to https://firebase.google.com/ and signin to your Google account. Click `'Go to console'`. Once on the console select `'Create a Project'` if it's your first project. If it's not your first, then click `'Add project'`.  
   ![alt text](image-3.png)
2. Name your project. For this assignment I disabled Google Analytics.  
   ![alt text](image.png)
   ![alt text](image-1.png)
   This message pops up when your Firebase project is ready.  
   ![alt text](image-4.png)
3. Add / Register web app. Click the following button:  
   ![alt text](image-5.png)  
   Give project a nickname and bypass setting up Firebase Hosting. Register App.
   ![alt text](image-6.png)
   ![alt text](image-2.png)

### Installing Firebase

```bash
npm install firebase
```

### Firebase Configuration

**firebaseConfig.js**

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLFDu5NSW5zD7isT4vc_pnawj_mv-VK6Q",
  authDomain: "fir-auth-4c29c.firebaseapp.com",
  projectId: "fir-auth-4c29c",
  storageBucket: "fir-auth-4c29c.appspot.com",
  messagingSenderId: "345829262476",
  appId: "1:345829262476:web:f18797c583928e66fc67a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { provider, auth };
```

## Implementing Authenication

For authentication implementation, a `FirebaseAuth.jsx` component was created to handle authentication logic. React's `useState` hook was used to manage authentication state, while Firebase's `onAuthStateChanged` function monitored state changes. Functions `handleSignIn` and `handleSignOut` managed sign-in and sign-out processes using Firebase's methods,while the UI updated to reflect authentication status. Integration with Next.js included importing `FirebaseAuth` into `page.js`, creating a basic UI with sign-in/sign-out buttons, and importing Firebase configuration and authentication instance in `firebaseConfig.js`.

## Site Screenshoots

**Initial Site**  
![alt text](image-7.png)  
**SignIn Popup**  
![alt text](image-8.png)  
**Signed In**  
![alt text](image-9.png)  
**Console Messages**  
![alt text](image-10.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
