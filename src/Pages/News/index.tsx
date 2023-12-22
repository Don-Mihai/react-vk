import { useEffect, useState } from "react";
import Header, { IPost, IUser } from "../../components/Header";
import { Menu } from "../../components/Menu";
import Post from "../../components/Post";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getUser } from "../../redux/UserSlice";

const News = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const user: any = useSelector<RootState>((store) => store.user.currentUser)

    const dispatch = useDispatch<AppDispatch>()

    const getPosts = async () => {
        const posts: IPost[] = (await axios.get('http://localhost:3001/posts/')).data

        setPosts(posts)
    }

    useEffect(() => {
        getPosts()
        dispatch(getUser())
    }, []);

    return ( <div className="page-profile">
        <Header isShowSearch={true} user={user}></Header>
        <div className="page-profile__container container">
                <Menu></Menu>
                <div className="page-profile__content">

                    <div className="page-profile__sub-content">
                        
                        <div className="page-profile__posts">
                            {posts.sort((a, b) => new Date(b?.createTime).getTime() - new Date(a?.createTime).getTime() ).map(post => {
                                return <Post key={post?.id} post={post} onUpdate={getPosts} />;
                            })}
                        </div>

                        
                    </div>
                </div>
            </div>
    </div> );
}
 
export default News;