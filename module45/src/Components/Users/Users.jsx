import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    const styling = {
        
    }
    return (
        <div className="styling">
                {
                    users.map(user => <User user={user}></User>)
                }
        </div>
    );
};

export default Users;