//GetLogRecords
export const APPLY_FILTER = "APPLY_FILTER"
export function ApplyFilter(filter) {
    const url = window.location + 'api/Logs/GetLogRecords'

    const fetch_params = {
        method: 'POST',
            headers: {
            'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(filter)
    }

    return (dispatch) => {
        fetch(url, fetch_params )
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch({
                    type: APPLY_FILTER,
                    payload: { logs: json, filter: filter }
                })
            );
    }
}

export const TOGGLE_MODAL = "TOGGLE_MODAL"
export function ToggleModal() {
    return {
        type: TOGGLE_MODAL
     };
}
