import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthUserContext';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';

interface Activity {
    id: string;
    date: string;
    hour: string;
    trainingType: string;
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
                        console.log('Fetched data:', data); // Log the fetched data
                        const trainingData = data.traininWithPartners; // Accéder aux données imbriquées
                        return {
                            id: doc.id,
                            date: trainingData.date,
                            hour: trainingData.hour,
                            trainingType: trainingData.trainingType,
                        };
                    }) as Activity[];
                    console.log('Fetched activities:', activitiesList); // Log the fetched activities
                    const currentDate = new Date();
                    const validActivities = activitiesList.filter(activity => {
                        const activityDate = new Date(activity.date);
                        const [activityHour, activityMinute] = activity.hour.split(':').map(Number);
                        activityDate.setHours(activityHour, activityMinute);

                        if (activityDate < currentDate) {
                            // Supprimer l'événement passé de Firestore
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col grid-cols-2 space-y-3">
            {activities.map(activity => (
                <div key={activity.id} className="p-4 border rounded shadow bg-gray-200  border-gray-400 bg-white"
                >
                    <h2 className="text-lg font-bold pb-4">{authUser.userDocument.userName}</h2>
                    <div className='flex justify-between'>
                    <p><div className='font-bold'> Date </div>{activity.date}</p>
                    <p><div className='font-bold'>Hour </div>{activity.hour}</p>
                    <p><div className='font-bold'>Training Type </div>{activity.trainingType}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrainingPartnerList;