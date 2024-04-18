import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const postData = useLoaderData();
    const {id, title, body} = postData;
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <p>{id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;