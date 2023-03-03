/**
 * @typedef {object} CANVAS_ACTIONS
 * @property {string} ADD
 * @property {string} DELETE
 * @property {string} UPDATE
 * @property {string} CURRENT
 */

export const CANVAS_ACTIONS = {
    ADD: 'add_item',
    DELETE: 'delete_item',
    UPDATE: 'update_item',
    CURRENT: 'set_current'
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
 */

/**
 * @typedef {object} action
 * @property {CANVAS_ACTIONS} type
 * @property {item} values
 */

/**
 * @param {item[]} state 
 * @param {action} action 
 * @returns 
 */

export function canvasReducer(state, action){
    switch (action.type) {
        case CANVAS_ACTIONS.ADD: {
            return [
                ...state,
                { id: state?.id ? state?.id + 1 : 1, ...action.values}
            ]
        }
        
        case CANVAS_ACTIONS.UPDATE: {
            return state.map((item) => 
                item.id == action.values.id && 
                {...item, ...action.values}
            )
        }

        case CANVAS_ACTIONS.DELETE: {
            return state.map((item) => 
                item.id == action.values.id && null
            )
        }

        case CANVAS_ACTIONS.CURRENT: {
            
            return state.map((item) => 
                item.id == action.values.id && null
            )
        }
    }
}