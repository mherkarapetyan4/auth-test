import withAuth from "../../hoc/withAuth";
import Header from "../../components/Header";
import usePosts from "../../hooks/posts";
import PostCard from "../../components/PostCard";
import {CardsWrapper} from "./styles";
const Posts = () => {
    const {posts} = usePosts();
    console.log(posts);
  return <div>
        <Header />

        <CardsWrapper>
            {posts.map((post, i) => <PostCard  key={i} {...post}/>)}
        </CardsWrapper>
  </div>
}

export default withAuth(Posts);