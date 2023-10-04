import { useState } from "react";
import "./Profile.scss";
import Header from "../../components/Header";

const Profile = ({ profile }) => {
  return (
    <div className="component-profile">
      <Header isShowSearch={true}></Header>
    </div>
  );
};

export default Profile;
