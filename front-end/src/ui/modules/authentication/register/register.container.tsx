import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFieldsType } from "@/types/forms";
import { useState } from "react";

export const RegisterContainer = () => {

    const [isLoading, setIsloading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>();

    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
        setIsloading(true);
        console.log('formData', formData);
    };

    return (
        <RegisterView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
};