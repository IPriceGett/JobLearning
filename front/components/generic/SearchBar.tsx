'use client';

import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const { push } = useRouter();

    const [keyword, setKeyword] = useState('');

    const handleChange = (e: any) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        push(`/busqueda?termino=${encodeURIComponent(keyword)}`);
        setKeyword('');
    };

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center bg-[#8E8E8E] rounded-full  px-4 text-[#464646] '>
                    <BiSearch size={20} className='text-[#464646]'></BiSearch>
                    <div className='w-full pl-2'>
                        <input
                            type='text'
                            name='search'
                            placeholder='¿Qué buscas?'
                            className='w-full  bg-[#8E8E8E] text-[#464646] text-md font-semibold focus:outline-none placeholder-[#464646]'
                            onChange={handleChange}
                            value={keyword}
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
