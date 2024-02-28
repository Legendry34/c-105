// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDjYNqMmx7_M0pGan3DtjDvpgsyAh-Wt4M",
    authDomain: "kwitter-941d4.firebaseapp.com",
    databaseURL: "https://kwitter-941d4-default-rtdb.firebaseio.com",
    projectId: "kwitter-941d4",
    storageBucket: "kwitter-941d4.appspot.com",
    messagingSenderId: "812958474364",
    appId: "1:812958474364:web:cf26df87566cc9b15ee9f9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



