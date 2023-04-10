import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import UpdateUserInfo from './pages/UpdateUserinfo';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/new_user" element={<NewUser/>}/>
          <Route path="/add_events" element={<AddEvent/>}/>
          <Route path="/update_user_info" element={<UpdateUserInfo/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
