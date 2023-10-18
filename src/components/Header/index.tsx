import { useState } from 'react';
import './Header.scss';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Account from '../Account';
// @ts-ignore
import Vk from './img/vk.png';
// @ts-ignore
import BellLink from './img/bell.png';
// @ts-ignore
import MusicLink from './img/musical-note.png';
import Avatar from '@mui/material/Avatar';

export const pictures = [
    {
        id: 1,
        image: BellLink,
    },
    {
        id: 2,
        image: MusicLink,
    },
];

export interface IUser {
    id: number;
    name: string;
    lastName?: string;
    email?: string;
    birthDate?: Date | string;
    isOnline?: boolean;
}

export interface IPost {
    id: number;
    title: string;
    text: string;
}

interface Props {
    isShowSearch?: boolean;
    user?: IUser;
}

const Header = ({ isShowSearch = false, user }: Props) => {

    return (
        <div className="component-header">
            <div className="container component-header__container">
                <div className="component-header__logo">
                    <img className="component-header__logo-img" src={Vk}></img>
                    <span className="component-header__logo-text">ВКОНТАКТЕ</span>
                </div>

                {isShowSearch && (
                    <div className="component-header__search">
                        <TextField size='small' id="outlined-basic" label="Поиск" variant="outlined" />
                    </div>
                )}

                <div className="music"></div>
                {user && <Avatar className='component-header__avatar'>{user?.name ? user?.name[0] : ''}{user?.lastName ? user?.lastName[0] : ''}</Avatar> }
            </div>
        </div>
    );
};

export default Header;
