import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthUserContext';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { getAllTrainingActivities } from './TrainingActivityData';
import { Activity } from 'lucide-react';
import { handleEmailClick } from './component/envoi-email';
import { Button } from '@/components/ui/button';


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
                        console.log('Fetched data:', data);
                        return {
                            userName: authUser.userDocument.userName,
                            email: authUser.userDocument.email, // Ajoutez l'adresse e-mail ici
                            id: doc.id,
                            date: data.date,
                            hour: data.hour,
                            trainingType: data.trainingType,
                            createdBy: data.createdBy || authUser.userDocument.userName, // Utilise le nom de l'utilisateur actuel par défaut
                        };
                    }) as Activity[];

                    console.log('Fetched activities:', activitiesList);
                    const currentDate = new Date();
                    const validActivities = activitiesList.filter(activity => {
                        const activityDate = new Date(activity.date);
                        const [activityHour, activityMinute] = activity.hour.split(':').map(Number);
                        activityDate.setHours(activityHour, activityMinute);

                        if (activityDate < currentDate) {
                            deleteDoc(doc(db, 'users', authUser.uid, 'trainingWithPartners', activity.id));
                            return false;
                        }
                        return true;
                    });

                    setActivities(validActivities);
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

                setActivities(prevActivities => [...prevActivities, ...externalActivities]);

            } catch (error) {
                console.error("Erreur lors de la récupération des activités :", error);
            }
            finally {
                setLoading(false);
            }
        };

        recupactivites();
    }, []);

    console.log('Activities return:', activities);

    const sortedActivities = activities.sort((a, b) => {
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
                    {activity.email !== authUser.userDocument.email && ( // Vérifiez si ce n'est pas l'utilisateur actuel

                    <Button 
                        onClick={() => handleEmailClick(activity.userName, activity.email)} // Passez l'objet activity complet
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
