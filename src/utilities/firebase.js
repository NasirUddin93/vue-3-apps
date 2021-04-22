// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
// Firebase App (the core Firebase SDK) is always required and must be listed first

// Add the Firebase products that you want to use
import "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC0zlQPYL8mr_7VM49P4OM0KQ7zH4Bys3I",
  authDomain: "vue-full-course-26b08.firebaseapp.com",
  projectId: "vue-full-course-26b08",
  storageBucket: "vue-full-course-26b08.appspot.com",
  messagingSenderId: "756128692164",
  appId: "1:756128692164:web:98ccad68f26a61c2121691"
};

firebase.initializeApp(firebaseConfig);
export default firebase; 