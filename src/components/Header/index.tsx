import { useState } from "react";
import "./Header.scss";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Account from "../Account";
import VkImg from "./vk";
import VkImages from "./imgs";
// @ts-ignore
import BellLink from "./img/bell.png";
// @ts-ignore
import MusicLink from "./img/musical-note.png";


export const pictures = [
  {
    id: 1,
    image: BellLink,
  },
  {
    id: 2,
    image: MusicLink,
  }
]


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
            <div>
              <VkImg />
            </div>
            <div className="component-header__container__wrap">
            <p className="component-header__container__wrap__vk">ВКОНТАКТЕ</p>  
            </div>
                 
              <div className="component-header__container__wrap-search">
              {isShowSearch ? <TextField id="outlined-basic" label="Поиск" variant="outlined" /> : ''}
              </div>
              {
                <div>
                {pictures.map(item => {
                  return <VkImages pictures={item} />;
                })}
              </div>
              }


              {user ? user.name : 'Мы вас не узнали'}
              <div onClick={handleDelete}>X</div>
              <div className="music"></div>
              <Account></Account>
          </div>
      </div>
  );
};

export default Header;
