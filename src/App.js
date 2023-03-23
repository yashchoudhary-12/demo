import SignIn from './component/Sign-register/SignIn';
import Home from './component/Main/Home';
import MyVideos from './component/Main/MyVideos';
import Register from './component/Sign-register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myvideos" element={<MyVideos />} />
        <Route path="/sign" element={<SignIn/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
