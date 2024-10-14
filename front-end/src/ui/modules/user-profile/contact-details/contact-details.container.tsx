import { useAuth } from "@/context/AuthUserContext";
import { ContactDetailsView } from "./contact-details.view";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactDetailsFormFieldsType } from "@/types/forms";

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

    const handleUpdateUserDocument = async (formData: ContactDetailsFormFieldsType) => {
        setIsLoading(true);
        console.log(formData);
        setIsLoading(false);
    }

    const onSubmit: SubmitHandler<ContactDetailsFormFieldsType> = async (formData) => {
        handleUpdateUserDocument(formData);
        return;

    }
    // console.log("authUser", authUser);
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