import { APPLY_FILTER, TOGGLE_MODAL,  } from "../Actions/LogsTableActions"

const initialState = {
    logsWithFilter: {
        logs: [],
        filter: {
            App: "",
            Level: "",
            UserName: "",
            HostName: ""
        }
    },
    modalState: false
};

export default function LogsTableState(state = initialState, action) {
    switch (action.type) {
        case APPLY_FILTER:
            return { ...state, logsWithFilter: action.payload }
        case TOGGLE_MODAL:
            const newState = state.modalState === false ? true : false;
            return { ...state, modalState: newState }
        default:
            return state;
    }

    return state;
}