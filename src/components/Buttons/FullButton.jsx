import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8 buttom_slider "
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid #21207F;
  background-color: #2D3291;
  width: 18%;
  padding: 15px;
  outline: none;
  border-radius: 8px;
  margin:10px 95px ;
  position: absolute;
  top: 50%;
  @media (max-width: 960px) {
    padding: 0;
    width: 30%;
    margin:10px 75px ;
    z-index:999;
    top: 85%;
  }
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

