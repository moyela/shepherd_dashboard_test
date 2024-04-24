import './styles/main.css'
import AppRouter from './routes/routing_configuration.js';
import Sidebar from './components/global/sidebar/sidebar.js';

// root sets the main layout and contains the Header and the Router that renders other views
// w-1/2?
function Root() {
  
  return (
    <div id='viewport' className='flex flex-row'>
      <div id="header" className='h-screen w-44 max-w-44 border-r-2 border-blue-400'> 
        <Sidebar/>
      </div>

      <div id='router-view' className="w-full">
        <AppRouter/>
      </div>
    </div>
  )
}

export default Root
