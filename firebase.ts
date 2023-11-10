import { getFirestore } from 'firebase/firestore';
import admin from 'firebase-admin';

const serviceAccount = process.env.CREDS;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any)
});
const db = admin.firestore();


export default db;