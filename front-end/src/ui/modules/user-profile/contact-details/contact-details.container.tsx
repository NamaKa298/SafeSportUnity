import { useAuth } from "@/context/AuthUserContext";
import { ContactDetailsView } from "./contact-details.view";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactDetailsFormFieldsType } from "@/types/forms";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { firestoreUpdateDocument } from "@/api/firestore";

export const ContactDetailsContainer = () => {
    const { authUser } = useAuth();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setValue,
        setError,
    } = useForm<ContactDetailsFormFieldsType>();

    const { firstName, postalAddress, userName, lastName, password, email } = authUser.userDocument;

    useEffect(() => {
        const fieldsToUpdate: (
            "firstName"
            | "postalAddress"
            | "userName"
            | "lastName"
            | "password"
            | "email"
        )[] = ["firstName", "postalAddress", "userName", "lastName", "password", "email"];

        for (const field of fieldsToUpdate) {
            setValue(field, authUser.userDocument[field]);
        }
    }, []);

    const handleUpdateUserDocument = async (
        formData: ContactDetailsFormFieldsType
    ) => {
        setIsLoading(true);
        const {error} = await firestoreUpdateDocument (
            "users",
            authUser.uid,
            formData
        )
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success("User details updated successfully");
        setIsLoading(false);
    };

    const onSubmit: SubmitHandler<ContactDetailsFormFieldsType> = async (
        formData
    ) => {
        if (
            firstName !== formData.firstName ||
            lastName !== formData.lastName ||
            email !== formData.email ||
            password !== formData.password ||
            postalAddress !== formData.postalAddress ||
            userName !== formData.userName
        ) {
            for (const key in formData) {
                if (
                    formData.hasOwnProperty(key) &&
                    formData[key as keyof ContactDetailsFormFieldsType] === undefined
                ) {
                    delete formData[key as keyof ContactDetailsFormFieldsType];
                }
            }

            handleUpdateUserDocument(formData);
            return;
        }

    };

    return (
        <ContactDetailsView
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    )

}