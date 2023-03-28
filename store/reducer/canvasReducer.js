import { v4 as uuidv4 } from 'uuid'

export const CANVAS_ACTIONS = {
    ADD: 'add_item',
    ADD_ALL: 'add_all',
    DELETE: 'delete_item',
    UPDATE: 'update_item',
}

export const CURRENT_ACTIONS = {
    CHANGE: 'change_current_item',
    UPDATE: 'update_values',
    FORCE: 'force_update_canvas_values',
    RESET: 'reset',
}

export function canvasReducer(state, action) {
    switch (action.type) {
        case CANVAS_ACTIONS.ADD_ALL: {
            return action.values
        }
        case CANVAS_ACTIONS.ADD: {
            const id = uuidv4()
            action.current({
                type: CURRENT_ACTIONS.CHANGE,
                id: id,
                values: action.values,
            })
            return [...state, { id: id, ...action.values }]
        }

        case CANVAS_ACTIONS.UPDATE: {
            return state.map((item) =>
                item.id === action.values.id
                    ? { ...item, ...action.values }
                    : item
            )
        }

        case CANVAS_ACTIONS.DELETE: {
            const filtered = state.filter(
                (item) => item.id !== action.values.id
            )
            return filtered
        }
    }
}

export function currentReducer(state, action) {
    switch (action.type) {
        case CURRENT_ACTIONS.CHANGE: {
            return { id: action.id, values: action.values, update: false }
        }

        case CURRENT_ACTIONS.UPDATE: {
            return { ...state, values: { ...state.values, ...action.values } }
        }

        case CURRENT_ACTIONS.FORCE: {
            return { ...state, update: true }
        }

        case CURRENT_ACTIONS.RESET: {
            return { id: null, values: null, update: false }
        }
    }
}
