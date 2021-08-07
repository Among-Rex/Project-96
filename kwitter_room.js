function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       var firebaseConfig = {
            apiKey: "AIzaSyAajsglz7g-oqeImFli0Hger6PIitegAnQ",
            authDomain: "project-94-65761.firebaseapp.com",
            projectId: "project-94-65761",
            storageBucket: "project-94-65761.appspot.com",
            messagingSenderId: "344974047591",
            appId: "1:344974047591:web:4adbd43b0bf23e4f9997c2"
          };
          firebase.initializeApp(firebaseConfig);
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
  Room_names = childKey;
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  });
});
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}