export interface FormsType {
    control?: any;
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
    pseudoEmail?: string;
    postalAddress: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
}

export interface LoginFormFieldsType {
    email: string;
    password: string;
}

export interface ForgetPasswordFormFieldsType {
    email: string;
}

export interface ContactDetailsFormFieldsType {
    firstName: string;
    lastName: string;
    userName: string;
    postalAddress: string;
    password: string;
    email: string;
}
