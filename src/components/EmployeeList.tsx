import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { employeeType } from "../redux/actionCreaters/Types";
import { AppState } from "../redux/reducers/rootReducer";
import Error from "./Error";
import Loading from "./Loading";
import SingleEmployee from "./SingleEmployee";


export default function EmployeeList(): JSX.Element {
  const { employees, error, loading } = useSelector(
    (state: AppState) => state.emplyeeReducer
  );
  const [value,setValue] = useState("")
  const Employees = (employees as employeeType[]).filter(
    (employee) => employee.Name.toLowerCase().startsWith(value));
    
     
  if (loading===true) {
    return (
      <Center>
        <Loading />
      </Center>
    );
  } else if (employees && loading) {
    return (
      <Wrap>
        {(Employees as employeeType[]).map((employee: employeeType) => (
          <SingleEmployee
            Name={employee.Name}
            DateOfBirth={employee.DateOfBirth}
            Gender={employee.Gender}
            Salary={employee.Salary}
            _id={employee._id}
          />
        ))}
        <Center>
          <Loading />
        </Center>
      </Wrap>
    );
  } else if (error) {
    return (
      <Center>
        <Error />
      </Center>
    );
  } else if (employees["length"] === 0||Employees["length"]=== 0) {
    return (
      <Wrap style={{ width: "105%" }}>
      <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} />
      <Center>
        <h2> you don't have employees yet</h2>
      </Center>
      </Wrap>
    );
  }
  return (
    <Wrap>
      <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} placeholder={"Filter By Name"}/>
      {(Employees as employeeType[]).map((employee: employeeType) => (
        <SingleEmployee
          key={employee._id}
          Name={employee.Name}
          DateOfBirth={employee.DateOfBirth}
          Gender={employee.Gender}
          Salary={employee.Salary}
          _id={employee._id}
        />
      ))}
    </Wrap>
  );
}
const Wrap = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  display:flex;
flex-direction:column;
  transition:2s;
  input{
    width:30%;
    padding:5px;
    font-size:20px;
    align-self:center;
    outline:none;
    border-radius:10px;
    border:none;
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  svg {
    color: #fff;
    font-size: 3rem;
    margin: 20px 0;
  }
  h2 {
    color: #fff;
    margin-top:30px;
  }
`;
