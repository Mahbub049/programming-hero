import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
            {
                posts.map((post, idx)=><Post key={idx} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;