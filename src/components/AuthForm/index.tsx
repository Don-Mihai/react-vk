import { useState } from "react";
import "./AuthForm.scss";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import Button from "@mui/material/Button";
import { User } from "../Header";

const AuthForm = ({}) => {
  const [inputText, setInputText] = useState<string>("");

    const onAuth = async () => {
      const users: User[] = (await axios.get('http://localhost:3001/users')).data

      const foundedUser: User | undefined = users.find(user => user.name === inputText)

      if (foundedUser) {
        localStorage.setItem('userId', String(foundedUser.id))
      }
    };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const onClearInput = () => {
    setInputText("");
  };

  return (
    <div className="component-auth-form">
      <h2 className="component-auth-form__title">Вход Вконтакте</h2>
      <TextField
          onChange={onChange}
          value={inputText}
          label="Имя"
          variant="filled"
          InputProps={{
            endAdornment: <ClearIcon onClick={onClearInput} />,
          }}
        />

      <Button onClick={onAuth} variant="contained" >Войти</Button>
    </div>
  );
};

export default AuthForm;
