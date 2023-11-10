// Imports
const firestoreService = require("firestore-export-import");
const firebaseConfig = require("./config.js");
const serviceAccount = require("./creds.json");

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    await firestoreService.initializeApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log("Firebase Initialized");

    await firestoreService.restore("./data/stories/ch01.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
