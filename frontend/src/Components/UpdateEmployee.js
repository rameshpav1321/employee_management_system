import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await EmployeeService.updateEmployee(employee, id);
      console.log(response);
      navigate("/employeeList");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        console.log(response);
        setEmployee(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex max-w-2xl shadow border mx-auto mt-4">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Edit New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-small font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-small font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-small font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-green-400 px-6 py-2 hover:bg-green-700"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 px-6 py-2 hover:bg-red-700"
            onClick={() => navigate("/employeeList")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
