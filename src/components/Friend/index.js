import './Friend.scss';

const Friend = ({friend}) => {
    return(
        <div className="friend">
            <div className="friend__image"></div>
            <h2 className="friend__name">{friend.firstName}</h2>
            <h2 className="friend__age">{friend.age}</h2>
        </div>
    )
}

export default Friend