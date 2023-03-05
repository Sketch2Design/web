/**
 * @typedef {object} ELEMENT_ACTIONS
 * @property {string} UPDATE_ALL
 * @property {string} UPDATE_VALUE
 * @property {string} RESET
 * @property {string} CURRENT
 */

export const ELEMENT_ACTIONS = {
    UPDATE_ALL: 'update_all',
    UPDATE_VALUE: 'update_value',
    RESET: 'reset',
}

/**
 * @typedef {object} item
 * @property {number} id
 * @property {string} main
 * @property {string} value
 */

/**
 * @typedef {object} action
 * @property {CANVAS_ACTIONS} type
 * @property {item}
 */

/**
 * @param {item} state
 * @param {action} action
 * @returns
 */

export function elementReducer(state, action) {
    switch (action.type) {
        case ELEMENT_ACTIONS.UPDATE_ALL: {
            return {
                id: action.id,
                main: action.main,
                value: action.value,
            }
        }
        case ELEMENT_ACTIONS.UPDATE_VALUE: {
            return {
                ...state,
                value: action.value,
            }
        }
        case ELEMENT_ACTIONS.RESET: {
            return {
                id: null,
                main: null,
                value: null,
            }
        }
    }
}
