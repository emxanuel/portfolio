import { project } from "../data/projects"
import { Fade } from 'react-awesome-reveal'

interface Props {
    project: project,
    reverse?: boolean
}

const Project: React.FC<Props> = ({ project, reverse }) => {
    return (
        <div className='text-slate-500 text-3xl w-full'>
            <Fade className="text-center w-full mb-12" cascade triggerOnce damping={1e-1}>{project.name}</Fade>
            <div className={`flex justify-around w-full ${reverse? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex items-center flex-col">
                    <div className='bg-black w-96 aspect-auto flex justify-center text-center items-center'>
                        <img src={`/src/assets/${project.name}.png`} alt="" />
                    </div>
                    <div className="-mt-5 flex gap-6 bg-slate-800 rounded-3xl p-1 px-6 text-white">
                        <a className="hover:scale-125 duration-300" target="_blank" href={project.repo}><i className="fa-brands fa-github" /></a>
                        <a className="hover:scale-125 duration-300" target="_blank" href={project.url}><i className="fa-solid fa-eye" /></a>
                    </div>
                </div>
                <div className='w-96'>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Project