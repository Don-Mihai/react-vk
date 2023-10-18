import { IPost } from '../Header';
import './Post.scss';

interface Props {
    post: IPost;
}

const Post = ({post}: Props) => {

    return <div className="component-post">{post.title}</div>
}

export default Post
