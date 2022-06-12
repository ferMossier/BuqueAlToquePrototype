import { useState } from 'react';
import { Navigate } from "react-router-dom";
import Header from "./Header"
import "./SignUpStyles.css"

export default function SignUp() {

    // States for registration

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [dni, setDni] = useState('');
    const [creditCard, setCreditCard] = useState('');

    // States for checking the errors
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [passwordError, setPasswordError] = useState({});

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setIsSubmitted(false);
    };

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

    const handleAddress = (e) => {
        setAddress(e.target.value);
        setIsSubmitted(false);
    };

    const handleDni = (e) => {
        setDni(e.target.value);
        setIsSubmitted(false);
    };

    const handleCreditCard = (e) => {
        setCreditCard(e.target.value);
        setIsSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formValidation();

        if (name === ''
            || email === ''
            || password === ''
            || !isValid
            || address === ''
            || lastName === ''
        ) {
            setError(true);
        } else {
            setIsSubmitted(true);
            setError(false);
        }
    };

    const formValidation = () => {
        const passwordError = {}

        let isValid = true;

        if (password.trim().length < 8) {
            passwordError.passwordShort = "Password minimo: 8 caracteres";
            isValid = false;
        }

        setPasswordError(passwordError);

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
                            <h1>Sign Up</h1>
                        </div>

                        {/* Calling to the methods */}

                        <form onSubmit={handleSubmit}>
                            {/* Labels and inputs for form data */}
                            <div className="input-container">
                                <label className="label">Nombre*</label>
                                <input onChange={handleName} className="input"
                                    value={name} type="text" />

                            </div>

                            <div className="input-container">
                                <label className="label">Apellido*</label>
                                <input onChange={handleLastName} className="input"
                                    value={lastName} type="text" />
                            </div>

                            <div className="input-container">
                                <label className="label">DNI</label>
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
                                <input onChange={handleAddress} className="input"
                                    value={address} type="text" />
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
                                <label className="label">Tarjeta de crédito</label>
                                <input onChange={handleCreditCard} className="input"
                                    value={creditCard} type="password" />
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