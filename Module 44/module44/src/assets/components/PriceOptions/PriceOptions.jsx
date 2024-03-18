import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

        const priceOptions =  [
            {
                "id": 1,
                "option_name": "Basic Membership",
                "price": 29.99,
                "features": [
                  "Access to cardio area",
                  "Access to weightlifting area",
                  "Access to locker rooms",
                  "Personal training sessions not included"
                ]
              },
              {
                "id": 2,
                "option_name": "Standard Membership",
                "price": 49.99,
                "features": [
                  "Access to cardio area",
                  "Access to weightlifting area",
                  "Access to locker rooms",
                  "Access to group fitness classes",
                  "Discounted personal training sessions"
                ]
              },
              {
                "id": 3,
                "option_name": "Premium Membership",
                "price": 79.99,
                "features": [
                  "Access to cardio area",
                  "Access to weightlifting area",
                  "Access to locker rooms with sauna and steam room",
                  "Access to group fitness classes",
                  "Unlimited personal training sessions",
                  "Towel service included",
                  "Access to juice bar"
                ]
              }
            ]

    return (
        <div className="flex m-5 gap-4 text-white">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;