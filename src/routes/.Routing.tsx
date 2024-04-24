import Dashboard from '../components/dashboard/dashboard.js'
import ErrorPage from './error_default.js'
import { Route , Routes} from "react-router-dom";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}
