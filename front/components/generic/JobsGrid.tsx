import { Job } from 'types/types';
import GridCard from './gridcard';
import { useRouter } from 'next/router';

interface JobsGridProps {
    jobs: Job[];
}

const JobsGrid: React.FC<JobsGridProps> = ({ jobs }) => {
    const { push } = useRouter()

    return (
        <div className='w-full p-0 grid grid-cols-2 gap-[6px] min-[478px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {jobs.map((job, index: number) => (
                <div
                    onClick={() => {
                        push('/previewCurso?id=' + job.id);
                    }}
                >
                    <GridCard
                        title={job.name}
                        desc={job.description}
                        precio={job.price}
                        photo='https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a1.jpg'
                        key={index}
                    ></GridCard>
                </div>
            ))}
        </div>
    );
};

export default JobsGrid;
