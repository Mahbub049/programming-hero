import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);
const asset = 'Diamond'


const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    return (
        <div className="style">
            <h2>Grandpa</h2>
            <p>Money: {money}</p>
        <MoneyContext.Provider value={[money,setMoney]}>
            <AssetContext.Provider value="Gold">
                <section className="flex style">
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunt asset={asset}></Aunt>
                    </section>
            </AssetContext.Provider>
        </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;