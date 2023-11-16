import React, { useEffect, useState } from 'react';
import Header from 'components/shared/header';
import Button from '../components/generic/button';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const detalleCurso: NextPage = () => {
    const { push } = useRouter();
    const [job, setJob] = useState({
        price: 0,
        id: 0,
        name: '',
        description: '',
    });

    const handleMod = async (value: number) => {
        try {
            const id = new URLSearchParams(window.location.search);
            const response = await fetch(
                'https://49c6-201-223-197-118.ngrok-free.app/job/moderate',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: localStorage.getItem('token'),
                    },
                    body: JSON.stringify({ value: value, id: id.get('id') }),
                }
            );

            if (response.ok) {
                alert('Éxito');
                push('/oficiosCreados');
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
            const response = await fetch(
                'https://49c6-201-223-197-118.ngrok-free.app/job/byId',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: localStorage.getItem('token'),
                    },
                    body: JSON.stringify({ id: id.get('id') }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);
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
                    <div className='text-3xl font-bold'>Editar curso</div>
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
                    <div className='flex flex-col mb-4'>
                        <div className='text-2xl font-bold mb-2'>
                            {job.name}
                        </div>
                        <div className='font-medium text-xl mb-1'>
                            Ignacio Price
                        </div>
                        <div className='font-normal'>{job.description}</div>
                    </div>

                    <div className='mod w-full'>
                        <div className='flex items-center my-4 gap-2'>
                            {/* <Button
                                    size='small'
                                    appearance='green'
                                    onClick={() => {
                                        handleMod(1);
                                    }}
                                >
                                    <p>Aceptar</p>
                                </Button> */}
                            <Button
                                size='small'
                                appearance='delete'
                                onClick={() => {
                                    handleMod(2);
                                }}
                            >
                                Terminación de curso
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default detalleCurso;
