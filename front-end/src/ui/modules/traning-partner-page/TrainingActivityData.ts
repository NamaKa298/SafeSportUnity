import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

export const getAllTrainingActivities = async () => {
    const db = getFirestore();
    const usersRef = collection(db, "users");
    const allActivities = [];

    try {
        // Récupérer tous les utilisateurs
        const usersSnapshot = await getDocs(usersRef);

        // Pour chaque utilisateur, récupérer leurs activités
        for (const userDoc of usersSnapshot.docs) {
            const userId = userDoc.id;
            const activitiesRef = collection(db, "users", userId, "trainingWithPartners");
            const activitiesSnapshot = await getDocs(activitiesRef);
            const userData = userDoc.data();
            const userName = userData.userName; // Assure-toi que le champ s'appelle 'userName'
            const email = userData.email;
            
            // Ajouter les activités de cet utilisateur au tableau
            activitiesSnapshot.docs.forEach(activityDoc => {
                const activityData = activityDoc.data();
                allActivities.push({
                    id: activityDoc.id,
                    ...activityData,
                    date: activityData.trainingWithPartners.date,
                    hour: activityData.trainingWithPartners.hour,
                    trainingType: activityData.trainingWithPartners.trainingType,
                    createdBy: userId, // ajouter l'ID utilisateur pour chaque activité
                    userName: userName, // utiliser le nom d'utilisateur récupéré
                    email: email,
                });
            });
        }
        
    } catch (error) {
        console.error("Erreur lors de la récupération des activités d'entraînement pour tous les utilisateurs :", error);
    }
    console.log("voilà toutes les activités allActivities:", allActivities);
    return allActivities;
};
