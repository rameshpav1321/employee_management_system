const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  async saveEmployee(employee) {
    const response = await fetch(EMPLOYEE_API_BASE_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    return response.json();
  }

  async getEmployees() {
    const response = await fetch(EMPLOYEE_API_BASE_URL, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    return response.json();
  }

  async deleteEmployee(id) {
    const response = await fetch(EMPLOYEE_API_BASE_URL + "/" + id, {
      mode: "cors",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async getEmployeeById(id) {
    const response = await fetch(EMPLOYEE_API_BASE_URL + "/" + id, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  async updateEmployee(employee, id) {
    const response = await fetch(EMPLOYEE_API_BASE_URL + "/" + id, {
      mode: "cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    const data = await response.json();
    return data;
  }
}
export default new EmployeeService();
