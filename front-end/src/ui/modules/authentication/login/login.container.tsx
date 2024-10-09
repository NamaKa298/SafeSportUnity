import { LoginFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view";

export const LoginContainer = () => {

    const [isLoading, setIsloading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFieldsType>();

    const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
        setIsloading(true);
        console.log('formData', formData);
    };

    return (
        <LoginView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
}