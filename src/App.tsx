import React from 'react'

const App = () => {
  return (
    <div className='select-none min-h-screen flex flex-col'>
        <div className='h-56 bg-slate-900 relative'>
          <h1 className='font-bold text-5xl text-center text-white
          pt-6
          '>
            Emmanuel Lopez
          </h1>
          <h2 className='text-slate-400 text-4xl font-semibold text-center opacity-90'>
            portfolio
          </h2>
      </div>
      <div className='z-0 h-52 bg-slate-900 rotate-6 -mt-24 skew-x-6 -mr-1 -ml-1'>
      </div>
      <div className='flex flex-col text-center absolute w-screen h-screen mt-32'>
        <h2 className='text-left text-4xl text-white font-bold
        '>Studies</h2>
        <p className='text-gray-400'>Software development and management - <a className='
        font-semibold text-slate-300
        ' href="https://itesa.edu.do" target='_blank'>Itesa</a></p>
      </div>
      <div className='-mt-20 font-semibold text-white relative '>
        <h1 className=' text-center w-screen text-7xl relative
        '>Projects</h1>
        <div className='w-screen justify-center flex flex-col items-center p-11'>
          <a href="https://emxanuel.github.io/social-network" target='_blank' className='text-slate-500 text-3xl'>
            social network
            <div className='bg-black opacity-80 w-52 aspect-video flex justify-center text-center items-center'>
            <p className='text-white text-sm'>preview</p>
          </div>
          </a>
        </div>
      </div>
      <div className='flex relative justify-center gap-8 '>
        <a target='_blank' href='https://github.com/emxanuel'>
          <i className='fa-brands fa-github text-5xl hover:text-gray-400'/>
        </a>
        <a target='_blank' href="https://instagram.com/emmanueellllll">
          <i className='fa-brands fa-instagram text-5xl hover:text-gray-400'/>
        </a>
        <a href="" target='_blank'>
          <i className='fa-brands fa-facebook text-5xl hover:text-gray-400' />
        </a>
      </div>
    </div>

  )
}

export default App