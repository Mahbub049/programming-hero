import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title, id}= post;
    const navigate = useNavigate();

    const navigation = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={{ border: '2px solid green', padding: '30px' }}>
            <p>{id}</p>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>
                <button>Click Me</button>
            </Link>
            <button onClick={navigation}>Show Post</button>
        </div>
    );
};

export default Post;