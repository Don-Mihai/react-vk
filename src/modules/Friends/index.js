import axios from "axios";
import Friend from "../../components/Friend";
import { useEffect, useState } from "react";

const Friends = () => {
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await axios.get("http://localhost:3001/users");
    setFriendsData(data.data);
    console.log(data);
  };

  return (
    <div>
      <h2>Друзья онлайн</h2>
      <div className="friends">
        {friendsData.map((friend) => {
          return <Friend friend={friend} />;
        })}
      </div>
      <h2>Друзья</h2>
      <div className="friends">
        {friendsData.map((friend) => {
          return <Friend friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
