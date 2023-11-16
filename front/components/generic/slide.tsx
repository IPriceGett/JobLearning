import React from 'react';
import Card from './card';
import { useRouter } from 'next/router';

interface Job {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface SlideProps {
    job: Job;
    tipo: string
}

const Slide: React.FC<SlideProps> = ({ job, tipo }) => {
    const { push } = useRouter();
    // console.log(job);
    const handleClick = (id: number) => {
        if (tipo === 'creador') {
            push('/vistaCursoCreador?id=' + id);
        } else {
            push('/previewCurso?id=' + job.id);
        }
    }

    return (
        <div
            onClick={() => {
                handleClick(job.id)
            }}
        >
            <Card
                title={job.name}
                desc={job.description}
                precio={job.price}
                photo='https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg'
            ></Card>
        </div>
    );
};

export default Slide;
