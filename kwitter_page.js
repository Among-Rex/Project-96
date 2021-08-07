var firebaseConfig = {
      apiKey: "AIzaSyAajsglz7g-oqeImFli0Hger6PIitegAnQ",
      authDomain: "project-94-65761.firebaseapp.com",
      projectId: "project-94-65761",
      storageBucket: "project-94-65761.appspot.com",
      messagingSenderId: "344974047591",
      appId: "1:344974047591:web:4adbd43b0bf23e4f9997c2"
    };
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } 
   });  
}); 
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}