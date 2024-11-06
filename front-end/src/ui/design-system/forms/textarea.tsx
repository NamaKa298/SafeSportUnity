/* eslint-disable */
import clsx from "clsx";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    label?: string;
    isLoading: boolean;
    placeholder: string;
    rows?: number;
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;

}

export const Textarea = ({
    label,
    isLoading,
    placeholder,
    rows,
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutoCompleted = false,
}: Props) => {
    return (
        <div className="space-y-2">
            {label && (
                <Typography
                    variant="caption4"
                    component="div"
                    theme={errors[id] ? "danger" : "black"}>
                    {label}
                </Typography>
            )}
            <textarea
            rows={rows}
            placeholder={placeholder}
            className={clsx(
                isLoading && "bg-gray-300 cursor-not-allowed",
                errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                "w-full p-4 font-light border rounded focus:ring-1 focus:ring-primary border-gray-400",
                
            )
            }
            />
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    )
}