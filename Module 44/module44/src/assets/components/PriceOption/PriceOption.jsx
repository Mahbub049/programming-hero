import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {price, option_name, features} = option;
    return (
        <div className="bg-blue-500 w-full p-10 rounded-lg flex flex-col">
            <div className="text-center mb-10">
                <h2 className="text-6xl">{price}<span className="text-3xl">/mon</span> </h2>
                <p>{option_name}</p>
            </div>
            <div className="flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="p-3 bg-green-600 w-full mt-10">Buy Now</button>
        </div>
    );
};

export default PriceOption;