import { ForgetPasswordFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view"

export const ForgetPasswordContainer = () => {
    const [isLoading, setIsloading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<ForgetPasswordFormFieldsType>();

    const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (formData) => {
        setIsloading(true);
        console.log('formData', formData);
    };
    return (
        <ForgetPasswordView
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