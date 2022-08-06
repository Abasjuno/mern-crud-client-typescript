import { employeeType } from "../actionCreaters/Types";

const Url = "https://my-employee-api-final.herokuapp.com/api/employees";
// const Url = "http://localhost:4000/api/employees";



export const getAllEmployeesFromApi = () =>
  fetch(Url)
    .then((response) => response.json())
    .then((data) => {
      return { response: data, error: null };
    })
    .catch((error) => {
      return { response: null, error };
    });

export const createEmployeeFromApi = (employee: employeeType) => {
  return fetch(Url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  })
    .then((response) => response.json())
    .then((data) => {
      return { response: data, error: null };
    })
    .catch((error) => {
      return { response: null, error };
    });
};

export const updateEmployeeFromApi = (employee: employeeType) => {
  console.log("id", employee._id);

  return fetch(Url + `/${employee._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  })
    .then((response) => response.json())
    .then((data) => {
      return { response: data, error: null };
    })
    .catch((error) => {
      return { response: null, error };
    });
};

export const deleteEmployeeFromApi = (id: employeeType['_id']) => {
  return fetch(Url + `/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return { response: data, error: null };
    })
    .catch((error) => {
      return { response: null, error };
    });
};
