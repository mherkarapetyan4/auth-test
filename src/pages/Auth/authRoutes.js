import { PATHS } from "../../constants/paths";
import Auth from "./index"

export const authRoutes = [
  {
    path: PATHS.AUTH,
    exact: true,
    component: Auth
  }
]