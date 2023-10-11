import "./Header.scss";

const VkImages = ({ pictures }) => {
  return (
    <div>
      <img src={pictures.image}></img>
    </div>
  );
};

export default VkImages;
