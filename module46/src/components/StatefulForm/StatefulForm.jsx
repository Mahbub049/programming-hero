import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState('Mahbub');
    const [email, setEmail] = useState('mahbubsarwar5@gmail.com');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState('');
    const handleForm = (e) => {
        e.preventDefault();
        if(password.length<6)
            setError('Password must be at least of 6 characters');
        else
            setError('');
            console.log(name, email, password);
    }
    const nameChange = e => {
        setName(e.target.value);
    }
    const emailChange = e => {
        setEmail(e.target.value);
    }
    const passwordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input onChange={nameChange} value={name} type="text" name="name" /><br />
                <input onChange={emailChange} value={email}  type="email" name="email"/><br />
                <input onChange={passwordChange} value={password}  type="password" name="password"/><br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;