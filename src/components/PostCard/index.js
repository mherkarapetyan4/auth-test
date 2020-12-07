import {PostCardWrapper} from "./styles";

const PostCard = ({body, title}) => {
    return <PostCardWrapper>
        <h2>{title}</h2>
        <p>{body}</p>
    </PostCardWrapper>
}

export default PostCard