import { useContext } from "react";
import Special from "../Special/Special";
import { MoneyContext } from "../Grandpa/Grandpa";

const Me = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Me</h2>
            <p>Money: {money}</p>
            <Special></Special>
        </div>
    );
};

export default Me;