export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div className="box">
            <h4>name: {name}</h4>
            <h4>name: {email}</h4>
        </div>
    )
}