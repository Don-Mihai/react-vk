import "./Friend.scss";
import Avatar from "@mui/material/Avatar";
const Friend = ({ friend }) => {
  return (
    <div className="friend">
      <Avatar>{friend.name[0]}</Avatar>
      <h2 className="friend__name">{friend.name}</h2>
      <h2 className="friend__age">{friend.age}</h2>
    </div>
  );
};

export default Friend;
