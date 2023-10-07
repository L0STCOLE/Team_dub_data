// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a Firestore reference
const db = firebase.firestore();

// Example: Add data to Firestore
db.collection("users").add({
    name: "John Doe",
    email: "john@example.com"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

// Example: Read data from Firestore
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
