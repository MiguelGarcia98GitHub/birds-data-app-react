import { Link } from "react-router-dom";
import style from "./BirdList.module.css";

const BirdList = ({
  birds,
  filteredBirds,
  setFavouriteBirds,
  favouriteBirds,
}) => {
  console.log(birds);
  console.log(filteredBirds);
  console.log(favouriteBirds);

  {
    if (filteredBirds.length === 0) {
      return birds.map((bird) => {
        return (
          <div className={style.main} key={bird.id}>
            <div className={style.list_container}>
              <div className={style.name_container}>
                <h2 className={style.name}>{bird.name}</h2>
              </div>
              <div className={style.scientific_container}>
                <h3 className={style.scientific}>
                  Nombre científico: {bird.scientific}
                </h3>
              </div>
              <div className={style.rarity_container}>
                <h4 className={style.rarity}>Rareza: {bird.rarity}</h4>
              </div>
              <button
                onClick={() => {
                  setFavouriteBirds([...favouriteBirds, bird]);
                }}
              >
                Añadir Favoritos
              </button>
              <Link to={`birds/${bird.name}`} className={style.link}>
                <div className={style.link_container}>Ver información</div>
              </Link>
            </div>
          </div>
        );
      });
    }
  }

  {
    if (filteredBirds.length > 0) {
      console.log(filteredBirds);
      return filteredBirds.map((filteredBird) => {
        return (
          <div className={style.main} key={filteredBird.id}>
            <div className={style.list_container}>
              <div className={style.name_container}>
                <h2 className={style.name}>{filteredBird.name}</h2>
              </div>
              <div className={style.scientific_container}>
                <h3 className={style.scientific}>
                  Nombre científico: {filteredBird.scientific}
                </h3>
              </div>
              <div className={style.rarity_container}>
                <h4 className={style.rarity}>Rareza: {filteredBird.rarity}</h4>
              </div>
              <button
                onClick={() => {
                  setFavouriteBirds([...favouriteBirds, bird]);
                }}
              >
                Añadir Favoritos
              </button>
              <Link to={`birds/${filteredBird.name}`} className={style.link}>
                <div className={style.link_container}>Ver información</div>
              </Link>
            </div>
          </div>
        );
      });
    }
  }
};

export default BirdList;
