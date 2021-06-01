import React from "react";
import Button from "@material-ui/core/Button/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup/ButtonGroup";

const Buttons = () => {
  return (
    <ButtonGroup variant="contained" size="large">
      <Button color="secondary" startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button
        style={{ fontSize: "12px" }}
        color="primary"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
