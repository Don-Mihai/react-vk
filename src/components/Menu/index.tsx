import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Menu.scss';


export const Menu = () => {

<Link to={'/'}></Link>


    return(
        <div>
            <Link className='menu__button' to={'/profile'}>
            <Button>Моя страница</Button>
            </Link>
            
            <Link to={'/profile'}>
            <Button>Новости</Button>
            </Link>

            <Link to={'/profile'}>
            <Button>Мессенджер</Button>
            </Link>

            <Link to={'/Friend'}>
            <Button>Друзья</Button>
            </Link>

            <Link to={'/profile'}>
            <Button>Фотографии</Button>
            </Link>

            <Link to={'/profile'}>
            <Button>Музыка</Button>
            </Link>
        </div>
    )

}
