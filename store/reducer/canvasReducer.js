import { v4 as uuidv4 } from 'uuid'

export const CANVAS_ACTIONS = {
    ADD: 'add_item',
    ADD_ALL: 'add_all',
    DELETE: 'delete_item',
    UPDATE: 'update_item',
    RESET: 'reset_all',
}

export const CURRENT_ACTIONS = {
    ADD: 'add_new_current_item',
    CHANGE: 'change_current_item',
    UPDATE: 'update_current_item',
    DELETE: 'delete_current_item',
    RESET: 'reset',
    INITIAL: 'first_load',
}

export function canvasReducer(state, action) {
    switch (action.type) {
        case CANVAS_ACTIONS.ADD_ALL: {
            return action.values
        }
        case CANVAS_ACTIONS.ADD: {
            return [...state, action.values]
        }

        case CANVAS_ACTIONS.UPDATE: {
            return state.map((item) =>
                item.id === action.values.id
                    ? { ...item, ...action.values }
                    : item
            )
        }

        case CANVAS_ACTIONS.DELETE: {
            const filtered = state.filter((item) => item.id !== action.id)
            return filtered
        }

        case CANVAS_ACTIONS.RESET: {
            return []
        }
    }
}

export function currentReducer(state, action) {
    switch (action.type) {
        case CURRENT_ACTIONS.ADD: {
            const id = action.id || uuidv4()
            return {
                id: id,
                values: { id: id, ...action.values },
                update: false,
                initial: false,
                delete: false,
                add: true,
            }
        }

        case CURRENT_ACTIONS.CHANGE: {
            return {
                id: action.id,
                values: action.values,
                update: false,
                add: false,
                delete: false,
                initial: false,
            }
        }

        case CURRENT_ACTIONS.UPDATE: {
            return {
                ...state,
                values: { ...state.values, ...action.values },
                update: true,
                add: false,
            }
        }

        case CURRENT_ACTIONS.DELETE: {
            return {
                ...state,
                delete: true,
            }
        }

        case CURRENT_ACTIONS.RESET: {
            return {
                id: null,
                values: null,
                update: false,
                add: false,
                delete: false,
                initial: false,
            }
        }

        case CURRENT_ACTIONS.INITIAL: {
            return {
                id: null,
                values: null,
                update: false,
                add: false,
                delete: false,
                initial: true,
            }
        }
    }
}
