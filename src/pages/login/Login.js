import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', JSON.stringify(data))
                    
                    history.push('/')
                }
            })
    }

    const validations = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            
            <h1>DESAFIO STONE</h1>
            <h2>API Marvel</h2>
            <p>Preencha os campos para continuar ou cadastre-se <a href="http://localhost:3000/register">AQUI</a></p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="username"
                            className="Login-Field" placeholder="Digite o username"
                        />
                        <ErrorMessage
                            component="span"
                            name="username"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="password" type="password"
                            className="Login-Field" placeholder="Digite o password"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Login</button>
                </Form>
            </Formik>
        </>
    )
}

export default Login
