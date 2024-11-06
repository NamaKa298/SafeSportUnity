/* eslint-disable */
import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { useState } from "react";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"


interface Props {
    form: FormsType;
    address: string;
}

export const TrainingPartnersForm = ({ form }: Props) => {
    const { register, errors, isLoading, onSubmit, handleSubmit } =
        form;
    const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
    const [address, setAddress] = useState('');

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
                    value: item.properties.label,
                    label: item.properties.label,
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

    const handleSuggestionClick = (suggestion: string) => {
        setAddress(suggestion);
        setAddressSuggestions([]); // Vider les suggestions après sélection
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 space-y-4">
                    <Command className="h-auto">
                        <div className="text-caption1 h-10">
                        Address
                        </div>
                        <CommandInput
                            placeholder="Address"
                            id="address"
                            className="flex h-22 border border-gray-400 rounded-md bg-transparent p-4 py-3 text-sm outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 "
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
                                                key={suggestion}
                                                className="p-2 cursor-pointer hover:bg-gray-100"
                                            >
                                                    {suggestion}
                                            </CommandItem>
                                            </div>
                                        ))}
                                    </CommandList>
                                )}
                            </CommandGroup>
                        </CommandList>
                    </Command>


                    <Input
                        label="Date"
                        isLoading={isLoading}
                        placeholder="Date"
                        type="date"
                        register={register}
                        errors={errors}
                        errorMsg="Date is required"
                        id="date"
                    />
                </div>
                <div className="col-span-1 space-y-4">
                    <Input
                        label="Hour"
                        isLoading={isLoading}
                        placeholder="Hour of the sport activity"
                        type="time"
                        register={register}
                        errors={errors}
                        errorMsg="Hour is required"
                        id="hour"
                    />
                    <Input
                        label="Type Of Sport"
                        isLoading={isLoading}
                        placeholder="Type of sport"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Type of sport is required"
                        id="trainingType"
                    />
                </div>
            </div>
            <div className="items-center text-center justify-center pr-10 pb-10 pt-10">
                <Button
                    isLoading={isLoading}
                    type="submit"
                >
                    Share my sport activity !
                </Button>
            </div>
        </form>
    );
};
