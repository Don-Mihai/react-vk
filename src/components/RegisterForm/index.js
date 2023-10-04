import { useState } from "react";
import "./RegisterForm.scss";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";

const RegisterForm = ({}) => {
  const [inputText, setInputText] = useState("");

  const onRegister = () => {
    console.log(inputText);
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClearInput = () => {
    setInputText("");
  };

  return (
    <div className="component-register-form">
      <div className="component-register-form__input-container">
        <TextField
          onChange={onChange}
          value={inputText}
          label="Phone or email"
          variant="filled"
          InputProps={{
            endAdornment: <ClearIcon onClick={onClearInput} />,
          }}
        />
      </div>

      <button onClick={onRegister}>Sign in</button>
    </div>
  );
};

export default RegisterForm;
