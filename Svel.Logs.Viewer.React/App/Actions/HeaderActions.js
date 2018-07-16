export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export function GetUser() {
    return (dispatch) => {
        fetch(window.location + 'api/User/GetCurrentUser')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: json
                })
            );
    }
}

