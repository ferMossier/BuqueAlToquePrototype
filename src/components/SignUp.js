import { useState } from 'react';
import Login from "./Login"
import "./SignUpStyles.css"

export default function SignUp() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
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

    // Handling the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setIsSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const renderSuccessMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: isSubmitted ? '' : 'none',
                }}>
                <div>User {name} successfully registered!!</div>
            </div>
        );
    };

    // Showing error message if error is true
    const renderErrorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <div>Completa el campo vacío</div>
            </div>
        );
    };

    return (
        <div>
            {isSubmitted ? <Login /> :
                <div className="form">
                <div>
                    <h1>User Registration</h1>
                </div>
    
                {/* Calling to the methods */}
                <div className="messages">
                    {renderSuccessMessage()}
                </div>
    
                <form>
                    {/* Labels and inputs for form data */}
                    <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                        value={name} type="text" />
                        {renderErrorMessage()}
    
                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" />
                        {renderErrorMessage()}
    
                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" />
                        {renderErrorMessage()}
    
                    <button onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
            }
        </div>
    );
}