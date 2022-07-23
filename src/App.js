import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./component/Recipe";

function App() {
  const APP_ID = "dc34792b";
  const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("momo");

  useEffect(() => {
    function getRecipe() {
      fetch(
        `http://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setRecipes(data.hits));
    }
    getRecipe();
  }, [query]);
  
  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
    
     

  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="search" className="search-bar" value={search} onChange={e=>setSearch(e.target.value)} />
        <button type="submit" className="search-button">
          search
        </button>
        </form>
        {recipes.map((rec,id) => (
          <Recipe key={id}
            title={rec.recipe.label}
            ingredients={rec.recipe.ingredients}
            calories={rec.recipe.calories}
            image={rec.recipe.image}
          />
        ))}

    </div>
  );
}

export default App;
