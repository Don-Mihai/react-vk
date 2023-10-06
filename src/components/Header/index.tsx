import { useState } from "react";
import "./Header.scss";
import TextField from "@mui/material/TextField";
import axios from "axios";

export interface User {
  id: number;
  name: string;
}

interface Props {
  isShowSearch?: boolean;
  user?: User;
}

const Header = ({ isShowSearch = false, user }: Props) => {


  const handleDelete = () => {
    axios.delete('http://localhost:3001/users/2')
  }

  return (
      <div className="component-header">
          <div className="container component-header__container">
              HELLO
              {isShowSearch ? <TextField id="outlined-basic" label="Outlined" variant="outlined" /> : ''}
              {user ? user.name : 'Мы вас не узнали'}
              <div onClick={handleDelete}>X</div>
          </div>
      </div>
  );
};

export default Header;
