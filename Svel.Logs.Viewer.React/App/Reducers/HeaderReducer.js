import { GET_USER_SUCCESS } from "../Actions/HeaderActions"

const initialState = {
    user: {
        fullName: "",
        email:""
    }
};

export default function HeaderState(state = initialState, action) {

    switch (action.type) {
        case GET_USER_SUCCESS:
            return { ...state, user: action.payload }
        default:
            return state;
    }

    return state;
}