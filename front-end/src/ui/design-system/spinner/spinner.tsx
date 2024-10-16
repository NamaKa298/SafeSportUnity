import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
    let variantStyles: string = "",
        sizeStyles: string = "";

    switch (size) {
        case "small":
            sizeStyles = "w-5 h-5";
            break;
        case "medium": //Default
            sizeStyles = "w-9 h-9";
            break;
        case "large":
            sizeStyles = "w-12 h-12";
            break;
    }

    switch (variant) {
        case "primary": //Default
            variantStyles = "text-primary";
            break;
        case "white":
            variantStyles = "text-white";
            break;
    }

    return (
        <svg
            role="spinner"
            className={clsx(
                sizeStyles,
                variantStyles,
                "animate-spin"
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
}