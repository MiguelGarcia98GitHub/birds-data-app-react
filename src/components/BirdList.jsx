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
      return birds.map((birdie) => {
        return (
          <div className={style.main} key={birdie.id}>
            <div className={style.list_container}>
              <div className={style.name_container}>
                <h2 className={style.name}>{birdie.name}</h2>
              </div>
              <div className={style.scientific_container}>
                <h3 className={style.scientific}>{birdie.scientific}</h3>
              </div>
              <div className={style.rarity_container}>
                <h4 className={style.rarity}>Rareza: {birdie.rarity}</h4>
              </div>
              <div className={style.buttons_container}>
                <Link to={`birds/${birdie.name}`} className={style.button}>
                  <div className={style.button_container}>Ver información</div>
                </Link>
                <hr className={style.line} />
                <div
                  className={style.button_container}
                  onClick={() => {
                    console.log(favouriteBirds);
                    console.log(birdie);
                    if (
                      favouriteBirds.some(
                        (currentBird) => currentBird.id === birdie.id
                      )
                    ) {
                      return;
                    }

                    setFavouriteBirds([...favouriteBirds, birdie]);
                  }}
                >
                  <div className={style.button}>Añadir Favorito</div>
                </div>
              </div>
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
                <h3 className={style.scientific}>{filteredBird.scientific}</h3>
              </div>
              <div className={style.rarity_container}>
                <h4 className={style.rarity}>Rareza: {filteredBird.rarity}</h4>
              </div>
              <div className={style.buttons_container}>
                <Link
                  to={`birds/${filteredBird.name}`}
                  className={style.button}
                >
                  <div className={style.button_container}>Ver información</div>
                </Link>
                <hr className={style.line} />
                <div
                  className={style.button}
                  onClick={() => {
                    if (
                      favouriteBirds.some(
                        (currentBird) => currentBird.id === filteredBird.id
                      )
                    ) {
                      return;
                    }
                    setFavouriteBirds([...favouriteBirds, filteredBird]);
                  }}
                >
                  <div className={style.button_text}>Añadir Favorito</div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }
};

export default BirdList;
