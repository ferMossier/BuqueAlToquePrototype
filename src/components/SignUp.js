import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import Header from "./Header";
import "./SignUpStyles.css";

export default function SignUp() {

    // States for registration
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [street, setStreet] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [dni, setDni] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [creditCardCode, setCreditCardCode] = useState('');


    // States for checking the errors
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState({});
    const [ccCodeError, setCCCodeError] = useState({});
    const [ccNumberError, setCCNumberError] = useState({});
    const [streetNumberError, setStreetNumberError] = useState({})
    const [nameError, setNameError] = useState({})
    const [lastNameError, setLastNameError] = useState({})

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the last name change
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the Address change
    const handleStreet = (e) => {
        setStreet(e.target.value);
        setIsSubmitted(false);
    };

    const handleStreetNumber = (e) => {
        setStreetNumber(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the DNI change
    const handleDni = (e) => {
        setDni(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the credit card number change
    const handleCreditCardNumber = (e) => {
        setCreditCardNumber(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the credit card code change
    const handleCreditCardCode = (e) => {
        setCreditCardCode(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the form submission and validations
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formValidation();

        if (!isValid
            || name === ''
            || email === ''
            || password === ''
            || street === ''
            || lastName === ''
            || streetNumber === ''
            || dni === ''
        ) {
            setError(true);
        } else {
            setIsSubmitted(true);
            setError(false);
        }
    };

    // General validations
    const formValidation = () => {
        const passwordError = {};
        const ccCodeError = {};
        const ccNumberError = {};
        const streetNumberError = {};
        const nameError = {};
        const lastNameError = {};

        let isValid = true;

        if (password.trim().length < 8 || !(/^(?=[^\s]*?[0-9])(?=[^\s]*?[a-zA-Z])[a-zA-Z0-9]*$/.test(password))) {
            passwordError.passwordWrong = "Combinar letras y numeros. Superar los 7 caracteres";
            isValid = isValid && false;
        }
        if ((creditCardCode.trim().length !== 3 && creditCardCode.trim().length !== 0) || !(/^(\s*|\d+)$/.test(creditCardCode))) {
            ccCodeError.wrongCode = "Codigo de seguridad incorrecto"
            isValid = isValid && false;
        }
        if ((creditCardNumber.trim().length !== 16 && creditCardNumber.trim().length !== 0) || !(/^(\s*|\d+)$/.test(creditCardNumber))) {
            ccNumberError.wrongNumber = "Numero de Tarjeta incorrecto"
            isValid = isValid && false;
        }
        if (!(/^(\s*|\d+)$/.test(streetNumber))) {
            streetNumberError.wrongNumber = "Numero de calle incorrecto"
            isValid = isValid && false;
        }
        if (!(/^([^0-9]*)$/.test(name))) {
            nameError.wrongName = "Nombre con formato incorrecto"
            isValid = isValid && false;
        }
        if (!(/^([^0-9]*)$/.test(lastName))) {
            lastNameError.wrongLastName = "Apellido con formato incorrecto"
            isValid = isValid && false;
        }

        setPasswordError(passwordError);
        setCCCodeError(ccCodeError);
        setCCNumberError(ccNumberError);
        setStreetNumberError(streetNumberError);
        setNameError(nameError);
        setLastNameError(lastNameError);

        return isValid;

    }

    // Showing error message if error is true
    const renderErrorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <div>Complete todos los campos requeridos</div>
            </div>
        );
    };

    return (
        <>
            <Header />
            <div className='app'>
                {isSubmitted ? <Navigate to="/Login" /> :
                    <div className="signup-form">
                        <div>
                            <h1>Regístrate</h1>
                        </div>

                        {/* Calling to the methods */}

                        <form onSubmit={handleSubmit}>
                            {/* Labels and inputs for form data */}
                            <div className="input-container">
                                <label className="label">Nombre*</label>
                                <input onChange={handleName} className="input"
                                    value={name} type="text" />
                                {Object.keys(nameError).map((key) => {
                                    return <div style={{ color: "red" }}>{nameError[key]}</div>
                                })}
                            </div>

                            <div className="input-container">
                                <label className="label">Apellido*</label>
                                <input onChange={handleLastName} className="input"
                                    value={lastName} type="text" />
                                {Object.keys(lastNameError).map((key) => {
                                    return <div style={{ color: "red" }}>{lastNameError[key]}</div>
                                })}
                            </div>

                            <div className="input-container">
                                <label className="label">DNI*</label>
                                <input onChange={handleDni} className="input"
                                    value={dni} type="text" />
                            </div>

                            <div className="input-container">
                                <label className="label">Email*</label>
                                <input onChange={handleEmail} className="input"
                                    value={email} type="email" />
                            </div>

                            <div className="input-container">
                                <label className="label">Domicilio*</label>
                                <input
                                    onChange={handleStreet}
                                    placeholder="Nombre de calle"
                                    className="input"
                                    value={street}
                                    type="text"
                                />
                                <input
                                    onChange={handleStreetNumber}
                                    placeholder="Numero"
                                    className="input"
                                    value={streetNumber}
                                    type="text"
                                />
                                {Object.keys(streetNumberError).map((key) => {
                                    return <div style={{ color: "red" }}>{streetNumberError[key]}</div>
                                })}
                            </div>

                            <div className="input-container">
                                <label className="label">Password*</label>
                                <input onChange={handlePassword} className="input"
                                    value={password} type="password" />
                                {Object.keys(passwordError).map((key) => {
                                    return <div style={{ color: "red" }}>{passwordError[key]}</div>
                                })}
                            </div>

                            <div className="input-container">
                                <label className="label">Medios de pago</label>
                                <select name="Medios de pago">
                                    <option value="Tarjeta de Credito">Tarjeta de crédito</option>
                                    <option value="Transferencia" disabled>Transferencia bancaria</option>
                                    <option value="MercadoPago" disabled>MercadoPago</option>
                                    <option value="PagoFacil" disabled>PagoFácil</option>
                                </select>
                                <input placeHolder="Numero de Tarjeta" onChange={handleCreditCardNumber} className="input"
                                    value={creditCardNumber} type="text" />
                                {Object.keys(ccNumberError).map((key) => {
                                    return <div style={{ color: "red" }}>{ccNumberError[key]}</div>
                                })}
                                <input placeHolder="Codigo de seguridad" onChange={handleCreditCardCode} className="input"
                                    value={creditCardCode} type="text" />
                                {Object.keys(ccCodeError).map((key) => {
                                    return <div style={{ color: "red" }}>{ccCodeError[key]}</div>
                                })}
                            </div>

                            <div className="button-container">
                                <input type="submit" />
                            </div>

                            {renderErrorMessage()}
                        </form>
                    </div>
                }
            </div>
        </>
    );
}