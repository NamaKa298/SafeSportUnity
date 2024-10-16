import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/user";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null);
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

    const formatAuthUser = (user: UserInterface) => ({
        uid: user.uid,
        email: user.email,
        firstName: user.firstName,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
    })

    // ici on met à jour les données de l'utilisateur
    const getUserDocument = async (user: UserInterface) => {
        if (auth.currentUser) {
            const documentRef = doc(db, "users", auth.currentUser.uid)
            const compactUser = user;
            // onSnapshot :  outil qui permet d'écouter un document
            // pour mettre à jour db par exemple.
            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument;
                }
                setAuthUser((prevAuthUser) => ({
                    ...prevAuthUser,
                    ...compactUser,
                }));
                setAuthUserIsLoading(false);
            });
        }
    };

    const authStateChanged = async (authState: UserInterface | User | null) => {
        if (!authState) {
            setAuthUser(null);
            setAuthUserIsLoading(false);
            return;
        };
        setAuthUserIsLoading(true);
        const formattedUser = formatAuthUser(authState);
        await getUserDocument(formattedUser);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        authUserIsLoading,
    };
}