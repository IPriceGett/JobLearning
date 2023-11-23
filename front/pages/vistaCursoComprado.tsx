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

    const [chapter, setChapter] = useState(0);

    // const handleClick = async () => {
    //     try {
    //         const id = new URLSearchParams(window.location.search);
    //         const response = await fetch(
    //             'http://localhost:5000/userjob/create',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     authorization: localStorage.getItem('token'),
    //                 },
    //                 body: JSON.stringify({ job: id.get('id') }),
    //             }
    //         );

    //         if (response.ok) {
    //             push('/misOficios');
    //         } else {
    //             console.log('Error:', response.status);
    //         }
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // };

    const imgs = [
        'https://i.ytimg.com/vi/5e290TCqf6o/maxresdefault.jpg',
        'https://i.ytimg.com/vi/U7yEF9N2BYU/maxresdefault.jpg',
        'https://i.ytimg.com/vi/WSUQ_TxoVrY/maxresdefault.jpg',
    ];
    const chapters = [
        'https://www.youtube.com/embed/5e290TCqf6o?list=PLNnWUij-k9uw1yH5I4fCzNRDrG0uoAcKU',
        'https://www.youtube.com/embed/U7yEF9N2BYU?controls=0',
        'https://www.youtube.com/embed/WSUQ_TxoVrY?controls=0',
    ];
    console.log(chapters[chapter]);

    useEffect(() => {
        const fetchJob = async () => {
            const id = new URLSearchParams(window.location.search);
            // console.log(id.get('id'));
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
                // console.log(data);
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
                    <div className='text-4xl font-bold mb-2 text-[#4CAF50]'>
                        {job.name}
                    </div>
                    <div className='text-xl font-bold mb-2'>
                        Capítulo {chapter + 1}
                    </div>
                    <div className='flex flex-col items-center mx-auto'>
                        <div className='bg-black border-[#707070] border-2 my-4 h-48 md:h-96 aspect-video flex items-center justify-center'>
                            <iframe
                                className='w-full h-full'
                                src={chapters[chapter]}
                                title='Como aprender carpintería desde cero'
                                allow='autoplay; clipboard-write; encrypted-media; gyroscope;'
                                allowFullScreen
                                rel='1'
                            ></iframe>
                        </div>
                    </div>

                    {/* <div className='flex flex-col'>
                        <div className='font-semibold text-xl mb-1'>
                            Ignacio Price
                        </div>
                        <div className='font-normal'>{job.description}</div>
                    </div> */}

                    {/* <div className='flex flex-col items-center my-4'>
                        <div className='mb-2'>
                            <Button
                                size='medium'
                                appearance='green'
                                onClick={() => {
                                    handleClick();
                                }}
                            >
                                <p>Compradooo</p>
                                <p>${job.price} CLP</p>
                            </Button>
                        </div>
                        <div className=''>
                            <Button size='small' appearance='amber'>
                                Volver
                            </Button>
                        </div>
                    </div> */}
                    <div className='text-3xl font-bold mb-4'>Capítulos</div>
                    <div className='flex gap-x-4'>
                        {imgs.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setChapter(index)}
                                className='cursor-pointer bg-zinc-900 text-white hover:bg-zinc-950 p-4 rounded-xl shadow-md'
                            >
                                <div className='justify-center gap-x-4'>
                                    <img
                                        className='w-[350px] aspect-video object-cover p-2'
                                        src={img}
                                        alt='img'
                                    />
                                    <div className='text-xl font-semibold'>
                                        Capítulo {index + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default detalleCurso;
