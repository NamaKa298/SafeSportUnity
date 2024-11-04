import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthUserContext';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { getAllTrainingActivities } from './TrainingActivityData';
import { Button } from '@/components/ui/button';
import { handleEmailClick } from './component/envoi-email';

interface Activity {
    id: string;
    date: string;
    hour: string;
    trainingType: string;
    createdBy: string; // Vérification du nom d'auteur
    userName: string;
    email: string;
}

const TrainingPartnerList: React.FC = () => {
    const { authUser } = useAuth();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchActivities = async () => {
            if (authUser) {
                try {
                    const db = getFirestore();
                    const activitiesCollection = collection(db, 'users', authUser.uid, 'trainingWithPartners');
                    const activitiesSnapshot = await getDocs(activitiesCollection);
                    const activitiesList = activitiesSnapshot.docs.map(doc => {
                        const data = doc.data();
                        return {
                            userName: authUser.userDocument.userName,
                            email: authUser.userDocument.email,
                            id: doc.id,
                            date: data.date,
                            hour: data.hour,
                            trainingType: data.trainingType,
                            createdBy: data.createdBy || authUser.userDocument.userName,
                        };
                    }) as Activity[];

                    // Filtrer les activités vides
                    const filteredActivitiesList = activitiesList.filter(activity => 
                        activity.date && activity.hour && activity.trainingType
                    );

                    setActivities(filteredActivitiesList);
                } catch (error) {
                    console.error('Error fetching activities:', error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchActivities();
    }, [authUser]);

    useEffect(() => {
        const recupactivites = async () => {
            try {
                const externalActivities = await getAllTrainingActivities();
                console.log("voilà toutes les activités :", externalActivities);

                // Filtrer les activités vides
                const filteredExternalActivities = externalActivities.filter(activity => 
                    activity.date && activity.hour && activity.trainingType
                );

                // Utiliser un ensemble pour éviter les doublons
                const existingIds = new Set(activities.map(activity => activity.id));
                const newActivities = filteredExternalActivities.filter(activity => !existingIds.has(activity.id));

                // Mettre à jour l'état avec les nouvelles activités
                setActivities(prevActivities => [...prevActivities, ...newActivities]);

            } catch (error) {
                console.error("Erreur lors de la récupération des activités :", error);
            } finally {
                setLoading(false);
            }
        };

        recupactivites();
    }, []);

    // Vérification des dates et suppression des activités expirées
    const currentDate = new Date();
    const validActivities = activities.filter(activity => {
        const activityDate = new Date(activity.date);
        const [activityHour, activityMinute] = activity.hour.split(':').map(Number);
        activityDate.setHours(activityHour, activityMinute);

        if (activityDate < currentDate) {
            // Supprimer l'activité de la base de données
            const db = getFirestore();
            deleteDoc(doc(db, 'users', authUser.uid, 'trainingWithPartners', activity.id))
                .then(() => console.log(`Activité supprimée : ${activity.id}`))
                .catch(error => console.error(`Erreur lors de la suppression de l'activité : ${error}`));
            return false; // Ne pas inclure l'activité dans la liste
        }
        return true; // Inclure l'activité dans la liste
    });

    const sortedActivities = validActivities.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        // Comparer les dates d'abord
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;

        // Comparer les heures si les dates sont identiques
        return a.hour.localeCompare(b.hour);
    });

    return (
        <div className="flex flex-col grid-cols-2 space-y-3 pb-4">
            {sortedActivities.map(activity => (
                <div key={activity.id} className="p-4 border rounded shadow bg-gray-200 border-gray-400 bg-white">
                    <h2 className="text-lg font-bold pb-4">{activity.userName}</h2>
                    <div className="flex justify-between">
                        <div><div className="font-bold">Date</div>{new Date(activity.date).toLocaleDateString()}</div>
                        <div><div className="font-bold">Hour</div>{activity.hour}</div>
                        <div><div className="font-bold">Training Type</div>{activity.trainingType}</div>
                    </div>
                    {activity.email !== authUser.userDocument.email && (
                        <Button 
                            onClick={() => handleEmailClick(activity.userName, activity.email)}
                            className="mt-2 p-2 bg-primary text-white rounded "
                        >
                            Contact
                        </Button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TrainingPartnerList;