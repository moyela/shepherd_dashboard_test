import Sidebar from './components/global/sidebar'
import Dashboard from './components/dashboard'
import './App.css'

function App() {

  return (
    <div className='app'>
      <div className='sticky left-0 w-32 bg-slate-900'>
        <Sidebar/>
      </div>
      <Dashboard/>
    </div>
  )
}

export default App
