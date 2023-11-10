import admin from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();

const creds = process.env.CREDS as string;
const serviceAccount = JSON.parse(creds);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any)
});
const db = admin.firestore();


export default db;