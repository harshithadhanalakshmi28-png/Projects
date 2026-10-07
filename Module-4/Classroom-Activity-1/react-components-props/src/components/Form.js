import { useState } from "react";

function Form() {
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setMessage("Registration submitted successfully!");
    }

    return (
        <div className="form">
            <h3>Registration Form</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                />

                <button type="submit">Submit</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default Form;