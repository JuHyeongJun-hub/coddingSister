import { Alert } from "@mui/material";
import React from "react";

interface ErrorMessageProps {
    errorMessage : string;   
}

const ErrorMessage = ({errorMessage}: ErrorMessageProps) => {
    return <Alert severity="error">ErrorMessage</Alert>
};

export default ErrorMessage;