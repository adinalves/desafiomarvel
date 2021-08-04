import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const Register = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <h1>Cadastro</h1>
            <p>Preencha os campos abaixo:</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="firstName"
                            className="Login-Field" placeholder="Nome"
                        />
                        <ErrorMessage
                            component="span"
                            name="firstName"
                            className="Login-Error" 
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="lastName"
                            className="Login-Field" placeholder="Sobrenome"
                        />
                        <ErrorMessage
                            component="span"
                            name="lastName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="username"
                            className="Login-Field" placeholder="username"
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
                            className="Login-Field" placeholder="password"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error" 
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Cadastrar</button>
                </Form>
            </Formik>
        </>
    )
}

export default Register
