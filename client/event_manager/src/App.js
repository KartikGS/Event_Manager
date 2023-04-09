import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from './pages/Home';
import Add_Events from './pages/Add_Event';
import Login from './pages/Login';
import New_User from './pages/New_User';
import Update_User_Info from './pages/Update_User_Info';
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
          <Route path="/new_user" element={<New_User/>}/>
          <Route path="/add_events" element={<Add_Events/>}/>
          <Route path="/update_user_info" element={<Update_User_Info/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
