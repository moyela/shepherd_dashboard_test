import './styles/main.css'
import AppRouter from './routes/.Routing.js';
import Header from './components/header.js';
import Footer from './components/footer';

// root sets the main layout and contains the Header and the Router that renders other views
// w-1/2?
function Root() {
  
  return (
    <div id='viewport' className=''>
      <div id="header" className='w-full bg-slate-100 pb-5 pt-10'>
        <div className='w-2/3 mx-auto'>
          <Header/>
        </div>
      </div>

      <div id='router-view' className="flex flex-col">
        <AppRouter/>
      </div>

      <div className="px-48 py-10 bg-slate-100 font-mono italic">
        <Footer/>
      </div>
    </div>
  )
}

export default Root
