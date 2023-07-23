import { project } from "../data/projects"

interface Props {
    project: project
}

const Project: React.FC<Props> = ({ project }) => {
    return (
        <div className='text-slate-500 text-3xl w-full'>
            <p className='text-center mb-12'>{project.name}</p>
            <div className='flex justify-around w-full'>
                <div className='bg-black w-96 aspect-auto flex justify-center text-center items-center'>
                    <img src={`/src/assets/${project.name}.png`} alt="" />
                </div>
                <div className='w-96'>
                    <p>{project.description }</p>
                </div>
            </div>
        </div>
    )
}

export default Project