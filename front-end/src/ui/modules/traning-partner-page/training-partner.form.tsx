import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { useState } from "react";


interface Props {
    form: FormsType;
}

export const TrainingPartnersForm = ({ form }: Props) => {
    const { register, errors, isLoading, onSubmit, handleSubmit } =
    form;
    const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
    const [address, setAddress] = useState('');

const fetchAddressSuggestions = async (query: string) => {
    try {
        const response = await fetch(
            `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`
        );

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des suggestions');
        }

        const data = await response.json();
        /*eslint-disable-next-line*/
        setAddressSuggestions(data.features.map((feature: any) => feature.properties.label));
    } catch (error) {
        console.error(error);
        setAddressSuggestions([]);
    }
};

const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setAddress(query);
    if (query.length > 2) {
        fetchAddressSuggestions(query);
    } else {
        setAddressSuggestions([]);
    }
};

const handleSuggestionClick = (suggestion: string) => {
    setAddress(suggestion);
    setAddressSuggestions([]);
};

return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-12 gap-6 ml-40 mr-40">
            <div className="col-span-6 space-y-4">
                <Input
                    label="Place of the sport activity"
                    isLoading={isLoading}
                    placeholder="Place of the sport activity"
                    type="text"
                    onChange={handleAddressChange}
                    register={register}
                    errors={errors}
                    errorMsg="Address is required"
                    id="address"
                    isAutoCompleted={true}
                />
                {addressSuggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {addressSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="suggestion-item cursor-pointer hover:bg-gray-200 p-2"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
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
            </div>
            <div className="col-span-6 space-y-4">
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
        <div className="flex items-center justify-end pr-10 pb-10">
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
