import { useContext } from "react";
import { AuthContext } from "./providers/Authprovider";

const Home = () => {
    const context = useContext(AuthContext);
    console.log(context)
    return (
        <div>
            {context.name}
        </div>
    );
};

export default Home;