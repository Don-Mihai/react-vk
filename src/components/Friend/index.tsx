import { IUser } from "../Header";
import "./Friend.scss";
import Avatar from "@mui/material/Avatar";

interface Props {
  friend: IUser;
}

const Friend = ({friend}: Props) => {
  return (
    <div className="friend">
      <Avatar src={`uploads/${friend?.avatarImageUrl}`} sx={{height: '60px', width: '60px'}}>{friend.name[0]}</Avatar>
      <h2 className="friend__name">{friend.name}</h2>
    </div>
  );
};

export default Friend;
