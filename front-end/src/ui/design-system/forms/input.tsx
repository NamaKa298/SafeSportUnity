/* eslint-disable */
import clsx from "clsx";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    label?: string;
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password" | "url" | "time" | "date";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
    value?: string;
}

export const Input = ({
    label,
    isLoading,
    placeholder,
    type = "text",
    onChange,
    register,
    errors,
    value,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutoCompleted = false,
}: Props) => {
    return (
        <div className="space-y-2">
            {label && (
                <Typography
                    variant="caption1"
                    component="div"
                    theme={errors[id] ? "danger" : "gray"}>
                    {label}
                </Typography>
            )}


            <div className="flex items-center">
                {type === "url" && (
                    <div className="p-4 text-gray-600 border-l border-gray-400 rounded-l bg-gray-500/40 border-y">
                        https://
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={clsx(
                        type === "url" ? "rounded-r" : "rounded",
                        isLoading && "cursor-not-allowed",
                        errors[id]
                            ? "placeholder-alert-danger text-alert-danger"
                            : " placeholder-gray-600",
                        "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary",
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
            </div>
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    );
};