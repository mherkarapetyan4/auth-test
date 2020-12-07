import { appKeyActions } from "../../constants/actionsKeys";
 import axios from "axios";
import { API_URL, LOCAL_STORAGE_KEY } from "../../constants/endpoints";
import { storage } from "../../util"; 
import { history } from "../../history";
 
// export const getUserTheme = () => {
//     return (dispatch) => {
//         // axios
//         //     .get(`${widgetsPath.WIDGETS_GET_DATA}?key=themeKey`)
//         //     .then((response) => {
//         //         if (!isEmpty(response.data)) {
//         //             dispatch(changeUserTheme(JSON.parse(response.data.json)));
//         //         }
//         //     });
//     };
// };

export const setIsAuth = (payload) => ({
    type: appKeyActions.SET_IS_AUTH,
    payload,
});

export const setUser = payload => ({
    type: appKeyActions.SET_USER,
    payload
})

export const getUserById = (id, history) => {
    return dispatch => {
 
        axios.get(API_URL.GET_USER, {
            params: {
                id
            }
        }).then(res => {
            const userData = res.data[0]
            storage(LOCAL_STORAGE_KEY, JSON.stringify(userData))
            dispatch(setUser(userData)); 
            dispatch(setIsAuth(true));
            history.replace("/")
        })  
    }
}