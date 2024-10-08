import { FormsType } from "@/types/forms";
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
    const { control, onSubmit, errors, isLoading, register, handleSubmit } =
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
                id="LastName"
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
            <Box padding_y="py-5" className="pt-8 pb-5 space-y-4">
                <div>
                    For more security, we suggest you create a specific email @ssu.com in order to be able to get in touch with other ssu members.
                </div>
                <Input
                    isLoading={isLoading}
                    placeholder="Create a new email with @ssu"
                    type="email"
                    register={register}
                    errors={errors}
                    errorMsg="Tu dois renseigner ce champ"
                    id="email"
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
                    id="email"
                />
            </Box>
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
                id="password"
            />
            <Button isLoading={isLoading} type="submit" fullWidth>
                Create Account
            </Button>
        </form>
    );
};