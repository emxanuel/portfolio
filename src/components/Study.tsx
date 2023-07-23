import React from "react"
import { study } from "../data/studies"

interface Props {
    study: study
}

const Study: React.FC<Props> = ({ study }) => {
    return (
        <div>
            <p className='text-gray-400 text-xl mt-5 mb-5'>{study.title} - <a className='font-semibold text-slate-300 text-2xl duration-300 hover:text-slate-600 hover:duration-300'
                href="https://www.itesa.edu.do" target='_blank'>{study.institution}</a></p>
        </div>
    )
}

export default Study