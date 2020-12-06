import { appKeyActions } from "../../constants/actionsKeys";

const initial = {
    isAuth: false,
    user: null
};

export function app(state = initial, action) {
    switch (action.type) {
        case appKeyActions.SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.payload,
            };
        } 
        case appKeyActions.SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state;
    }
}