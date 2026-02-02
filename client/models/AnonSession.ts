import { Timestamp } from 'firebase/firestore';

export interface AnonSession {
    id: string; // Firestore Document ID
    tempId: string; // Anonymous Session identifier
    expiresAt: Timestamp;
    permissions: string[]; // ['read', 'preview', etc.]
    createdAt: Timestamp;
}
