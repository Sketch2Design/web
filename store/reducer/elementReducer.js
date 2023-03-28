export const ACTIONS = {
    UPDATE_ALL: 'update_all',
    UPDATE_VALUE: 'update_value',
    RESET: 'reset',
    CURRENT: 'get_current',
}

export function elementReducer(state, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_ALL: {
            return {
                id: action.id,
                main: action.main,
                value: action.value,
            }
        }
        case ACTIONS.UPDATE_VALUE: {
            return {
                ...state,
                value: action.value,
            }
        }
        case ACTIONS.RESET: {
            return {
                id: null,
                main: null,
                value: null,
            }
        }
        case ACTIONS.CURRENT: {
            return state
        }
    }
}
