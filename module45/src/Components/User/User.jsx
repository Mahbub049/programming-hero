const User = ({user}) => {
    const {name, email, username} = user;
    const styling = {
        border: '2px solid green',
        padding: '10px'
    }
    return (
        <div style={styling}>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
};

export default User;