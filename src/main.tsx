import './styles/main.css'
import AppRouter from './routes/.Routing.js';
import Header from './components/header.js';
// import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';

// root sets the main layout and contains the Header and the Router that renders other views
// w-1/2?
function Root() {
  
  return (
    <div id='viewport' className='flex flex-row'>
      <div className='w-1/5 bg-slate-100 h-screen' >
        <Sidebar/>
      </div>

      <div className='w-4/5 bg-green-100'>
        <Dashboard/>
      </div>

      {/* <div className=''>

        <div id="header" className='w-full bg-slate-100 pb-5 pt-10'>
          <div className='w-2/3 mx-auto'>
            <Header/>
          </div>
        </div>

        <div id='router-view' className="flex flex-col">
          <AppRouter/>
        </div>


      </div> */}
    </div>

  )
}

export default Root
