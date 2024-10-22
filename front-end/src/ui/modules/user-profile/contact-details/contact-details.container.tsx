import { firebaseUpdatePassword, firebaseUpdateEmail } from "@/api/authentication";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { ContactDetailsFormFieldsType } from "@/types/forms";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { ContactDetailsView } from "./contact-details.view";

export const ContactDetailsContainer = () => {
    const { authUser } = useAuth();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setValue,
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
        if (formData.password !== undefined && formData.password.length <= 5) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        const auth = getAuth();
        if (auth.currentUser) {
            setIsLoading(true);
            const { error } = await firestoreUpdateDocument(
                "users",
                authUser.uid,
                formData
            )
            if (error) {
                setIsLoading(false);
                toast.error(error.message);
                return;
            }
            await firebaseUpdatePassword(formData.password);
            if (email !== formData.email) {
                await firebaseUpdateEmail(formData.email);
            }
            toast.success("User details updated successfully");
            setIsLoading(false);
        };
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
            handleUpdateUserDocument(formData);
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