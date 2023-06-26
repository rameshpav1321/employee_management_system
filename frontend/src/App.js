import "./App.css";
import AddEmployee from "./Components/AddEmployee";
import EmployeeList from "./Components/EmployeeList";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEmployee from "./Components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/employeelist" element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/addEmployee" element={<AddEmployee />}></Route>
          <Route path="/editEmployee/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
