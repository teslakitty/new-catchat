// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDIdSpACQbc1-_JICLQ6gRjl_YrX25eiOA",
  authDomain: "mini-diary-organization.firebaseapp.com",
  databaseURL: "https://mini-diary-organization-default-rtdb.firebaseio.com",
  projectId: "mini-diary-organization",
  storageBucket: "mini-diary-organization.appspot.com",
  messagingSenderId: "542075449644",
  appId: "1:542075449644:web:26133a6448c78f79927c89",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



