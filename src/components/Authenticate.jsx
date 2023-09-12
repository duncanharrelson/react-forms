import { useState } from "react";

const AUTH_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"

const Authenticate = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick(e) {   
        e.preventDefault();     
        try {
            const response = await fetch(AUTH_URL, {
                method: "GET",               
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            const result = await response.json();
            setSuccessMessage(result.message);         
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Authenticate!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </>
    )
}

export default Authenticate