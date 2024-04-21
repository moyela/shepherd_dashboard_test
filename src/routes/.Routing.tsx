import Home from './home.js'
import Work from './work.js'
import Writing from './writing.js'
import Art from './art.js'
import ErrorPage from './error_default.js'
import { Route , Routes} from "react-router-dom";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} /> 
        <Route path='/writing' element={<Writing/>} />
        <Route path="/art" element={<Art/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}
