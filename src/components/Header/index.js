import { useState } from "react";
import "./Header.scss";
import TextField from "@mui/material/TextField";

const Header = ({ isShowSearch = false }) => {
  return (
    <div className="component-header">
      HELLO
      {isShowSearch ? (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
