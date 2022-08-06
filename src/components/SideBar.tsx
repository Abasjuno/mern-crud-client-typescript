import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function SideBar() {
  return (
    <SideBarContainer>
      <Link to="/">
      <h1>HRM</h1>
      </Link>

      <Link to="/">
        <RiDashboardFill />
        <h2>Dashboard</h2>
      </Link>
      <Link to="/employees">
        <BsFillPeopleFill />
        <h2>Employee</h2>
      </Link>
      <Link to="/Addemployee">
        <AiOutlineUserAdd />
        <h2>Add</h2>
      </Link>
    </SideBarContainer>
  );
}
const SideBarContainer = styled.div`
  flex: 1;
  height: 90vh;
  margin-left: 1rem;
  margin-top: 50px;
  h2 {
    font-size: 20px;
    padding: 10px;
    color: #fff;
    margin-left: 10px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    margin: 5px;
    border-radius: 5px;
    transition: 0.3s;
    @media (max-width: 900px) {
      padding: 5px 10px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    }
  }
`;
