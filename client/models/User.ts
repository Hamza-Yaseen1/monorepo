import { Timestamp } from 'firebase/firestore';

export interface User {
    uid: string; // Firebase Auth UID
    walletAddress: string; // Blockchain wallet (e.g., MetaMask)
    username: string;
    bio?: string;
    profilePic?: string;
    followers: number;
    following: number;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
