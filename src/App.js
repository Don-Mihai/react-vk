import Friends from './modules/Friends';
import './App.scss';
import Button from './components/Button';

function App() {

    return (
        <div>
            {/* <Friends /> */}
            <Button name={'Редактировать профиль'} isVisibleIcon={false} ></Button>
            <Button name={'Еще'} isVisibleIcon={true} ></Button>
            <Button name={'Увеличить число'} isVisibleIcon={false}></Button>
        </div>
    );
}

export default App;
