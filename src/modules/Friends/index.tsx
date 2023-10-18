import axios from "axios";
import Friend from "../../components/Friend";
import { useEffect, useState } from "react";
import { IUser } from "../../components/Header";

const Friends = () => {
  const [friendsData, setFriendsData] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await axios.get("http://localhost:3001/users");
    setFriendsData(data.data.slice(0, 6));
  };

  return (
    <div>
      <h2>Друзья онлайн</h2>
      <div className="friends">
        {friendsData.map((friend) => {
          return <Friend key={friend?.id} friend={friend} />;
        })}
      </div>
      <h2>Друзья</h2>
      <div className="friends">
        {friendsData.map((friend) => {
          return <Friend key={friend?.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
