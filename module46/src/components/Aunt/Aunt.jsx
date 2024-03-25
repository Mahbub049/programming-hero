import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunt = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin name={'Rahim'}></Cousin>
                <Cousin name={'Rahima'} asset={asset}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add Money</button>
        </div>
    );
};

export default Aunt;