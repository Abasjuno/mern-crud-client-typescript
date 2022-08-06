
import { Action, employeeType, Types } from "../actionCreaters/Types";

interface initialStateType {
  employees: employeeType[];
  error: boolean;
  errormsg: string;
  loading: boolean;
}

const initialState = {
  employees: [],
  error: false,
  errormsg: "",
  loading: false,
};

export const emplyeeReducer = (
  state: initialStateType = initialState,
  action: Action
) => {
  switch (action.type) {
    case Types.GET_EMPLOYEES_START:
    case Types.CREATE_EMPLOYEES_START:
    case Types.UPDATE_EMPLOYEES_START:
    case Types.DELETE_EMPLOYEES_START:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        employees: action.payload,
      };
    
    case Types.CREATE_EMPLOYEES_SUCCESS:
    case Types.UPDATE_EMPLOYEES_SUCCESS:
    case Types.DELETE_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case Types.GET_EMPLOYEES_FAIL:
    case Types.CREATE_EMPLOYEES_FAIL:
    case Types.UPDATE_EMPLOYEES_FAIL:
    case Types.DELETE_EMPLOYEES_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errormsg: action.payload,
      };
    default:
      return state;
  }
};
