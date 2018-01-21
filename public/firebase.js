// Initialize Firebase
var config = {
  apiKey: "AIzaSyDCP-6HWlf1sVRbWtuccBe0g93gBrPHoGA",
  authDomain: "tutortimetable.firebaseapp.com",
  databaseURL: "https://tutortimetable.firebaseio.com",
  projectId: "tutortimetable",
  storageBucket: "tutortimetable.appspot.com",
  messagingSenderId: "1084343247533"
};
firebase.initializeApp(config);

// let provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().getRedirectResult().then(function (result) {
//   if (result.credential) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//   }
//   else {
//     firebase.auth().signInWithRedirect(provider);
//   }
//   // The signed-in user info.
//   var user = result.user;
//   // ...
//   console.log('Success! User:', JSON.stringify(user));
// }).catch(function (error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.error(error);
//
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// })