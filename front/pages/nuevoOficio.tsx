import React from 'react';
import Header from 'components/shared/header';
import { Formik, Field, ErrorMessage, Form, FieldArray } from 'formik';
import { oficioValidation } from 'Schemas/indexOficio';
import Section from 'components/pages/index/section';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { IoMdAddCircle, IoIosRemoveCircle } from 'react-icons/io';

const nuevoOficio: NextPage = () => {
    const { push } = useRouter();
    const initialValues = {
        name: '',
        description: '',
        price: '',
        category: '',
        preview: '',
        chapters: [''],
    };

    const handleSubmit = async (values) => {
        console.log(values);
        // try {
        //     const response = await fetch('http://localhost:5000/job/create', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             authorization: localStorage.getItem('token'),
        //         },
        //         body: JSON.stringify(values),
        //     });

        //     if (response.ok) {
        //         const data = await response.json();
        //         console.log('Response JSON:', data);
        //         push('/oficiosCreados');
        //     } else {
        //         console.log('Error:', response.status);
        //     }
        // } catch (error) {
        //     console.log('Error:', error);
        // }
    };

    return (
        <>
            <Header />
            <Section>
                <Formik
                    initialValues={initialValues}
                    validationSchema={oficioValidation}
                    onSubmit={handleSubmit}
                >
                    {({ touched, errors }) => (
                        <Form
                            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/3'
                            style={{ backgroundColor: '#333333' }}
                        >
                            <h1 className='text-2xl font-bold mb-4'>
                                ¡Crea un curso!
                            </h1>
                            <div className='mb-4'>
                                <Field
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Ingrese el título del curso'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
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
                                    type='description'
                                    as='textarea'
                                    id='description'
                                    name='description'
                                    placeholder='Ingrese una descripción del curso'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] resize-y overflow-auto ${
                                        touched.description &&
                                        errors.description
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='description'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='mb-4'>
                                <Field
                                    type='price'
                                    id='price'
                                    name='price'
                                    placeholder='Ingrese el precio del curso'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.price && errors.price
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='price'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='mb-4'>
                                <Field
                                    type='category'
                                    as='select'
                                    id='category'
                                    name='category'
                                    placeholder='Seleccione una categoría para el curso'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.category && errors.category
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                >
                                    <option value='' defaultValue={0} disabled>
                                        -Seleccione una categoría-
                                    </option>
                                    <option value={1}>Carpintería</option>
                                </Field>
                                <ErrorMessage
                                    name='category'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>
                            <div className='mb-4'>
                                <Field
                                    type='text'
                                    id='preview'
                                    name='preview'
                                    placeholder='Ingrese el link de YouTube de la preview del curso'
                                    className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                        touched.name && errors.name
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                <ErrorMessage
                                    name='preview'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>
                            <div className='mb-4'>
                                <FieldArray name='chapters'>
                                    {(fieldArrayProps) => {
                                        const { push, remove, form } =
                                            fieldArrayProps;
                                        const { values } = form;
                                        const { chapters } = values;
                                        return (
                                            <div>
                                                {chapters.map(
                                                    (chapter, index) => (
                                                        <div key={index}>
                                                            <Field
                                                                name={`chapters[${index}]`}
                                                                placeholder='Ingrese el link de YouTube del capítulo del curso'
                                                                className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                                                                    touched.name &&
                                                                    errors.name
                                                                        ? 'border-red-500'
                                                                        : 'border-gray-300'
                                                                }`}
                                                            ></Field>

                                                            {index > 0 && (
                                                                <button
                                                                    type='button'
                                                                    onClick={() =>
                                                                        remove(
                                                                            index
                                                                        )
                                                                    }
                                                                >
                                                                    {' '}
                                                                    <IoIosRemoveCircle
                                                                        size={
                                                                            20
                                                                        }
                                                                        className='mt-2 text-red-500'
                                                                    />{' '}
                                                                </button>
                                                            )}
                                                            <button
                                                                type='button'
                                                                onClick={() =>
                                                                    push('')
                                                                }
                                                            >
                                                                {' '}
                                                                <IoMdAddCircle
                                                                    size={20}
                                                                    className='mt-2 text-green-500'
                                                                />{' '}
                                                            </button>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        );
                                    }}
                                </FieldArray>
                                <ErrorMessage
                                    name='chapters'
                                    component='div'
                                    className='text-red-500 text-xs'
                                />
                            </div>

                            <div className='flex justify-center '>
                                <button
                                    type='submit'
                                    className='text-white bg-[#FF8900] hover:bg-[#e17c07]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 w-full sm:w-auto flex-grow'
                                >
                                    ¡Crear Curso!
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Section>
        </>
    );
};

export default nuevoOficio;
