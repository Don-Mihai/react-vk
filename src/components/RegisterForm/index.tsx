import { useState } from "react";
import "./RegisterForm.scss";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";

const RegisterForm = ({}) => {
  const [inputText, setInputText] = useState<string>("");

  const onRegister = () => {
    console.log(inputText);
    axios.post('http://localhost:3001/users', {
        name: inputText,
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          label="Имя"
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
