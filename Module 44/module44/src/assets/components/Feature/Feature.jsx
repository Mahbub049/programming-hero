import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><IoMdCheckmarkCircle className="text-green-200" /> {feature}</p>
        </div>
    );
};

export default Feature;