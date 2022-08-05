import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Bird.module.css";
import Footer from "./Footer";

const Bird = ({ birds }) => {
  console.log(birds);
  const { id } = useParams();
  const [bird, setBird] = useState(
    birds.filter((birditem) => birditem.name === id)
  );
  console.log(bird);

  return (
    <div className={style.main}>
      <div className={style.bird_container}>
        <div className={style.name_container}>
          <h1 className={style.name}>{bird[0].name}</h1>
        </div>
        <div className={style.scientific_container}>
          <h2 className={style.scientific}>{bird[0].scientific}</h2>
        </div>
        <div className={style.img_container}>
          {bird[0].img ? (
            <img className={style.img} src={bird[0].img} alt="bird image" />
          ) : (
            <h3>No hemos encontrado imagen para este pájaro</h3>
          )}
        </div>
        <div className={style.rarity_container}>
          <h4 className={style.rarity}>Rareza: {bird[0].rarity}</h4>
        </div>
        <div className={style.desc_container}>
          <p className={style.desc}>{bird[0].description}</p>
        </div>
        <Link to={"/"} className={style.backlink}>
          <div>Volver al listado de pájaros</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Bird;
