import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return { data: userCredential.user };
    } catch (error) {
        const firebaseError = error as FirebaseError;
        //... @todo format error
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            },
        };
    }
};
