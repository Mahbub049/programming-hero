import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postData = useLoaderData();
    const {id, title, body} = postData;
    return (
        <div>
            <p>{id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;