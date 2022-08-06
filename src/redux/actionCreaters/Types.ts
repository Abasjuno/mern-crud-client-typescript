export enum Types {
  GET_EMPLOYEES_START = "GET_EMPLOYEES_START",
  GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS",
  GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL",

  CREATE_EMPLOYEES_START = "CREATE_EMPLOYEES_START",
  CREATE_EMPLOYEES_SUCCESS = "CREATE_EMPLOYEES_SUCCESS",
  CREATE_EMPLOYEES_FAIL = "CREATE_EMPLOYEES_FAIL",

  UPDATE_EMPLOYEES_START = "UPDATE_EMPLOYEES_START",
  UPDATE_EMPLOYEES_SUCCESS = "UPDATE_EMPLOYEES_SUCCESS",
  UPDATE_EMPLOYEES_FAIL = "UPDATE_EMPLOYEES_FAIL",

  DELETE_EMPLOYEES_START = "DELETE_EMPLOYEES_START",
  DELETE_EMPLOYEES_SUCCESS = "DELETE_EMPLOYEES_SUCCESS",
  DELETE_EMPLOYEES_FAIL = "DELETE_EMPLOYEES_FAIL",
}

export  interface employeeType {
  Name: string;
  DateOfBirth?: string;
  Gender?: string;
  Salary?: number;
  _id?: string;
}

export interface getAllEmployeesStart {
  type: Types.GET_EMPLOYEES_START;
}
 export interface createEmployeeStart {
  type: Types.CREATE_EMPLOYEES_START;
  payload: employeeType;
}
export interface updateEmployeeStart {
  type: Types.UPDATE_EMPLOYEES_START;
  payload: employeeType
}
export interface deleteEmployeeStart {
  type: Types.DELETE_EMPLOYEES_START;
  payload: employeeType["_id"];
}

export interface getAllEmployeesSuccess {
  type: Types.GET_EMPLOYEES_SUCCESS;
  payload: employeeType[];
}
export interface createEmployeeSuccess {
  type: Types.CREATE_EMPLOYEES_SUCCESS;
  payload: string;
}
export interface updateEmployeeSuccess {
  type: Types.UPDATE_EMPLOYEES_SUCCESS;
  payload: string;
}
export interface deleteEmployeeSuccess {
  type: Types.DELETE_EMPLOYEES_SUCCESS;
  payload: string;
}

export interface getAllEmployeesFail {
    type: Types.GET_EMPLOYEES_FAIL;
    payload: employeeType[];
  }
  export interface createEmployeeFail {
    type: Types.CREATE_EMPLOYEES_FAIL;
    payload: string;
  }
  export interface updateEmployeeFail {
    type: Types.UPDATE_EMPLOYEES_FAIL;
    payload: string;
  }
  export interface deleteEmployeeFail {
    type: Types.DELETE_EMPLOYEES_FAIL;
    payload: string;
  }
  
  

export type Action =
  | getAllEmployeesStart
  | createEmployeeStart
  | updateEmployeeStart
  | deleteEmployeeStart
  | getAllEmployeesSuccess
  | createEmployeeSuccess
  | updateEmployeeSuccess
  | deleteEmployeeSuccess
  | getAllEmployeesFail
  | createEmployeeFail
  | updateEmployeeFail
  | deleteEmployeeFail;
