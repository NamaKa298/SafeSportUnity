export interface FormsType {
    control: any;
    onSubmit: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
}

export interface RegisterFormFieldsType {
    firstName: string;
    lastName: string;
    userName: string;
    postalAddress: string;
    newEmail?: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
}