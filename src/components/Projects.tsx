import Project from "./Project"
import { project, projects } from "../data/projects"

export const Projects = () => {
    return (
        <div className=' font-semibold text-white relative '>
            <h1 className=' text-center w-screen text-7xl relative text-transparent borderText'>My work</h1>
            <div className=' justify-center flex flex-col items-center p-11 w-full '>
                {projects? (
                    projects.map((project: project) => (
                        <Project 
                            project={project}
                            key={project.id}
                        />
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}
