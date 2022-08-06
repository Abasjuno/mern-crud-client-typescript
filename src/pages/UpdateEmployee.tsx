import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import styled from "styled-components";
import { updateEmployeesStart } from "../redux/actionCreaters/actionCreaters";
import { employeeType } from "../redux/actionCreaters/Types";
import { AppState } from "../redux/reducers/rootReducer";
import { handleSubmit } from "../util/services";
export default function UpdateEmployee() {
  const { employees } = useSelector((state: AppState) => state.emplyeeReducer);
  const location = useLocation();
  const navigate = useNavigate();
  const _id = location.state;
  const curruntEmployee = (employees as employeeType[]).filter(
    (employee) => employee._id === _id
  );

  const [state, setState] = useState({
    Name: curruntEmployee[0].Name,
    DateOfBirth: curruntEmployee[0].DateOfBirth,
    Gender: curruntEmployee[0].Gender,
    Salary: curruntEmployee[0].Salary,
    _id: curruntEmployee[0]._id,
  });
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, Name: e.target.value });
  };
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, DateOfBirth: e.target.value });
  };
  const onChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, Gender: e.target.value });
  };
  const onChangeSalary = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, Salary: parseInt(e.target.value) });
  };
  const dispatch: Dispatch = useDispatch();
  const handler = (e: FormEvent<HTMLFormElement>) => {
    const employee = handleSubmit(e);
    const _id = state._id;
    const data = { ...employee, _id };

     dispatch(updateEmployeesStart(data));
     navigate("/employees");
  };

  return (
    <Main>
      <form onSubmit={handler}>
        <h2>Update Employee Details</h2>
        <FormContainer>
          <InputItem>
            <label htmlFor="Name">Full Name</label>
            <input
              type="text"
              id="Name"
              onChange={onChangeName}
              value={state.Name}
              required
            />
          </InputItem>
          <InputItem>
            <label htmlFor="DateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="DateOfBirth"
              onChange={onChangeDate}
              value={state.DateOfBirth}
              required
            />
          </InputItem>
          <InputItem>
            <label htmlFor="Gender">Gender</label>
            <select
              id="Gender"
              onChange={onChangeGender}
              value={state.Gender}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </InputItem>
          <InputItem>
            <label htmlFor="Name">Salary</label>
            <input
              type="number"
              id="Salary"
              onChange={onChangeSalary}
              value={state.Salary}
              required
            />
            <input type="submit" value="UPDATE" id="btn" />
          </InputItem>
        </FormContainer>
      </form>
    </Main>
  );
}
const Main = styled.div`
  flex: 5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  form h2 {
    color: #fff;
    margin-bottom: 80px;

  }
  margin-left: 50px;
  #btn {
    margin: 20px 0;
    background: linear-gradient(135deg, #79f1a4 10%, #0e5cad 100%);
    color: #fff;
    font-weight: bold;
    font-size: 24px;
  }
`;
const FormContainer = styled.div`
  width: 500px;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: left;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const InputItem = styled.div`
  width: 100%;
  padding: 10px;
  input,select {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: none;
    border-radius: 5px;
    font-size:20px;
    font-weight:500;
outline:none;
  } 
  label {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;
