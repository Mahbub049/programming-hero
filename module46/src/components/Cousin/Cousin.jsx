import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <p>Have: {asset}</p>
            {asset && <Special asset={asset}></Special>}
            {name==='Rahim' && <Special></Special>}
        </div>
    );
};

export default Cousin;