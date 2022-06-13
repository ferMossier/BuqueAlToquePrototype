import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";
import "./LoginStyles.css"

export default function ValidationCode() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});

    const database = [
        {
            code: "1234",
        },
        {
            code: "4321",
        }
    ]

    const errors = {
        code: "Codigo incorrecto",
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uCode } = document.forms[0];

        const validCode = database.find((x) => x.code === uCode.value);

        if (validCode) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
            setErrorMessages({code: "uCode", message: errors.code});
        }
    }

    const renderErrorMessage = (code) =>
        code === errorMessages.code && (
            <div className="error">{errorMessages.message}</div>
        );


    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>ingresa el codigo que enviamos a tu e-mail </label>
                    <input type="text" name="uCode" required />
                    {renderErrorMessage("uCode")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <>
            <Header />
            <div className="app">
                <div className="login-form">
                    <div className="title">Codigo de seguridad</div>
                    {isSubmitted ? <Navigate to="/" /> : renderForm}
                </div>
            </div>
        </>
    )
}