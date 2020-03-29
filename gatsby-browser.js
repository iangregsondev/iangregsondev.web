/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics"

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDso-Wn-4-FcpnQJMBqAhzjA__C-a0CcDg",
  authDomain: "iangregsondev.firebaseapp.com",
  databaseURL: "https://iangregsondev.firebaseio.com",
  projectId: "iangregsondev",
  storageBucket: "iangregsondev.appspot.com",
  messagingSenderId: "615871027227",
  appId: "1:615871027227:web:c391b868da3371947580be",
  measurementId: "G-THRB1FX6GB",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Add analytics
firebase.analytics()

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// Import prismjs syntax highlighting css
import "prismjs/themes/prism.css"

// Import katex mathematical css
import "katex/dist/katex.min.css"
