import React, { useEffect, useState } from 'react';
import Header from 'components/shared/header';
import Card from 'components/generic/card';
import Circle from 'components/pages/index/circle';
import Section from 'components/pages/index/section';
import Button from '../components/generic/button';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const detalleCurso: NextPage = () => {
    const { push } = useRouter();
    const [job, setJob] = useState({ price: 0, id: 0 });

    const handleClick = async () => {
        try {
            const id = new URLSearchParams(window.location.search);
            const response = await fetch(
                'http://localhost:5000/userjob/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: localStorage.getItem('token'),
                    },
                    body: JSON.stringify({ job: id.get('id') }),
                }
            );

            if (response.ok) {
                push('/misCursos');
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        const fetchJob = async () => {
            const id = new URLSearchParams(window.location.search);
            console.log(id.get('id'));
            const response = await fetch('http://localhost:5000/job/byId', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token'),
                },
                body: JSON.stringify({ id: id.get('id') }),
            });

            if (response.ok) {
                const data = await response.json();
                setJob(data);
            } else {
                console.log('Error:', response.status);
            }
        };
        fetchJob();
    }, []);

    return (
        <>
            <Header></Header>
            <div className='container mx-auto px-4 py-8 md:py-14 md:px-28'>
                <div className='grid items-center text-white max-w-fit mx-auto'>
                    <div className='flex flex-col items-center mx-auto'>
                        <div className='bg-black border-[#707070] border-2 my-4 h-48 md:h-96 aspect-video flex items-center justify-center'>
                            <iframe
                                className='w-full h-full'
                                src='https://www.youtube.com/embed/7DO4tsuQEQk?controls=0'
                                title='Como aprender carpintería desde cero'
                                allow='autoplay; clipboard-write; encrypted-media; gyroscope;'
                                allowFullScreen
                                rel='1'
                            ></iframe>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-bold mb-2'>
                            Titulo del curso
                        </div>
                        <div className='font-medium text-xl mb-1'>
                            Autor Curso
                        </div>
                        <div className='font-normal'>Descripcion del curso</div>
                    </div>

                    <div className='flex flex-col items-center my-4'>
                        <div className='mb-2'>
                            <Button
                                size='medium'
                                appearance='green'
                                onClick={() => {
                                    handleClick();
                                }}
                            >
                                <p>Comprar por</p>
                                <p>${job.price} CLP</p>
                            </Button>
                        </div>
                        <div className=''>
                            <Button size='small' appearance='amber'>
                                Volver
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default detalleCurso;
