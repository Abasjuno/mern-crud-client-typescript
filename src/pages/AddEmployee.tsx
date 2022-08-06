import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import styled from "styled-components";
import { createEmployeeStart } from "../redux/actionCreaters/actionCreaters";
import { handleSubmit } from "../util/services";

export default function AddEmployee() {
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  const handler = async (e: FormEvent<HTMLFormElement>) => {
    const employee = handleSubmit(e);
    await  dispatch(createEmployeeStart(employee));
    await navigate("/employees");
  };
  return (
    <Main>
      <form onSubmit={handler}>
        <h2>ADD EMPLOYEE DETAILS</h2>
        <FormContainer>
          <InputItem>
            <label htmlFor="Name">Full Name</label>
            <input type="text" id="Name" placeholder="Employee Name" required />
          </InputItem>
          <InputItem>
            <label htmlFor="DateOfBirth">Date of Birth</label>
            <input type="date" id="DateOfBirth" required />
          </InputItem>
          <InputItem>
            <label htmlFor="Gender">Gender</label>
            <select id="Gender" name="cars" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </InputItem>
          <InputItem>
            <label htmlFor="Name">Salary</label>
            <input type="number" id="Salary" placeholder="10000" required />
        <input type="submit" value="ADD" id="btn" />
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
  margin-left:50px;
#btn{
  margin: 20px 0;
  background: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
  color:#fff;
  font-weight:bold;
  font-size:24px;
  &:hover{
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    }
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
  @media (max-width:700px){
width:100%;
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


