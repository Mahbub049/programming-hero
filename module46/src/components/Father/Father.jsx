import Brother from "../Brother/Brother";
import Me from "../Me/Me";
import Sister from "../Sister/Sister";

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <Me></Me>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;