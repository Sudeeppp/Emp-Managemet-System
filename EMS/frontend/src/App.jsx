import { BrowserRouter,  Navigate,  Route,  Routes } from "react-router-dom"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import EmployeeDasboard from "./pages/EmployeeDasboard"



function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/employee-dashboard" element={<EmployeeDasboard />}></Route>

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
