import styled from "styled-components";

interface propstype {
  title: String;
  icon?: any;
  amount: number|string;
}

export default function Card(props: propstype) {
  return (
    <Wrap>
      <h2>{props.title}</h2>
      {props.icon} 
      <h1>{props.amount}</h1>
    </Wrap>
  );
}
const Wrap = styled.div`
width: 350px;
height: 350px;
background: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);;
margin: 30px;
display: flex;
flex-direction: column;
border-radius: 50%;
justify-content:center;
align-items:center;
h1,h2,img{
color:#fff;
margin:10px;
}
svg{
color:#fff;
margin:10px;
width:70px;
height:60px;
}
&:hover{
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    }
`;
