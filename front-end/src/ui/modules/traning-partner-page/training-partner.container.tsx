import React from 'react';
import { TrainingPartnersView } from './training-partner.view';
import { TrainingPartnersFormFieldsType } from '@/types/forms';
import { useAuth } from '@/context/AuthUserContext';
import { useToggle } from '@/hooks/use-toggle';
import { SubmitHandler, useForm } from 'react-hook-form';
import { collection, doc, getDocs, setDoc, Timestamp } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';





const saveTrainingPartnersDataToFirestore = async (data: TrainingPartnersFormFieldsType) => {
    const auth = getAuth();
    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const firestore = getFirestore();

        try {
            // Accéder à la sous-collection pour compter les documents existants
            const activitiesCollection = collection(firestore, "users", userId, "trainingWithPartners");
            const activitiesSnapshot = await getDocs(activitiesCollection);
            const activityCount = activitiesSnapshot.size + 1; // +1 pour la nouvelle activité

            const activityId = `activity${activityCount}`; // Définir un ID unique pour chaque activité

            await setDoc(doc(activitiesCollection, activityId), {
                traininWithPartners: data,
                last_update: Timestamp.now(),
            });

            console.log(`Données d'entraînement enregistrées sous l'ID ${activityId} :`, data);
        } catch (error) {
            console.error("Erreur lors de l'enregistrement des données d'entraînement :", error);
        }
    } else {
        console.error("Utilisateur non authentifié !");
    }
};

export default function TrainingPartnersContainer() {
    useAuth();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
        register,
    } = useForm<TrainingPartnersFormFieldsType>();

    const onSubmit: SubmitHandler<TrainingPartnersFormFieldsType> = async (data) => {
        const currentDate = new Date();
        const activityDate = new Date(data.date);
        const [activityHour, activityMinute] = data.hour.split(':').map(Number);
        activityDate.setHours(activityHour, activityMinute);

        if (activityDate < currentDate) {
            toast.error('The event date and time have already passed.');
            return;
        }
        setIsLoading(true);
        try {
            await saveTrainingPartnersDataToFirestore(data);
            toast.success('Training data saved successfully!');
            reset();
        } catch (error) {
            console.error('Error saving training data: ', error);
            alert('Failed to save training data.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <TrainingPartnersView
            form={{
                errors,
                handleSubmit,
                isLoading,
                onSubmit,
                register,
                control,
            }}

        />
    );
};

// import dynamic from 'next/dynamic';
// import { useEffect, useState, useMemo } from 'react';
// import { LatLngExpression, Map } from 'leaflet'; // Import Map type
// import { collection, doc, getDocs, setDoc, Timestamp } from 'firebase/firestore';
// import { useToggle } from '@/hooks/use-toggle';
// import { TrainingPartnersFormFieldsType } from '@/types/forms';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { db } from '@/config/firebase-config';
// import { getAuth } from 'firebase/auth';
// import { UserDocument } from '@/types/user';

// if (typeof window !== 'undefined') {
//     import('leaflet/dist/leaflet.css').then(() => { });
//     import('leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css').then(() => { });
//     import('leaflet-defaulticon-compatibility').then(() => { });
// }

// declare module 'leaflet-defaulticon-compatibility';

// const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

// const savePositionToFirestore = async (latitude: number, longitude: number) => {
//     const auth = getAuth();
//     if (auth.currentUser) {
//         const userId = auth.currentUser.uid;
//         try {
//             await setDoc(doc(db, "users", userId), {
//                 partnersProfile: {
//                     latitude,
//                     longitude,
//                     last_update: Timestamp.now(),
//                 },
//             }, { merge: true });
//             console.log("Position enregistrée :", { latitude, longitude });
//         } catch (error) {
//             console.error("Erreur lors de l'enregistrement de la position :", error);
//         }
//     } else {
//         console.error("Utilisateur non authentifié !");
//     }
// };


