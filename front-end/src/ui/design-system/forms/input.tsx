import clsx from "clsx";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
}

export const Input = ({
    isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutoCompleted = false,
}: Props) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={clsx(
                "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600",
            )}
            disabled={isLoading}
            {...register(id, {
                required: {
                    value: required,
                    message: errorMsg,
                },
            })}
            autoComplete={isAutoCompleted ? "on" : "off"}
        />
    )
};