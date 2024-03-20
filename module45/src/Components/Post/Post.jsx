import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {title, id}= post;
    return (
        <div style={{ border: '2px solid green', padding: '30px' }}>
            <p>{id}</p>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default Post;