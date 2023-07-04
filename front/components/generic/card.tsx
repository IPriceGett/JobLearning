import Button from './button';

type Props = {
    title?: string;
    desc?: string;
    photo?: string;
    precio?: number;
};

const card = ({ title, desc, photo, precio }: Props): JSX.Element => {
    return (
        <div className='bg-zinc-900 text-white hover:bg-zinc-950 transition max-w-[350px] h-[300px] rounded-xl p-2 shadow-md swiper-slide '>
            <div className='top pt-1'>
                <img
                    className='w-[350px] aspect-video object-cover p-2'
                    src={photo}
                    alt='img'
                />
            </div>
            <div className='bottom flex flex-col justify-center items-start px-3 py-1'>
                <div className='tittle font-bold text-lg text-[#4CAF50]'>
                    {title}
                </div>
                <div className='font-semibold text-base'> Autor</div>{' '}
                {/* need to get it */}
                <div className='price font-bold text-lg '>${precio} CLP</div>
            </div>
        </div>
    );
};

export default card;
