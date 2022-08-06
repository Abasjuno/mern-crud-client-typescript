import React from 'react';
import styled from 'styled-components';
import './App.css';
import SideBar from './components/SideBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Employees from './pages/Employees';
import Dashboard from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
import PageNotFound from './pages/PageNotFound';
import UpdateEmployee from './pages/UpdateEmployee';

function App() {
  return (

    <Router>
    <Container>
      <Glass>
            <SideBar/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/employees" element={<Employees/>} />
            <Route path="/addemployee" element={<AddEmployee/>} />
            <Route path="/updateEmployee" element={<UpdateEmployee/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </Glass>
      
    </Container>
        </Router>
  );
}

export default App;
const Container = styled.div`
height:100vh;
display:flex;
overflow:hidden;
justify-content:center;
align-items:center;
transition:.3s;
`
const Glass = styled.div`
  width: 90vw;
  height: 90vh;
  z-index: 2;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.2rem);
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width:400px){
flex-direction:column;
overflow:scroll;
}
`;