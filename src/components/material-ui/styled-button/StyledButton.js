import React from "react";
import Button from "@material-ui/core/Button/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "Linear-gradient(45deg, #FF688B, #FF8E53)",

    border: 0,
    borderRadius: 7,
    color: "#fff",
    padding: "5px 30px",
    marginBottom: "1rem",
  },
});

const StyledButton = () => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.root}>Styled Button</Button>
    </>
  );
};

export default StyledButton;
