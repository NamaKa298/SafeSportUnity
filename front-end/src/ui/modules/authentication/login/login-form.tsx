import { Button } from "@/ui/design-system/button/button";
import { FormsType } from "@/types/forms";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const LoginForm = ({ form }: Props) => {
    const { onSubmit, errors, isLoading, register, handleSubmit } =
        form;
    console.log("form", form)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
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
                placeholder="Password"
                type="password"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="password"
            />
            <Button isLoading={isLoading} type="submit" fullWidth>
                Sign In
            </Button>
        </form>
    );
};