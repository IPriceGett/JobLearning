import Header from 'components/shared/header';
import Card from 'components/generic/card';
import Circle from 'components/pages/index/circle';
import Section from 'components/pages/index/section';

const IndexContent = (): JSX.Element => {
    return (
        <>
            <Header></Header>
            <div className='container mx-auto md:my-10 my-2 md:px-10 px-4'>
                <span className='text-3xl font-bold text-white mt-[20px]'>
                    Bienvenido a e-JobLearning!
                </span>
                <Section>
                    <div className="basis-8/12 flex justify-center w-full h-[500px] rounded-[10px] bg-[url('https://vivirmejor.mx/wp-content/uploads/2022/02/Herramientas-de-carpinteria-basicas.jpg')]"></div>
                    <div className='basis-4/12 flex items-cente justify-center'>
                        <span className='text-3xl font-bold text-center'>
                            ¡Aprende lo que necesites por expertos en el área!
                        </span>
                    </div>
                </Section>
                <Section>
                    <div className='basis-8/12'>
                        <div className='mr-[20px] flex items-center justify-center'>
                            <p className='text-3xl font-bold text-center'>
                                Los mejores trabajadores están aquí para darte
                                sus consejos y apoyarte en tu desarrollo a una
                                vida mejor!
                            </p>
                        </div>
                    </div>
                    <div className="basis-6/12 flex justify-center w-full  h-[300px] rounded-[10px] mt-[30px] bg-[url('https://mitsubishi-motors.com.co/blog/wp-content/uploads/2020/05/dia-internacional-del-trabajador.jpg')]"></div>
                </Section>
            </div>
        </>
    );
};

export default IndexContent;
