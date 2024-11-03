import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
    const { onSubmit, errors, isLoading, register, handleSubmit } =
        form;
    console.log("form", form)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
            <Input
                isLoading={isLoading}
                placeholder="First Name"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="firstName"
            />
            <Input
                isLoading={isLoading}
                placeholder="Last Name"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="lastName"
            />
            <Input
                isLoading={isLoading}
                placeholder="Postal Address"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="postalAddress"
            />
            <Input
                isLoading={isLoading}
                placeholder="User Name"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="userName"
            />

            <Input
                isLoading={isLoading}
                placeholder="Email"
                type="email"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="email"
            />
            <Input
                isLoading={isLoading}
                placeholder="Confirm Email"
                type="email"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="confirmEmail"
            />
            <Input
                isLoading={isLoading}
                placeholder="Password"
                type="password"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="password"
            />
            <Input
                isLoading={isLoading}
                placeholder="Confirm Password"
                type="password"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="confirmPassword"
            />
            <Button isLoading={isLoading} type="submit" fullWidth>
                Create Acount
            </Button>
        </form>
    );
};