import { Link } from "react-router-dom";
import style from "./SearchBird.module.css";

const SearchBird = ({ birds, setFilteredBirds }) => {
  const capitalizeFirstLetter = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  console.log(birds);
  return (
    <div className={style.searchbox_container}>
      <div className={style.searchbox_inner_container}>
        <div className={style.searchbox_text_container}>
          <h4>Busca algún pájaro</h4>
        </div>
        <div className={style.searchbox_input_container}>
          <input
            type="text"
            className={style.searchbox_input}
            onChange={(e) => {
              console.log(
                birds.filter((bird) =>
                  bird.name.includes(capitalizeFirstLetter(e.target.value))
                )
              );
              setFilteredBirds(
                birds.filter((bird) =>
                  bird.name.includes(capitalizeFirstLetter(e.target.value))
                )
              );
            }}
          />
        </div>
      </div>
      <Link to={"favourites"}>
        <button>Ver Favoritos</button>
      </Link>
    </div>
  );
};

export default SearchBird;
