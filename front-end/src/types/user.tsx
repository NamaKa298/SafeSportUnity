import { Timestamp } from "firebase/firestore";

export interface UserInterface {
    uid: string;
    email: string | null;
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
    date: Date;
    hour: Timestamp;
    trainingType: string;
    email: string;
    userName: string;
}
