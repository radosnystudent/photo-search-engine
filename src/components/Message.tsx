import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
    variant: string;
    children: React.ReactNode;
}
//
const Message: React.FC<Props> = ({ variant, children }) => {
    return (
        <Alert className="myAlert" variant={variant}>
            {children}
        </Alert>
    );
};

Message.defaultProps = {
    variant: "info",
};

export default Message;
