import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Employee from './components/Employee'
import Profile from './components/Profile'
import Hom from './components/Hom'
import AddEmployee from './components/AddEmployee'
import Department from './components/Department'
import AddDepartment from './components/AddDepartment'
import EditEmployee from './components/EditEmployee'
import Start from './components/Start'
import EmployeeLogin from './components/EmployeeLogin'
import EmployeeDetail from './components/EmployeeDetail'
import PrivateRoute from './components/PrivateRoute'
function App() {



  return (
    <>
    <BrowserRouter>
 
    <Routes>
    <Route path="/employee_login" element={<EmployeeLogin/>} />
    <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
    <Route path="/start" element={<Start/>} />
    <Route path="/" element={<Hom/>} />
    <Route path="/adminlogin" element={<Login/>} />
    <Route path="/employee_detail/:id" element={<EditEmployee/>} /> 
    <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
     
      {/* <Route path="/dashboard" element={<Dashboard/>} > */}
          <Route path="" element={<Home/>} />
          <Route path="/dashboard/employee" element={<Employee/>} />
       
          <Route path="/dashboard/profile" element={<Profile/>} />
          <Route path="/dashboard/add_employee" element={<AddEmployee/>} />
          <Route path="/dashboard/department" element={<Department/>} />
          <Route path="/dashboard/add_department" element={<AddDepartment/>} />
          <Route path="/dashboard/edit_employee/:id" element={<EditEmployee/>} /> 
        
        </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App