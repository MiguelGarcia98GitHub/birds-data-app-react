import style from "./FavouritesHeader.module.css";

const FavouritesHeader = () => {
  return (
    <div className={style.favourites_header_container}>
      <div className={style.favourites_header}>
        <h2 className={style.favourites_header_text}>Tus Pájaros Favoritos</h2>
      </div>
    </div>
  );
};

export default FavouritesHeader;
