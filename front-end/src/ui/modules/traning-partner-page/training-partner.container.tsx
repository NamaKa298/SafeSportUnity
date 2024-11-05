import React from 'react';
import { TrainingPartnersView } from './training-partner.view';
import { TrainingPartnersFormFieldsType } from '@/types/forms';
import { useAuth } from '@/context/AuthUserContext';
import { useToggle } from '@/hooks/use-toggle';
import { SubmitHandler, useForm } from 'react-hook-form';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
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

            // Utiliser Firestore pour générer un ID unique pour chaque activité
            const activityDocRef = doc(activitiesCollection);

            await setDoc(activityDocRef, {
                trainingWithPartners: data,
                createdBy: userId, // Ajoutez ce champ pour vérifier l'auteur
                date: data.date,
                hour: data.hour,
                email: auth.currentUser.email, // Remplacez authUser par auth.currentUser
                last_update: Timestamp.now(),
            });

            console.log(`Données d'entraînement enregistrées sous l'ID ${activityDocRef.id} :`, data);
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
        <>
            <TrainingPartnersView
                address="some address" // Add the address property here
                form={{
                    errors,
                    handleSubmit,
                    isLoading,
                    onSubmit,
                    register,
                    control,
                }}

            />
        </>
    );
};
