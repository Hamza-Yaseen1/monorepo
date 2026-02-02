import { Timestamp } from 'firebase/firestore';

export interface Comment {
    id: string; // Firestore Document ID
    postId: string; // Foreign Key: Post.id
    authorId: string; // Foreign Key: User.uid
    content: string;
    createdAt: Timestamp;
}
