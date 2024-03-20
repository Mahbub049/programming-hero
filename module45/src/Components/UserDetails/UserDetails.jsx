import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name, email, phone} = userDetails;
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserDetails;