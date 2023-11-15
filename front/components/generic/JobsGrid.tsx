import { Job } from 'types/types';
import Card from './card';

interface JobsGridProps {
    jobs: Job[];
}

const JobsGrid: React.FC<JobsGridProps> = ({ jobs }) => {
    return (
        <div className='w-full p-0 grid grid-cols-2 gap-[6px] min-[478px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {jobs.map((job, index: number) => (
                <Card
                    title={job.name}
                    desc={job.description}
                    precio={job.price}
                    photo='https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg'
                    key={index}
                ></Card>
            ))}
        </div>
    );
};

export default JobsGrid;
