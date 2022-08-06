import { Link } from "react-router-dom";
import style from "./FavouritesBirdList.module.css";

const FavouritesBirdList = ({ favouriteBirds, setFavouriteBirds }) => {
  console.log(favouriteBirds);
  console.log(favouriteBirds.length);

  if (favouriteBirds.length === 0) {
    return (
      <div className={style.no_birds_container}>
        <div className={style.no_birds}>
          <h1 className={style.no_birds_text}>No tienes Pájaros Favoritos</h1>
        </div>
      </div>
    );
  }

  {
    if (favouriteBirds.length > 0) {
      return favouriteBirds.map((favouriteBird) => {
        return (
          <div className={style.main} key={favouriteBird.id}>
            <div className={style.list_container}>
              <div className={style.name_container}>
                <h2 className={style.name}>{favouriteBird.name}</h2>
              </div>
              <div className={style.scientific_container}>
                <h3 className={style.scientific}>{favouriteBird.scientific}</h3>
              </div>
              <div className={style.rarity_container}>
                <h4 className={style.rarity}>Rareza: {favouriteBird.rarity}</h4>
              </div>
              <div className={style.buttons_container}>
                <Link
                  to={`/birds/${favouriteBird.name}`}
                  className={style.button}
                >
                  <div className={style.button_text}>Ver información</div>
                </Link>
                <hr className={style.line} />
                <div
                  className={style.button}
                  onClick={() => {
                    setFavouriteBirds(
                      favouriteBirds.filter(
                        (currentFavBird) =>
                          currentFavBird.id !== favouriteBird.id
                      )
                    );
                  }}
                >
                  <div className={style.button_text}>Quitar Favorito</div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }
};

export default FavouritesBirdList;
