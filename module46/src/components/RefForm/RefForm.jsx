import { useRef } from "react";

const RefForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleForm = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input ref={nameRef} defaultValue={'Mahbub'} type="text" name="name" /><br />
                <input ref={emailRef} defaultValue={'mahbubsarwar5@gmail.com'}   type="email" name="email"/><br />
                <input ref={passwordRef}  type="password" name="password"/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;