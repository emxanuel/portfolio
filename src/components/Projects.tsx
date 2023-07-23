import Project from "./Project"
import { project, projects } from "../data/projects"
import { Slide } from "react-awesome-reveal"

export const Projects = () => {
    return (
        <div className='font-semibold text-white relative '>
            <h1 className='mt-4 text-center w-screen text-7xl relative text-transparent borderText'>My work</h1>
            <div className=' justify-center flex flex-col items-center p-11 w-full '>
                {projects ? (
                    projects.map((project: project) => (
                        project.id % 2 === 0 ? (
                            <Slide key={project.id} triggerOnce direction="left" className="w-full">
                                <Project
                                    reverse
                                    project={project}
                                />
                            </Slide>
                        ) : (
                            <Slide key={project.id} triggerOnce direction="right" className="w-full">
                                <Project
                                    project={project}
                                />
                            </Slide>
                        )
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}
