import "./Header.scss";
import BellLink from "../../img/bell.png";
import MusicLink from "../../img/musical-note.png";

const pictures = [
  {
    id: 1,
    image: BellLink,
  },
  {
    id: 2,
    image: MusicLink,
  },
];

const VkImages = ({ pictures }) => {
  return (
    <div>
      <img src={pictures.image}></img>
    </div>
  );
};

export default VkImages;
