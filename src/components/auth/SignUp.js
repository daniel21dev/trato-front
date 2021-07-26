import React from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import SignUpForm from './SignUpForm'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '../utils/Alert'
import { signupAction } from '../../actions/authActions'

export const SignUp = () => {

    const dispatch = useDispatch()
    const { error, loading } = useSelector( state => state.auth )

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('El mombre es obligatorio'),
            email: Yup.string()
                .email('el email no es valido')
                .required('El email no puede ir vacio'),
            password: Yup.string()
                .required('El password es obligatorio')
        }),
        onSubmit: async ({name,email,password}) =>{
            dispatch( signupAction(name,email,password) )
        }   
    })

    return (
        <AuthLayout>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to Startup</h3>
                    <p className="text-gray-600 pt-2">Sign in to your account.</p>
                </section>
                <section className="mt-10">

                { error && <Alert type="error" msg={ error }/>}
                { loading && <Alert type="info" msg="Cargando..."/>}

                <SignUpForm formik={ formik }/>

                </section>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-black">¿Ya tienes una cuenta? 
                        <Link to='/login' className="underline"> Login</Link>.
                    </p>
                </div>
            </main>

            
        </AuthLayout>
    )
}
