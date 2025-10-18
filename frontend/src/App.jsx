import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import PrivateRoute from './components/PrivateRoute';

function App(){ return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/projects" element={<PrivateRoute><Projects/></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);}
export default App;
