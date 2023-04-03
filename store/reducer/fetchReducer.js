export const FETCH_ACTIONS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
    RESET: 'reset',
}

export const FETCH_INITIAL = {
    loading: false,
    success: false,
    error: { value: false, message: null },
}

export function fetchReducer(state, action) {
    switch (action.type) {
        case FETCH_ACTIONS.LOADING: {
            return { ...state, loading: action.loading }
        }
        case FETCH_ACTIONS.SUCCESS: {
            return {
                ...state,
                success: action.success,
            }
        }

        case FETCH_ACTIONS.ERROR: {
            return {
                ...state,
                error: { value: true, message: action.message },
            }
        }

        case FETCH_ACTIONS.RESET: {
            return FETCH_INITIAL
        }
    }
}
