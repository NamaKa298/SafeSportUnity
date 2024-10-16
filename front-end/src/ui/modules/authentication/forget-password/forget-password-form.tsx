import { Button } from "@/ui/design-system/button/button";
import { FormsType } from "@/types/forms";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const ForgetPasswordForm = ({ form }: Props) => {
    const { onSubmit, errors, isLoading, register, handleSubmit } =
        form;
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
            <Button isLoading={isLoading} type="submit" fullWidth>
                Send
            </Button>
        </form>
    );
};