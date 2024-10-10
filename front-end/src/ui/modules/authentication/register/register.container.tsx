/*eslint-disable*/
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFieldsType } from "@/types/forms";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from 'react-toastify';
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
    const { value: isLoading,
        setValue: setIsLoading,
    } = useToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>();

    const handleCreateUserAuthentication = async ({
        firstName,
        lastName,
        userName,
        postalAddress,
        newEmail,
        email,
        confirmEmail,
        password,
        confirmPassword,
    }: RegisterFormFieldsType) => {
        const { error, data } = await firebaseCreateUser(email, password);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            console.log(error);
            return
        }

        toast.success("User created successfully");
        setIsLoading(false);
        reset();
    };
    //* @todo create user document
    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
        setIsLoading(true);
        const { password } = formData;

        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: "Password must be at least 6 characters long",
            });
            return;
        }
        handleCreateUserAuthentication(formData);
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