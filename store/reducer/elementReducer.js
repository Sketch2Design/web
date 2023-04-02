export const ELEMENT_ACTIONS = {
    UPDATE_ALL: 'update_all',
    UPDATE_VALUE: 'update_value',
    RESET: 'reset',
}

export function elementReducer(state, action) {
    switch (action.type) {
        case ELEMENT_ACTIONS.UPDATE_ALL: {
            return action.values
        }
        case ELEMENT_ACTIONS.UPDATE_VALUE: {
            return {
                ...state,
                type: action.values.type,
            }
        }
        case ELEMENT_ACTIONS.RESET: {
            return {
                id: null,
                main: null,
                type: null,
            }
        }
    }
}
