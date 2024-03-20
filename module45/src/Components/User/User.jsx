import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, username} = user;
    const styling = {
        border: '2px solid green',
        padding: '10px'
    }
    return (
        <div style={styling}>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <Link to={`/user/${id}`}>
                <button>Click Here</button>
            </Link>
        </div>
    );
};

export default User;