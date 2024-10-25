import React from 'react';

interface SelectProps {
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ id, value, onChange, options }) => {
    return (
        <select id={id} value={value} onChange={onChange} className="form-select">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};