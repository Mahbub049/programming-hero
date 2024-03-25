import useCustomHook from "../../Hooks/Custom";

const CustomHook = () => {
    // const [name, handleName] = useCustomHook('Mahbub');
    const emailState = useCustomHook('');
    const handleForm = (e) => {
        e.preventDefault();
        // console.log(name)
        console.log(emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                {/* <input onChange={handleName} value={name} type="text" name="name" /><br /> */}
                <input {...emailState} type="email" name="email"/><br />
                <input  type="password" name="password"/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHook;