import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

// Fonction pour sauvegarder les données dans Firestore
export const saveUserData = async (userId: string, userData: object, userTrainingData: object) => {
    try {
        // Vérification que userData et userTrainingData sont bien des objets valides
        if (!userData || typeof userData !== "object") {
            throw new Error("Invalid userData: data must be a valid object.");
        }

        if (!userTrainingData || typeof userTrainingData !== "object") {
            throw new Error("Invalid userTrainingData: data must be a valid object.");
        }

        // Référence au document principal dans la collection 'users'
        //const userDocRef = doc(db, "users", userId);
        
        // Enregistrer les données de l'utilisateur dans 'users/{userId}'
        //await setDoc(userDocRef, userData);

        // Référence à la sous-collection 'userTrainingData' dans 'users/{userId}'
        const userTrainingCollectionRef = collection(db, `users/${userId}/userTrainingData`);

        // Ajouter un nouveau document dans la sous-collection 'userTrainingData'
        await setDoc(doc(userTrainingCollectionRef), userTrainingData);

        return { success: true };
    } catch (error) {
        const firebaseError = error as FirebaseError;
        console.error("Erreur lors de l'enregistrement des données utilisateur :", firebaseError.message);
        return {
            error: {
                code: firebaseError.code || "invalid-argument",
                message: firebaseError.message || "Invalid data format",
            },
        };
    }
};
