import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import'bootstrap/dist/css/bootstrap.min.css';
import jquery from'jquery';
import Popper from 'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';
import CreateProfile from './pages/CreateProfile'
import Navbar from './components/Navbar'
import ViewProfile from './pages/ViewProfiles'
import CreateProfileBase64 from "../src/pages/CreateProfileBase64";
import ViewProfileBase64 from "../src/pages/ViewProfileBase64"
import UseReducer from "./pages/UseReducer";
<<<<<<< HEAD
import CakeContainer from './Redux/CakeContainer';
=======
import CDidMount from './MountingLifeCycle/CDidMount';
import LifecycleA from './UpdatingLifeCycle/LifecycleA';
>>>>>>> 5669b755115a591200dd2e7f53fc6674246fb20f

function App() {
  return (
    <div className="App">
      {/* <CreateProfile/>
      <ViewProfile/> */}
      {/* <CreateProfileBase64/>
      <ViewProfileBase64/> */}
      {/* <UseReducer/> */}
<<<<<<< HEAD
      <CakeContainer/>
=======
      {/* <CDidMount/> */}
      <LifecycleA/>
>>>>>>> 5669b755115a591200dd2e7f53fc6674246fb20f
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