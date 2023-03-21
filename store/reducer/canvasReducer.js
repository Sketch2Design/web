import { v4 as uuidv4 } from 'uuid'

/**
 * @typedef {object} CANVAS_ACTIONS
 * @property {string} ADD
 * @property {string} DELETE
 * @property {string} UPDATE
 */

export const CANVAS_ACTIONS = {
    ADD: 'add_item',
    ADD_ALL: 'add_all',
    DELETE: 'delete_item',
    UPDATE: 'update_item',
}

/**
 * @typedef {object} item
 * @property {number} id
 * @property {string} main
 * @property {string} value
 * @property {number} sx
 * @property {number} sy
 * @property {number} ex
 * @property {number} sy
 * @property {number} w
 * @property {number} h
 * @property {string} fill
 */

/**
 * @typedef {object} action
 * @property {CANVAS_ACTIONS} type
 * @property {item} values
 * @property {callback} current
 */

/**
 * @param {item[]} state
 * @param {action} action
 * @returns
 */

export function canvasReducer(state, action) {
    switch (action.type) {
        case CANVAS_ACTIONS.ADD_ALL: {
            return action.values
        }
        case CANVAS_ACTIONS.ADD: {
            const id = uuidv4()
            action.current({
                id: id,
                type: action.values.main,
                value: action.values.type,
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
