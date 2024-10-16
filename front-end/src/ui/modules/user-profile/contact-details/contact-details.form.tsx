import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const ContactDetailsForm = ({ form }: Props) => {

    const { register, errors, isLoading, onSubmit, handleSubmit } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-12 gap-6 ml-40 mr-40">
                <div className="col-span-6 space-y-4">
                    <Input
                        label="First Name"
                        isLoading={isLoading}
                        placeholder="First Name"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="First Name is required"
                        id="firstName"
                    />
                    <Input
                        label="Postal Address"
                        isLoading={isLoading}
                        placeholder="Postal Address"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Postal Address is required"
                        id="postalAddress"
                    />
                    <Input
                        label="Username"
                        isLoading={isLoading}
                        placeholder="Username"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Username is required"
                        id="userName"
                    />
                </div>
                <div className="col-span-6 space-y-4">
                    <Input
                        label="Last Name"
                        isLoading={isLoading}
                        placeholder="Last Name"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Last Name is required"
                        id="lastName"
                    />
                    <Input
                        label="Email"
                        isLoading={isLoading}
                        placeholder="email"
                        type="email"
                        register={register}
                        errors={errors}
                        errorMsg="Email is required"
                        id="email"
                    />
                    <Input
                        label="Password"
                        isLoading={isLoading}
                        placeholder="password"
                        type="password"
                        register={register}
                        errors={errors}
                        errorMsg="Password is required"
                        id="password"
                    />
                </div>
            </div>
            <div className="flex justify-end pr-10 pb-10">
                    <Button
                        isLoading={isLoading}
                        type="submit"
                    >
                        Save Changes
                    </Button>
                </div>
        </form>
    );
}