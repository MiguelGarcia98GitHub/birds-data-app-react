import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Bird from "./components/Bird";
import BirdList from "./components/BirdList";
import FavouritesBirdList from "./components/FavouritesBirdList";
import Footer from "./components/Footer";
import SearchBird from "./components/SearchBird";
import data from "./data/data";

function App() {
  const [currentData, setCurrentData] = useState([]);
  const [filteredBirds, setFilteredBirds] = useState([]);
  const [favouriteBirds, setFavouriteBirds] = useState([]);

  useEffect(() => {
    const sortedData = data.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }

      return 0; // names must be equal
    });

    setCurrentData(sortedData);
    console.log(sortedData);
    console.log(currentData);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <SearchBird
                  setFilteredBirds={setFilteredBirds}
                  birds={currentData}
                />
                <BirdList
                  birds={currentData}
                  filteredBirds={filteredBirds}
                  favouriteBirds={favouriteBirds}
                  setFavouriteBirds={setFavouriteBirds}
                />
              </>
            }
          />
          <Route path="/birds/:id" element={<Bird birds={currentData} />} />
          <Route
            path="/favourites"
            element={
              <FavouritesBirdList
                favouriteBirds={favouriteBirds}
                setFavouriteBirds={setFavouriteBirds}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
