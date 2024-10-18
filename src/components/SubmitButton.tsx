"use client";
import React, { FC } from "react";

interface SubmitButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
    children,
    onClick,
    className = "",
}) => {
    return (
        <button type="button" onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default SubmitButton;
