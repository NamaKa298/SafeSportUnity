import { Timestamp } from "firebase/firestore";

export interface UserInterface {
    uid: string;
    email: string | null;
    firstName: string | null;
    displayName: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    photoURL: string | null;
    userDocument?: UserDocument;
}

export interface UserDocument {
    uid: string;
    confirmEmail: string;
    confirmPassword: string;
    creation_date: Timestamp;
    email: string;
    firstName: string;
    lastName: string;
    newEmail: string;
    password: string;
    postalAddress: string;
    userName: string;
}