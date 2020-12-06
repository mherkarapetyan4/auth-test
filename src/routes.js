import { Route, Switch } from "react-router-dom";
import { authRoutes } from "./pages/Auth/authRoutes";
import { postsRoutes } from "./pages/Posts/postsRoutes";

const routesList = [
  ...authRoutes,
  ...postsRoutes
]

export const Routes = () => (
  <Switch>
    {
      routesList.map((route, i) => <Route key={i} {...route} />)
    }
  </Switch>
)
