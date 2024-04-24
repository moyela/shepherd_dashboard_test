import './styles/main.css'
import AppRouter from './routes/routing_configuration.js';
import Sidebar from './components/global/sidebar/sidebar.js';

// root sets the main layout and contains the Header and the Router that renders other views
// w-1/2?
function Root() {
  
  return (
    <div id='viewport' className='flex flex-row select-none'>
      <div id="header" className='h-screen'> 
        <Sidebar/>
      </div>

      <div id='router-view' className="w-full">
        <AppRouter/>
      </div>
    </div>
  )
}

export default Root
