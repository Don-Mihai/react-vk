import "./Header.scss";
import vkLink from "./img/vk.png";

const Pics = {
  id: 1,
  image: vkLink,
};

const VkImg = () => {
  return (
    <div>
      <img src={Pics.image}></img>
    </div>
  );
};

export default VkImg;
