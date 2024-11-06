import React from 'react';

interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, label }) => {
    return (
        <div className="form-checkbox">
            <input type="checkbox" id={id} checked={checked} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};