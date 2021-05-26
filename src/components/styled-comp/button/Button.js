import styled from "styled-components";

export default styled.button`
  border: none;
  margin: 2px;
  color: #fff;
  padding: 12px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
  background-color: ${(props) => (props.primary ? "#4caf50" : "#008cba")};
`;
