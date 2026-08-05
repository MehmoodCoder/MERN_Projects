import './App.css'
import { BrowserRouter, Router, Route } from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Route path='/' element={<User/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/update' element={<UpdateUser/>}/>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
