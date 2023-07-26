var firebaseConfig = {
  apiKey: "AIzaSyDov49O5pAivcAMChYc1K6l3ZixljE_y50",
  authDomain: "kwitterdatabase-aff46.firebaseapp.com",
  databaseURL: "https://kwitterdatabase-aff46-default-rtdb.firebaseio.com",
  projectId: "kwitterdatabase-aff46",
  storageBucket: "kwitterdatabase-aff46.appspot.com",
  messagingSenderId: "855774581805",
  appId: "1:855774581805:web:000cbb93f1bf80bb0014a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
