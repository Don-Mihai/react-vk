import Friend from "../../components/Friend";

const friendsData = [
    {
        id: 1,
        firstName: 'Иван',
        lastName: 'Иванов',
        age: 28,
        location: 'Москва',
        avatar: 'URL_к_изображению_друга_1',
    },
    {
        id: 2,
        firstName: 'Анна',
        lastName: 'Петрова',
        age: 25,
        location: 'Санкт-Петербург',
        avatar: 'URL_к_изображению_друга_2',
    },
    {
        id: 3,
        firstName: 'Павел',
        lastName: 'Сидоров',
        age: 30,
        location: 'Киев',
        avatar: 'URL_к_изображению_друга_3',
    },
    {
        id: 4,
        firstName: 'Екатерина',
        lastName: 'Козлова',
        age: 27,
        location: 'Новосибирск',
        avatar: 'URL_к_изображению_друга_4',
    },
];

const Friends = () => {
    return (
        <div>
            <h2>Друзья онлайн</h2>
            <div className="friends">
                {friendsData.map(friend => {
                    return <Friend friend={friend} />;
                })}
            </div>
            <h2>Друзья</h2>
            <div className="friends">
                {friendsData.map(friend => {
                    return <Friend friend={friend} />;
                })}
            </div>
        </div>
    );
};

export default Friends;
