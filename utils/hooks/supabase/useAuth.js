import { useAuthContext } from '@/store/context/providers/AuthProvider'
import { AUTH_ACTIONS } from '@/store/reducer/authReducer'
import { useRouter } from 'next/router'
import { useState } from 'react'
import supabase from 'supabase'

export default function useAuth() {
    const router = useRouter()

    const { authDispatch, auth } = useAuthContext()

    const [loading, setloading] = useState(false)
    const [error, seterror] = useState({ value: false, message: null })

    async function signin(emailRef, passwordRef) {
        seterror({
            value: false,
            message: null,
        })
        const email = emailRef.current.value
        const password = passwordRef.current.value

        // check field is empty or not
        if (email === '' || password === '') {
            seterror({
                value: true,
                message: 'All fields are required',
            })
            return
        }
        setloading(true)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        setloading(false)

        if (!error) {
            authDispatch({ type: AUTH_ACTIONS.ADD_USER, values: data.user })
            router.push('/dashboard')
        } else {
            seterror({
                value: true,
                message: error.message,
            })
        }
    }

    async function signup(nameRef, emailRef, passwordRef) {
        seterror({
            value: false,
            message: null,
        })
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        // check field is empty or not
        if (name === '' || email === '' || password === '') {
            seterror({
                value: true,
                message: 'All fields are required',
            })
            return
        }

        // sign up with supabase
        setloading(true)
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name,
                },
            },
        })
        setloading(false)

        // error handling
        if (!error) {
            authDispatch({ type: AUTH_ACTIONS.ADD_USER, values: data.user })
            router.push('/dashboard')
        } else {
            seterror({
                value: true,
                message: error.message,
            })
        }
    }

    async function signout() {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            authDispatch({
                type: AUTH_ACTIONS.REMOVE_USER,
            })
            router.push('/login')
        }
    }

    async function editName(nameRef) {
        const name = nameRef.current.value
        if (name === '') {
            nameRef.current.value = auth?.user_metadata?.name
            return
        }

        const { data, error } = await supabase.auth.updateUser({
            data: { name: name },
        })
        if (!error) {
            authDispatch({ type: AUTH_ACTIONS.ADD_USER, values: data.user })
        }
    }

    async function editPassword(password, setmessage) {
        const { data, error } = await supabase.auth.updateUser({
            password: password,
        })
        if (!error) {
            setmessage('Password updated succesfully')
        }
    }

    return { error, loading, signin, signup, signout, editName, editPassword }
}
