import { ReactNode } from 'react';

type Props = {
    tittle: string;
    children?: ReactNode;
};
const JobsSection = ({ tittle, children }: Props): JSX.Element => {
    return (
        <div className='grid grip-rows-2 gap-y-2 my-6 md:my-10 justify-center md:justify-normal items-center'>
            <div className='flex justify-center md:justify-normal'>
                <span className='text-3xl font-bold text-white mb-4 '>
                    {tittle}
                </span>
            </div>
            <div className='slides-container w-full p-[40px] swiper'>
                <div className='slide-content'>
                    <div className='swiper-wrapper'>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default JobsSection;
