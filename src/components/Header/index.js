import {HeaderWrapper, ImageWrapper} from "./styles";
import {useSelector} from "react-redux";
import useAuth from "../../hooks/auth";

const Header = () => {
    const {logout} = useAuth();
    const user = useSelector(state => state.app.user);

    return <HeaderWrapper>
        <ImageWrapper>
            <img src={"/user-profile.svg"} alt={"user icon"}/>
            <p>{ user && user.name}</p>
            <img src={"/logout.svg"} alt={"logout"} onClick={logout}/>
        </ImageWrapper>

    </HeaderWrapper>
}

export default Header