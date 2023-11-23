import React from 'react';
import Header from 'components/shared/header';
import { NextPage } from 'next';
import { usersListMod } from 'hooks/useMod';
import { FaUserLarge } from 'react-icons/fa6';
import Button from 'components/generic/button';
import { useRouter } from 'next/router';

const usuariosMod: NextPage = () => {
    const { reload } = useRouter();

    const url = 'http://localhost:5000/user/list';
    const { users, isLoading } = usersListMod(url);
    // console.log(users)

    const handleClick = async (id: number) => {
        try {
            const response = await fetch('http://localhost:5000/user/disable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token'),
                },
                body: JSON.stringify({ id: id }),
            });

            if (response.ok) {
                reload();
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <>
            <Header></Header>
            <div className='container mx-auto px-6 md:px-10'>
                <div className='grid grip-rows-2 gap-y-2 my-6 md:my-10 justify-center md:justify-normal items-center'>
                    <div className='flex justify-center md:justify-normal'>
                        <span className='text-3xl font-bold text-white mb-4 '>
                            Usuarios
                        </span>
                    </div>
                    <div className='w-full '>
                        <div className=''>
                            {isLoading && (
                                <span className='text-xl font-bold text-white'>
                                    Cargando...
                                </span>
                            )}
                            {users.map((user, index: number) => (
                                <div
                                    key={index}
                                    className='text-white h-20 bg-gray-500 w-[600px] my-2 flex px-2 rounded-md text-3xl'
                                >
                                    <div className='nombre basis-2/3 flex gap-x-2 items-center'>
                                        <FaUserLarge />
                                        <div>{user.name}</div>
                                        <div>{user.surname}</div>
                                    </div>
                                    <div className='basis-1/3 items center flex justify-end items-center'>
                                        <Button
                                            size='small'
                                            appearance='delete'
                                            onClick={() => {
                                                handleClick(user.id);
                                            }}
                                        >
                                            Dar de baja
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default usuariosMod;
