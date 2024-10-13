import * as React from "react";

export interface ButtonProps {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function ButtonWeb({ text, onClick }: ButtonProps) {
    return (
        <button
            className="max-w-xs text-center rounded-lg py-3 px-6 text-base bg-blue-600 text-white"
            onClick={onClick}
        >
            {text}
        </button>
    );
}