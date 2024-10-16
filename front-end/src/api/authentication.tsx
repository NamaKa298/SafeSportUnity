import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification, updatePassword, getAuth } from "firebase/auth";
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

export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
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

export const firebaseUpdatePassword = async (password: any) => {
    const a = getAuth();
    const user = a.currentUser;
    if (user) {
        try {
            await updatePassword(
                user,
                password
            );
            return { data: true };
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
    }
}

export const firebaseLogOutUser = async () => {
    try {
        await signOut(
            auth
        );
        return { data: true };
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

export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(
            auth,
            email
        );
        return { data: true };
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

export const sendEmailVerificationProcedure = async () => {
    if (auth.currentUser) {
        try {
            await sendEmailVerification(auth.currentUser);
            return { data: true };
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
    } else {
        return {
            error: {
                code: "unknow",
                message: "An error occured, please try again",
            }
        }
    }
};

// export const updateUserIdentificationData = async (uid: string, data: any) => {
//     const result = await fetch('https//...', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             uid: uid,
//             data: data,
//         }),
//     }),

// if (!result.ok) {
//     const errorResponse = await result.json();
//     const firebaseError = errorResponse as FirebaseError;

//     return {
//         error: {
//             code: firebaseError.code,
//             message: firebaseError.message,
//         },
//     };
// }
// return { data: true };
// }