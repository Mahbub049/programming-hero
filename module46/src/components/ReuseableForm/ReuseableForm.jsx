import { useRef } from "react";

const ReuseableForm = ({formTitle, children, handleSubmit}) => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const signUpForm = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            {children}
            <form onSubmit={signUpForm}>
                <input ref={nameRef} type="text" name="name" /><br />
                <input ref={emailRef} type="email" name="email"/><br />
                <input ref={passwordRef} type="password" name="password"/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReuseableForm;