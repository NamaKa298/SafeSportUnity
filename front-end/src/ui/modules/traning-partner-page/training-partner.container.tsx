import React, { useEffect } from 'react';
import dynamic from "next/dynamic";
import { TrainingPartnersView } from './training-partner.view';
import { TrainingPartnersFormFieldsType } from '@/types/forms';
import { useAuth } from '@/context/AuthUserContext';
import { useToggle } from '@/hooks/use-toggle';
import { SubmitHandler, useForm } from 'react-hook-form';
import { firestoreUpdateDocument } from "@/api/firestore";
import { getAuth } from "firebase/auth";



const MapWithNoSSR = dynamic(() => import('@/ui/modules/traning-partner-page/component/Maps'), {
	ssr: false,
});

export default function TrainingPartnersContainer() {

	const { authUser } = useAuth();
	const { value: isLoading, setValue: setIsLoading } = useToggle();

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setValue,
	} = useForm<TrainingPartnersFormFieldsType>();

	const { address, date, hour, trainingType } = authUser.userDocument;

	useEffect(() => {
		const fieldsToUpdate: (
			| "address"
			| "date"
			| "hour"
			| "trainingType"
		)[] = ["address", "date", "hour", "trainingType"];

		for (const field of fieldsToUpdate) {
			setValue(field, authUser.userDocument[field]);
		}
	}, []);

	const handleUpdateUserDocument = async (
		formData: TrainingPartnersFormFieldsType
	) => {
		const auth = getAuth();
		if (auth.currentUser) {
			setIsLoading(true);
			const { error } = await firestoreUpdateDocument(
				"users",
				authUser.uid,
				formData
			)
			if (error) {
				setIsLoading(false);
				return;
			}
		};
	};

	const onSubmit: SubmitHandler<TrainingPartnersFormFieldsType> = async (formData) => {
		handleUpdateUserDocument(formData);
	};

	return (
		<div className='flex'>
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
			<MapWithNoSSR />
			{/* Appel du composant Map */}
			
		</div>
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


