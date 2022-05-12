import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Ide from './pages/ide';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EduMain from './pages/EduMain';
import EduIndex from './pages/EduIndex';
import Mypage from './pages/Mypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/ide' element={<Ide />} />
        <Route path='/edumain' element={<EduMain />} />
        <Route path='/eduindex' element={<EduIndex />} />
        <Route path='/mypage' element={<Mypage />} />

      </Routes>
    </Router>
  );
}

export default App;
