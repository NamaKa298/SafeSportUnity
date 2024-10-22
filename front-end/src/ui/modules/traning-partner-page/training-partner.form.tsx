import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { Select } from "@/ui/design-system/forms/select";
import { Checkbox } from "@/ui/design-system/forms/checkbox";
import { useState } from "react";

interface Props {
    form: FormsType;
}

export const TrainingPartnersForm = ({ form }: Props) => {
    const { register, errors, isLoading, onSubmit, handleSubmit } = form;
    const [useUsualAddress, setUseUsualAddress] = useState(false);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-12 gap-6 ml-40 mr-40">
                <div className="col-span-12">
                    <Checkbox
                        label="Use my usual address"
                        isLoading={isLoading}
                        register={register}
                        id="useUsualAddress"
                        onChange={(e) => setUseUsualAddress(e.target.checked)}
                    />
                </div>
                {!useUsualAddress && (
                    <div className="col-span-12">
                        <Input
                            label="Current location"
                            isLoading={isLoading}
                            placeholder="Enter your current location"
                            type="text"
                            register={register}
                            errors={errors}
                            errorMsg="Current location is required"
                            id="currentLocation"
                        />
                    </div>
                )}
                <div className="col-span-6">
                    <Select
                        label="Level"
                        isLoading={isLoading}
                        register={register}
                        errors={errors}
                        errorMsg="Level is required"
                        id="level"
                        options={[
                            { value: "default", label: "Level", disabled: true },
                            { value: "beginner", label: "Beginner" },
                            { value: "intermediate", label: "Intermediate" },
                            { value: "advanced", label: "Advanced" },
                        ]}
                        defaultValue="default"
                    />
                </div>
                <div className="col-span-6">
                    <Select
                        label="Training Type"
                        isLoading={isLoading}
                        register={register}
                        errors={errors}
                        errorMsg="Training type is required"
                        id="trainingType"
                        options={[
                            { value: "default", label: "Type d'entraînement", disabled: true },
                            { value: "running", label: "Running" },
                            { value: "biking", label: "Biking" },
                        ]}
                        defaultValue="default"
                    />
                </div>
            </div>
            <div className="flex justify-end pr-10 pb-10">
                <Button
                    isLoading={isLoading}
                    type="submit"
                >
                    Find your partner
                </Button>
            </div>
        </form>
    );
}