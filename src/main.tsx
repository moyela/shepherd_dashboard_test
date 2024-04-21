import './styles/main.css'
import AppRouter from './routes/.Routing.js';
import Header from './components/header.js';
import Footer from './components/footer';

// root sets the main layout and contains the Header and the Router that renders other views
// w-1/2?
function Root() {
  
  return (
    <div id='viewport' className='flex flex-row'>
      <div id="header" className='h-screen bg-slate-100 w-1/6'>
        <div className=''>
          <Header/>
        </div>
      </div>

      <div id='router-view' className="w-5/6">
        <AppRouter/>
      </div>
    </div>
  )
}

export default Root
