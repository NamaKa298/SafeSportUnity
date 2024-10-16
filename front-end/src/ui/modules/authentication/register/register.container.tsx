/*eslint-disable*/
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFieldsType } from "@/types/forms";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { toast } from 'react-toastify';
import { useToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument} from "@/api/firestore";

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

    const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object) => {
        const { error } = await firestoreCreateDocument(
            collectionName,
            documentID,
            document
        );
        if (error) {
            toast.error(error.message);
            setIsLoading(false);
            return;
        }
        toast.success("User created successfully");
        setIsLoading(false);
        reset();
        sendEmailVerificationProcedure();
    };
    
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
        if (email !== confirmEmail) {
            setIsLoading(false);
            toast.error("Emails do not match");
            return
        }
        if (password !== confirmPassword) {
            setIsLoading(false);
            toast.error("Passwords do not match");
            return
        }
        const { error, data } = await firebaseCreateUser(email, password);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return
        }


        const userDocumentData = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            postalAddress: postalAddress,
            newEmail: newEmail,
            email: email,
            uid: data.uid,
            creation_date: new Date(),
        }

        handleCreateUserDocument( "users", data.uid, userDocumentData);
    };

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