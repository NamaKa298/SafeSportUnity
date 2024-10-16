import { useState } from "react";

interface Props {
    initial?: boolean;
}

export const useToggle = ({ initial = false }: Props = {}) => {
    const [value, setValue] = useState<boolean>(initial);

    const toggle = () => {
        setValue(!value);
    };

    return {
        value,
        setValue,
        toggle,
    };
};