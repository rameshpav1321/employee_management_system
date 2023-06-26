import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ emp, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };
  return (
    <tr key={emp.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">{emp.firstName}</td>
      <td className="text-left px-6 py-4 whitespace-nowrap">{emp.lastName}</td>
      <td className="text-left px-6 py-4 whitespace-nowrap">{emp.emailId}</td>
      <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          href="www.google.com"
          className="text-indigo-600 hover:text-indigo-800 px-4"
          onClick={(e, id) => editEmployee(e, emp.id)}
        >
          Edit
        </a>
        <a
          href="www.google.com"
          className="text-indigo-600 hover:text-indigo-800 px-4"
          onClick={(e, id) => deleteEmployee(e, emp.id)}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
