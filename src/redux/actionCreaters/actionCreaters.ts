import { employeeType, Types } from "./Types";

export const getAllEmployeesFail = () => {
  return {
    type: Types.GET_EMPLOYEES_FAIL,
  };
};
export const createEmployeeFail = () => {
  return {
    type: Types.CREATE_EMPLOYEES_FAIL,
  };
};
export const updateEmployeesFail = () => {
  return {
    type: Types.UPDATE_EMPLOYEES_FAIL,
  };
};
export const deleteEmployeeFail = () => {
  return {
    type: Types.DELETE_EMPLOYEES_FAIL,
  };
};


export const getAllEmployeesStart = () => {
  return {
    
    type: Types.GET_EMPLOYEES_START,
  };
};
export const createEmployeeStart = (employee:employeeType) => {
  return {
    type: Types.CREATE_EMPLOYEES_START,
    payload: employee,
  };
};
export const updateEmployeesStart = (employee:employeeType) => {
  return {
    type: Types.UPDATE_EMPLOYEES_START,
    payload: employee,
    
  };
};
export const deleteEmployeeStart = (id:employeeType["_id"]) => {
  return {
    type: Types.DELETE_EMPLOYEES_START,
    payload: id,
  };
};

export const getAllEmployeesSuccess = (employees: employeeType[]) => {
  return {
    type: Types.GET_EMPLOYEES_SUCCESS,
    payload: employees
  };
};
export const createEmployeeSuccess = (message:string) => {
  return {
    type: Types.CREATE_EMPLOYEES_SUCCESS,
    payload: message,
  };
};
export const updateEmployeesSuccess = (message:string) => {
  return {
    type: Types.UPDATE_EMPLOYEES_SUCCESS,
    paylaod: message,
  };
};
export const deleteEmployeeSuccess = (message: string) => {
  return {
    type: Types.DELETE_EMPLOYEES_SUCCESS,
    payload:message
  };
};
