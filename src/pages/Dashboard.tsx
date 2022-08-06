import { useEffect } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import styled from "styled-components";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { getAllEmployeesStart } from "../redux/actionCreaters/actionCreaters";
import { AppState } from "../redux/reducers/rootReducer";
export default function Dashboard() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployeesStart());
  }, [dispatch]);
  const { employees, error,  loading } = useSelector(
    (state: AppState) => state.emplyeeReducer
  );
  const amount: number = employees["length"];
  if (error) {
    <Main>
      <Link to="/Employees">
        <Card
          title={"Employees"}
          amount={"UNKNOWN"}
          icon={<BsFillPeopleFill />}
        />{" "}
      </Link>
    </Main>;
  }
  else if (loading) {
    <Main>
    <Link to="/Employees">
      <Card
        title={"Employees"}
        amount={"UNKNOWN"}
        icon={<Loading />}
      />{" "}
    </Link>
  </Main>
  }
  return (
    <Main>
      <Link to="/Employees">
        <Card title={"Employees"} amount={amount} icon={<BsFillPeopleFill />} />{" "}
      </Link>
    </Main>
  );
}
const Main = styled.div`
  flex: 5;
  padding: 50px 100px;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px;
    flex: 2;
  }
`;
