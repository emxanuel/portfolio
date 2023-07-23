import Study from "./Study"
import { studies, study } from "../data/studies"

const Studies = () => {
    return (
        <div className='flex flex-col text-center absolute w-full h-screen mt-32'>
            <h2 className='text-left text-4xl text-white font-bold w-full p-6'>Studies</h2>
            {studies[0].id === 1 ?
                studies.map((study: study) => (
                    <Study study={study} key={study.id}/>
                )) : (
                    <div></div>
                )}
        </div>
    )
}

export default Studies