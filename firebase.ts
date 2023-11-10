import { getFirestore } from 'firebase/firestore';
import serviceAccount from './creds.json';
import admin from 'firebase-admin';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any)
});
const db = admin.firestore();


export default db;