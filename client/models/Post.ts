import { Timestamp } from 'firebase/firestore';

export interface Post {
    id: string; // Firestore Document ID
    authorId: string; // Foreign Key: User.uid
    content: string;
    mediaUrl?: string; // Image or Video URL
    mediaType: 'image' | 'video' | 'none';
    blockchainHash: string; // Transaction hash from Smart Contract deployment
    likesCount: number;
    commentsCount: number;
    tags: string[];
    createdAt: Timestamp;
}
