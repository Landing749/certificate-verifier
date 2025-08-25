// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoUDuW0b3xEEM8zPCYbGQc9kHXgapn_vg",
  authDomain: "certificate-verifier-59a50.firebaseapp.com",
  projectId: "certificate-verifier-59a50",
  storageBucket: "certificate-verifier-59a50.firebasestorage.app",
  messagingSenderId: "776899535634",
  appId: "1:776899535634:web:c610aa0c8b333146a5c9cb",
  measurementId: "G-HB0EHW1TJM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
