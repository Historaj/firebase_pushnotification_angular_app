importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');


firebase.initializeApp({
  // histo op
  // apiKey: "AIzaSyBeUFy8AEpzUEosnobli9i2aIaehlq2V9E",
  // authDomain: "hisop-15ab6.firebaseapp.com",
  // projectId: "hisop-15ab6",
  // storageBucket: "hisop-15ab6.appspot.com",
  // messagingSenderId: "741577027143",
  // appId: "1:741577027143:web:d1a0f9841a7961e7d84b62",
  // measurementId: "G-ZFXXEGDSRL"

  //prod
  apiKey: "AIzaSyCQvaUd4XhXlYNWPO36Ss9NUT6JhOnt4YQ",
  authDomain: "hisopprod.firebaseapp.com",
  projectId: "hisopprod",
  storageBucket: "hisopprod.appspot.com",
  messagingSenderId: "873085154475",
  appId: "1:873085154475:web:7a9bdd91026ddd391273ee",
  measurementId: "G-T6JWVC9TRW"
});
const messaging = firebase.messaging();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }
