import '@coreui/coreui/dist/css/coreui.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Courses from './pages/Courses/Courses';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
        <Router>     
          <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/courses" element={<Courses/>}/>
        </Routes>
          
        </Router>
    </div>
  );
}

export default App;
