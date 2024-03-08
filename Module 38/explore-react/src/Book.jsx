export default function Book({ItemName}){
    const {name,price} = ItemName;
    return(
        <li>The name is {name} and price {price}</li>
    )
}