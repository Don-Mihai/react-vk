import axios from "axios";
import Friend from "../../components/Friend";
import { useEffect, useState } from "react";
import { IUser } from "../../components/Header";
import './Friends.scss';

const Friends = () => {
  const [friendsData, setFriendsData] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await axios.get("http://localhost:3001/users");
    setFriendsData(data.data.slice(0, 4));
  };

  return (
    <div className="friends">
      <h2 className="friends__title">Друзья онлайн</h2>
      <div className="friends__items friends__top " >
        {friendsData.map((friend) => {
          return <Friend key={friend?.id} friend={friend} />;
        })}
      </div>

      <h2 className="friends__title">Друзья</h2>
      <div className="friends__items">
        {friendsData.map((friend) => {
          return <Friend key={friend?.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
