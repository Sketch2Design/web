import { authReducer, AUTH_ACTIONS } from '@/store/reducer/authReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import supabase from 'supabase'

export const AuthContext = createContext(null)

export function useAuthContext() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [auth, authDispatch] = useReducer(authReducer, null)

    useEffect(() => {
        if (auth === null) {
            getUser()
        }

        async function getUser() {
            const {
                data: { user },
            } = await supabase.auth.getUser()
            authDispatch({ type: AUTH_ACTIONS.ADD_USER, values: user })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
