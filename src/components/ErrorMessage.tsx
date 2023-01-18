import React from "react";

interface errorMessageProps{
    error: string
}

export function ErrorMessage({error}: errorMessageProps) {
    return (
        <p className="text-center text-red-800 ">{error}</p>
    )
}