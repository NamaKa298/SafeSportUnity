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
    pseudoEmail?: string;
    password: string;
    postalAddress: string;
    userName: string;
    partnersProfile: {
        address: string;
        date: string;
        hour: string;
        trainingType: string;
    },
}
