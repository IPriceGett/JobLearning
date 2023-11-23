import React from 'react';
import Header from 'components/shared/header';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { registerValidation } from 'Schemas/IndexRegister';
import Section from 'components/pages/index/section';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Register: NextPage = () => {
    const { push } = useRouter();
    const initialValues = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        login: 1,
    };

    const handleSubmit = async (values) => {
        delete values.confirmPassword;
        try {
            const response = await fetch(
                'http://localhost:5000/user/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log('Response JSON:', data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('rol', data.rol);
                push('/');
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <>
            <Header />
            <Section>
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerValidation}
                    onSubmit={handleSubmit}
                >
                    {({ touched, errors }) => (
                        <Form
                            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/3'
                            style={{ backgroundColor: '#333333' }}
                        >
                            <h1 className='text-2xl font-bold mb-4'>
                                ¡Registrate!
                            </h1>
                            <div className='mb-4'>
                                <Field
                                    type='name'
                                    id='name'
                                    name='name'
                                    placeholder='Ingrese su nombre'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E]  ${
                                        touched.name && errors.name
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='name'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>
                            <div className='mb-4'>
                                <Field
                                    type='surname'
                                    id='surname'
                                    name='surname'
                                    placeholder='Ingrese su apellido'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.surname && errors.surname
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='surname'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='mb-4'>
                                <Field
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Ingrese su correo electronico'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.email && errors.email
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='mb-4'>
                                <Field
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    placeholder='Ingrese su numero de telefono'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.phone && errors.phone
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='phone'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='mb-4'>
                                <Field
                                    type='password'
                                    id='password'
                                    name='password'
                                    placeholder='Ingrese contraseña'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.password && errors.password
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='password'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='mb-4'>
                                <Field
                                    type='Password'
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    placeholder='Ingrese contraseña'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.confirmPassword &&
                                        errors.confirmPassword
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='confirmPassword'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='flex justify-center space-x-4 mt-2'>
                                ¿Ya tienes una cuenta?¡Inicia sesión!
                            </div>

                            <div className='flex justify-center '>
                                <button
                                    type='submit'
                                    className='text-white bg-[#FF8900] hover:bg-[#e17c07]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 mt-2 w-full sm:w-auto flex-grow'
                                >
                                    Regístrate
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Section>
        </>
    );
};

export default Register;
