import { Timestamp } from "firebase/firestore";

export interface UserInterface {
    uid: string;
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
    password: string;
    postalAddress: string;
    userName: string;
}

export interface trainingWithPartners {
    address: string;
    date: string;
    hour: string;
    trainingType: string;
    uid: string;
    email: string;
    userName: string;
}