import style from "./FavouritesBirdList.module.css";

const FavouritesBirdList = ({ favouriteBirds, setFavouriteBirds }) => {
  console.log(favouriteBirds);
  console.log(favouriteBirds.length);
  if (!favouriteBirds) {
    return (
      <div>
        <div>
          <h1>No Favourite Birds yet</h1>
        </div>
      </div>
    );
  }

  if (favouriteBirds.length > 0) {
    return favouriteBirds.map((bird) => {
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
                setFavouriteBirds(
                  favouriteBirds.filter((favBird) => favBird.name !== bird.name)
                );
              }}
            >
              Quitar de favoritos
            </button>
          </div>
        </div>
      );
    });
  }
};

export default FavouritesBirdList;
