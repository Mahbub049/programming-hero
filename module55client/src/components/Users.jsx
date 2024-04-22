import { useLoaderData } from "react-router-dom";

const Users = () => {
    const usersDetails = useLoaderData();
    return (
        <div>
            {
                usersDetails.map(user=><p key={user._id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;