import styled from "styled-components";

export default function PageNotFound() {
  return (
    <Center>
      <h2>Page Not Found</h2>
    </Center>
  );
}
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
  }
`;
