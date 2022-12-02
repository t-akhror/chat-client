import 'bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Main from './components/Main';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className='container'>
      <Routes>
        {/* <Route path='/' element={<Navigate replace to="/login" />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/message" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
