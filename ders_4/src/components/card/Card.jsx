import Buton from "../button/Buton";
import CardStyle from "./Card.module.css";

const Card = function ({ language, btn, img }) {
  // const {language,btn,img}=props; //destructure

  return (
    <div>
      <h1 className={CardStyle["title"]}>{language}</h1>
      <img src={img} className={CardStyle["images"]} />
      <Buton tus={btn} />
    </div>
  );
};

export default Card;
