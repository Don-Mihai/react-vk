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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

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
    imageUrl?: string;
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const navigate = useNavigate()

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        handleClose()
        localStorage.removeItem('userId')
        navigate('/')
    }

    return (
        <div className="component-header">
            <div className="container component-header__container">
                <div className="component-header__logo">
                    <img className="component-header__logo-img" src={Vk}></img>
                    <span className="component-header__logo-text">ВКОНТАКТЕ</span>
                </div>

                {isShowSearch && (
                    <div className="component-header__search">
                        <TextField size="small" id="outlined-basic" label="Поиск" variant="outlined" />
                    </div>
                )}

                <div className="music"></div>
                {user && (
                    <>
                        <div onClick={handleClick}>
                            <Avatar className="component-header__avatar">
                                {user?.name ? user?.name[0] : ''}
                                {user?.lastName ? user?.lastName[0] : ''}
                            </Avatar>
                        </div>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={logout}>Выйти</MenuItem>
                        </Menu>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
