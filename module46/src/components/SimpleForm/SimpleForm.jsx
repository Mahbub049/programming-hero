const SimpleForm = () => {
    const handleForm = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" /><br />
                <input type="text" name="email"/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;