import './styles/main.css'
import AppRouter from './routes/routing_configuration.js';
import Sidebar from './components/global/sidebar/sidebar.js';

function Root() {
  
  return (
    <div id='viewport' className='flex flex-col sm:flex-row select-none'>
      <div id="header" className='sm:h-max'> 
        <Sidebar/>
      </div>

      <div id='router-view' className="w-full">
        <AppRouter/>
      </div>
    </div>
  )
}

export default Root
