import { FormsType } from "@/types/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import React from 'react';
import { TrainingPartnersFormFieldsType } from '@/types/forms';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { set } from "react-hook-form";


interface Props {
    form: FormsType;
    markers: any;
    setMarkers: any;
}
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
export const TrainingPartnersForm = ({ form, markers, setMarkers }: Props) => {
    const { register, errors, isLoading, onSubmit, handleSubmit } =
        form;
    const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
    const [address, setAddress] = useState('');


    const [formDate, setFormDate] = useState<string>('');
    const [formHour, setFormHour] = useState<string>('');
    const [formType, setFormType] = useState<string>('');
    const [formAddress, setFormAddress] = useState<string>('');
    const [formCoordinates, setFormCoordinates] = useState<number[]>([]);

    const [newMarker, setNewMarker] = useState<any>({
        address: '',
        coordinates: [0, 0],
        type: '',
        date: '',
        hour: '',
    });

    const handleAddressChange = async (query: string) => {
        console.log("Recherche d'adresse pour :", query); // Ajoutez
        if (query.length < 3) {
            setAddressSuggestions([]);
            return; // Ne pas faire de requête si moins de 3 caractères
        }
        try {
            const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`);
            console.log("Réponse de l'API :", response); // Ajoutez ceci pour vérifier la réponse
            const data = await response.json();
            console.log("Données récupérées de l'API :", data); // Vérifiez les données ici
            if (data.features) {
                const options = data.features.map((item: any) => ({
                    label: item.properties.label,
                    coordinates: item.geometry.coordinates,
                }));
                setAddressSuggestions(options);
            } else {
                setAddressSuggestions([]); // Vider les suggestions si aucune donnée
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des adresses :", error);
            setAddressSuggestions([]);
        }
    };
    let typingTimeout: NodeJS.Timeout;

    const handleAddressInputChange = (text: string) => {
        setAddress(text);
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
            handleAddressChange(text);
        }, 1500);
    };

    const handleSuggestionClick = (suggestion: any) => {
        setAddress(suggestion.label);
        setAddressSuggestions([]); // Vider les suggestions après sélection
        setFormCoordinates(suggestion.coordinates);
        setFormAddress(suggestion.label);
    };

    function handleSubmitMarker() {

        if (!formDate || !formHour || !formType || !formAddress) {
            return;
        }


        const [lat, lng] = formCoordinates;

        setMarkers([...markers, {
            coordinates: [lng, lat],
            address: formAddress,
            type: formType,
            date: formDate,
            hour: formHour,

        }]);

        saveTrainingPartnersDataToFirestore({
            date: formDate,
            hour: formHour,
            trainingType: formType,
            address: formAddress,
            coordinates: [lng, lat],
        });


        setAddress('');
        setAddressSuggestions([]);
        setFormDate('');
        setFormHour('');
        setFormType('');
        setFormAddress('');
        setFormCoordinates([]);

    }

    useEffect(() => {
        console.log('Markers:', newMarker);
    }, [newMarker]);

    return (
        <>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1 space-y-4">
                        <Command className="h-auto">

                                <div className="text-caption1 h-10 mb-4">
                                    Address
                                </div>
                                <CommandInput
                                    placeholder="Address"
                                    id="address"
                                    className="flex h-22 border py-3 border-gray-400 rounded-md bg-transparent pl-4 text-sm outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400"
                                    value={address}
                                    onValueChange={handleAddressInputChange}
                                />

                                <CommandList className="h-auto">

                                    <CommandGroup>
                                        {addressSuggestions.length > 0 && (
                                            <CommandList>
                                                {addressSuggestions.map((suggestion) => (
                                                    <div onClick={() => handleSuggestionClick(suggestion)}>
                                                        <CommandItem
                                                            key={suggestion.label}
                                                            className=" cursor-pointer hover:bg-gray-100"
                                                        >
                                                            {suggestion.label}
                                                        </CommandItem>
                                                    </div>
                                                ))}
                                            </CommandList>
                                        )}
                                    </CommandGroup>
                                </CommandList>
                         
                        </Command>
                        <div className="text-caption1 h-8">
                            Date
                        </div>
                        <Input
                            className="flex h-22 border border-gray-400 rounded-md bg-transparent p-4 py-3 text-sm outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400"
                            placeholder="Date"
                            type="date"
                            value={formDate}
                            onChange={(e) => setFormDate(e.target.value)}
                            id="date"
                        />
                    </div>
                    <div className="col-span-1 space-y-4">
                        <div className="text-caption1 h-10">
                            Hour
                        </div>
                        <Input
                            className="flex h-22 border border-gray-400 rounded-md bg-transparent p-4 py-3 text-sm outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 "
                            placeholder="Hour of the sport activity"
                            type="time"
                            value={formHour}
                            onChange={(e) => setFormHour(e.target.value)}
                            id="hour"
                        />
                        <div className="text-caption1 h-10">
                            Type of Sport
                        </div>
                        <Input
                            className="flex h-22 border border-gray-400 rounded-md bg-transparent p-4 py-3 text-sm outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400"
                            placeholder="Type of sport"
                            type="text"
                            value={formType}
                            onChange={(e) => setFormType(e.target.value)}
                            id="trainingType"
                        />
                    </div>
                </div>
                <div className="items-center text-center justify-center pr-10 pb-10 pt-10">
                    <Button
                        type="submit"
                        variant="accent"
                        size="medium"
                        onClick={handleSubmitMarker}
                        className="bg-primary hover:bg-primary-400 text-white rounded text-caption3 font-medium px-[14px] py-[12px]  18 relative animate text-white"
                    >
                        Share my sport activity !
                    </Button>
                </div>
            </div>
        </>
    );

};
