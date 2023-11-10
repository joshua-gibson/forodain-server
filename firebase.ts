const { initializeApp, cert } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

export default { db };