import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFieldsType } from "@/types/forms";

export const RegisterContainer = () => {

    const isLoading = false;

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>();

    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
        console.log('formData', formData)
    };

    return (
        <>
            <RegisterView
                form={{
                    errors,
                    control,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                }}
            />
        </>
    );
};