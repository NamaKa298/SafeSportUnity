import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

export const getTrainingActivities = async (userId: string) => {
    const db = getFirestore();
    const activitiesRef = collection(db, "users", userId, "trainingWithPartners");
    const snapshot = await getDocs(activitiesRef);
    const activities = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return activities;
};