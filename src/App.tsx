import React from 'react'

const App = () => {
  return (
    <div className='select-none min-h-screen flex flex-col'>
        <div className='h-56 bg-slate-900'>
          <h1 className='font-bold text-5xl text-center text-white
          pt-6
          '>
            Emmanuel Lopez
          </h1>
          <h2 className='text-slate-400 text-4xl font-semibold text-center opacity-90'>
            portfolio
          </h2>
      </div>
      <div className='z-0 h-52 bg-slate-900 rotate-6 -mt-24 skew-x-6 -mr-1 -ml-1 justify-center'>
      </div>
      <div className='-mt-20 font-semibold text-white relative  '>
        <h1 className=' text-center w-screen text-7xl relative
        '>Projects</h1>
        <div className='w-screen justify-center flex flex-col items-center p-11'>
          <a href="https://emxanuel.github.io/social-network" target='_blank' className='text-slate-500 text-3xl'>
            social network
          </a>
          <div className='bg-black opacity-80 w-52 aspect-video flex justify-center text-center items-center'>
            <p className=''>preview</p>
          </div>
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