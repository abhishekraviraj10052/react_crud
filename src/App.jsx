import UserList from './UserList'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'

import './assets/css/bootstrap.min.css'
import { Routes,Route } from 'react-router'

function App() {
  

  return (
    <>     
      <Routes>
        <Route path="/users" element={<UserList/>}></Route>
        <Route path="/user/edit/:id" element={<UserEdit/>}></Route>
        <Route path="/" element={<UserCreate/>}></Route>
      </Routes>
    </>
  )
}

export default App
