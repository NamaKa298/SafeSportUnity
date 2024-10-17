import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,
    updatePassword,
    getAuth,
    verifyBeforeUpdateEmail
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
// import {db} from "@/config/firebase-config";
// import { doc, updateDoc } from "firebase/firestore";

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

export const firebaseUpdatePassword = async (password: string) => {
    const auth = getAuth();
    const user = auth.currentUser;
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

export const firebaseUpdateEmail = async (newEmail: string) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            await verifyBeforeUpdateEmail(user, newEmail);

            await signOut(auth);
            window.location.reload(); // recharge la page après avoir déconnecter l'utilisateur
            return { data: true };
        } else {
            console.log("No user is signed in.");
        }
    } catch (error) {
        if (error instanceof FirebaseError) {
            console.error("Firebase error updating email: ", error.code, error.message);
            return { error: error.message };
        } else {
            console.error("Unknown error updating email: ", error);
            return { error: "Unknown error" };
        }
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// tester si cela est utile et si cela fonctionne
// export const firebaseUpdateUser = async (data: any) => {
//     try {
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (user) {
//             // Mise à jour des champs personnalisés dans Firestore
//             const userDocRef = doc(db, "users", user.uid);
//             await updateDoc(userDocRef, {
//                 firstName: data.firstName,
//                 lastName: data.lastName,
//                 postalAddress: data.postalAddress,
//                 userName: data.userName
//             });

//             console.log("User data updated successfully.");
//             return { data: true };
//         } else {
//             throw new Error("No authenticated user found");
//         }
//     } catch (error) {
//         if (error instanceof FirebaseError) {
//             console.error("Firebase error updating user: ", error.code, error.message);
//             return { error: error.message };
//         } else if (error instanceof Error) {
//             console.error("Error updating user: ", error.message);
//             return { error: error.message };
//         } else {
//             console.error("Unknown error updating user: ", error);
//             return { error: "An unknown error occurred" };
//         }
//     }
// }

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