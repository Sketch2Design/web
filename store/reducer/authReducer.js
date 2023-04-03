export const AUTH_ACTIONS = {
    // ADD_SESSION: 'add_session',
    ADD_USER: 'add_session',
    REMOVE_USER: 'remove_session',
}

export function authReducer(state, action) {
    switch (action.type) {
        case AUTH_ACTIONS.ADD_USER: {
            return action.values
        }
        case AUTH_ACTIONS.REMOVE_USER: {
            return null
        }
    }
}
