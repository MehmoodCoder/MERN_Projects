import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path={`/update/:id`} element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
