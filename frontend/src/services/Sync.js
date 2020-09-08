import io from 'socket.io-client';

//firebase initialization
const firebase = require('firebase');
require('firebase/firestore')
firebase.initializeApp({
  apiKey: "AIzaSyDmFE8_uS6DnJ1k6O3aeDm2WcwDFVpjK6E",
  authDomain: "real-time-code-editor.firebaseapp.com",
  databaseURL: "https://real-time-code-editor.firebaseio.com",
  projectId: "real-time-code-editor",
  storageBucket: "real-time-code-editor.appspot.com",
  messagingSenderId: "66644682942",
  appId: "1:66644682942:web:78ec1863fda512287a96ef"
});
const codeCollection = firebase.firestore().collection('code')

//socket initialization
const socket = io('http://localhost:4000');

export {socket, codeCollection};