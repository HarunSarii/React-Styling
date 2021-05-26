import React, { useState } from "react";
import Button from "./button/Button";
import Wrapper from "./wrapper/Wrapper";
import HeaderText from "./header/HeaderText";
import LearnFSD from "./link/LearnFSD";
import ExtendedLearnFSD from "./extended-link/ExtendedLearnFSD";

const StyledComponents = () => {
  const [primary, setPrimary] = React.useState(false);
  return (
    <Wrapper bgColor="wheat">
      <HeaderText>Clarusway</HeaderText>
      <HeaderText headerColor="purple">Styled Components</HeaderText>

      <LearnFSD secondary href="https://clarusway.com" target="_blank">
        Learn Full Stack Development
      </LearnFSD>
      <ExtendedLearnFSD>We're Learning Styled Components</ExtendedLearnFSD>
      <Button primary={primary} onClick={() => setPrimary(!primary)}>
        {primary ? "Primary" : "Default"}
      </Button>
      <Button primary={!primary}>{!primary ? "Primary" : "Default"}</Button>
    </Wrapper>
  );
};

export default StyledComponents;
