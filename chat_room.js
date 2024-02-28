// Your web app's Firebase configuration
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
  
    
  
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "chat_page.html";
  }
  
  
  
  
  
  
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name -"+ Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirect(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
  }
  
  