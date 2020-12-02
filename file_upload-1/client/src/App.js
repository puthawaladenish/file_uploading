import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import'bootstrap/dist/css/bootstrap.min.css';
import jquery from'jquery';
import Popper from 'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';
import CreateProfile from './pages/CreateProfile'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );

// function App() {
//   return (
//     <div className="App">
//       <CreateProfile/>
//     </div>
//   );
}

export default App;