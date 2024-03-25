import { useState } from "react"

const useCustomHook = (defaultValue="Mahbub") => {
    const [value, setValue] = useState(defaultValue);

    // const handleHook = (e) => {
    //     setValue(e.target.value);
    // }

    const onChange= (e) => {
        setValue(e.target.value);
    }

    // return [value, handleHook];
    return {value, onChange};
}

export default useCustomHook;