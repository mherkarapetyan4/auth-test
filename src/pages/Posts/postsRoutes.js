import { PATHS } from "../../constants/paths";
import Posts from "./index"

export const postsRoutes = [
  {
    path: PATHS.POSTS,
    exact: true,
    component: Posts
  }
]