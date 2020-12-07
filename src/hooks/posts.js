import {useState, useEffect} from "react";
import axios from "axios";
import {API_URL} from "../constants/endpoints";
import {useSelector} from "react-redux";

const usePosts = () => {
    const user = useSelector(state => state.app.user);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(!user) {
            return
        }
        axios.get(API_URL.GET_POSTS, {
            params: {
                userId: user.id
            }
        }).then(res => setPosts(res.data))
    }, [user])

    return {
        posts
    }
}

export default usePosts;