import { useEffect } from "react";
import styled from "styled-components";
import {  useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getAllEmployeesStart } from "../redux/actionCreaters/actionCreaters";
import EmployeeList from "../components/EmployeeList";
import Title from "../components/Title";

export default function Employees() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployeesStart());
  }, [dispatch]);
  return (
    <Main>
      <Title />
      <EmployeeList />
    </Main>
  );
}
const Main = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`;
