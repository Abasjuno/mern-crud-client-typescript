import styled from 'styled-components';

export default function Title() {
  return (
    <Wrap>
    <Cell>
      <h2>Name</h2>
    </Cell>
    <Cell style={{ flex: 1.5 }}>
      <h2>Date of birth</h2>
    </Cell>
    <Cell>
      <h2>Gender</h2>
    </Cell>
    <Cell>
      <h2>Salary</h2>
    </Cell>
    <h2>Manage</h2>
  </Wrap>
  )
}

const Wrap = styled.div`
  width: 70vw;
  height: 70px;
  display: flex;
  margin: 20px 55px;
  padding: 10px 10px;
  border-radius: 10px;
  h2 {
    color: #fff;
    font-size: 20px;
    padding: 10px;
    @media (max-width: 1000px) {
      font-size: 17px;
    }
    @media (max-width: 750px) {
      font-size: 15px;
    }
  }
  @media (max-width: 650px) {
    display: none;
    margin: 0;
  }
`;
const Cell = styled.div`
  flex: 1;
`;