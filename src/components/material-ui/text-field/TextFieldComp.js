import React from "react";
import TextField from "@material-ui/core/TextField/TextField";

const TextFieldComp = () => {
  return (
    <div>
      <TextField
        color="primary"
        variant="filled"
        type="email"
        label="The Email"
        defaultValue="abc@gmail.com"
      />
    </div>
  );
};

export default TextFieldComp;
