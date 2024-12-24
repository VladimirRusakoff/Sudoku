import React from "react";

interface CellProps {
    value: number;
    isInitial: boolean;
    onChange: (value: string) => void;
}

const Cell: React.FC<CellProps> = ({ value, isInitial, onChange }) => {
    return (
        <input
            type="text"
            className={`cell ${isInitial ? 'initial' : '' }`}
            disabled={isInitial}
            value={value === 0 ? '' : value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={1} 
            pattern="[0-9]*"/>
    );
}

export default Cell;