import Footer from "./components/Footer"
import { Projects } from "./components/Projects"
import Studies from "./components/Studies"


const App = () => {
  return (
    <div className='select-none relative min-h-screen flex flex-col w-full overflow-hidden'>
      <div className='h-56 bg-slate-900 w-screen'>
        <h1 className='font-bold text-5xl text-center text-white w-full pt-6'>Emmanuel Lopez</h1>
        <h2 className='text-slate-400 text-4xl font-semibold text-center opacity-90'>portfolio</h2>
      </div><div className='z-0 h-52 bg-slate-900 rotate-6 -mt-24 skew-x-6 -mr-1 -ml-1'>
      </div>
      <Studies />
      <Projects />
      <Footer />
    </div>
  )
}

export default App