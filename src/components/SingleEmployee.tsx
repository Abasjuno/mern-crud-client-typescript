import React from "react";
import styled from "styled-components";
import { MdOutlineAdsClick } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendarDate, BsGenderAmbiguous } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import { employeeType } from "../redux/actionCreaters/Types";
import { deleteEmployeeStart, getAllEmployeesStart } from "../redux/actionCreaters/actionCreaters";

export default function SingleEmployee(props: employeeType) {
  const dispach: Dispatch = useDispatch();
  const handldelete = () => {
     dispach(deleteEmployeeStart(props._id))
  };
  return (
    <Wrap>
      <Title>
        <Cell>
          <FaUserAlt />
        </Cell>
        <Cell style={{ flex: 1.5 }}>
          <BsCalendarDate />
        </Cell>
        <Cell>
          <BsGenderAmbiguous />
        </Cell>
        <Cell>
          <GiMoneyStack />
        </Cell>

        <MdOutlineAdsClick />
      </Title>
      <Info>
        <Cell>
          <h2>{props.Name}</h2>
        </Cell>
        <Cell style={{ flex: 1.1 }}>
          <h2>{props.DateOfBirth}</h2>
        </Cell>
        <Cell>
          <h2>{props.Gender}</h2>
        </Cell>
        <Cell>
          <h2>{props.Salary}</h2>
        </Cell>
        <Atribiute>
          <Link
            to={"/updateEmployee"}
            state={props._id}
          >
            <BiEditAlt style={{ color: "#78ff2f" }} />
          </Link>
          <span></span>
          <AiFillDelete style={{ color: "red" }} onClick={handldelete} />
        </Atribiute>
      </Info>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 70vw;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  margin: 20px 55px;
  padding: 10px 10px;
  border-radius: 10px;
  font-size: 20px;
  @media (max-width: 900px) {
    height: 60px;
    padding: 7px;
    border-radius: 5px;
    font-size: 18px;
  }
  h2 {
    color: #000780 ;
    font-size: inherit;
    margin: 10px;
    padding: 0 3px;
  
  @media (max-width: 750px) {
    font-size: 15px;
  }
}
  @media (max-width: 650px) {
    width: 60vw;
    flex-direction: row;
    height: 225px;
    font-size: 17px;
    margin: 20px 55px;
  }
`;
const Info = styled.div`
  width: 70vw;
  /* background:red; */
  display: flex;
  width: 100%;
  height: 100%;
  align-items: ;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: column;
    height: 200px;
    width: 80%;
    font-size: 18px;
    padding: 0px 5px;
    h2 {
      margin: 10px;
      padding: 3px;
    }
  }
`;
const Title = styled.div`
  display: none;
  padding: 0px 5px;
  margin: 5px;
  height: 200px;
  svg {
    font-size: 25px;
    color: #fff;
  }
  @media (max-width: 650px) {
    display: block;
    display: flex;
    flex-direction: column;
    width: 20%;
    font-size: 15px;
  }
`;
const Cell = styled.div`
  flex: 1;
`;
const Atribiute = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
  }
  svg {
    width: 25px;
    height: 25px;
    @media (max-width: 900px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 650px) {
      width: 25px;
      height: 25px;
    }
  }
  span {
    width: 3px;
    background: #fff;
    margin: 0 10px;
    @media (max-width: 900px) {
      margin: 0 5px;
    }
  }
`;
