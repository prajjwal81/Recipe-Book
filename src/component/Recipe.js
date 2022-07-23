import Styles from './Recipe.module.css'
function Recipe({ title, ingredients, calories, image }) {
  return (
    <div className={Styles.Recipe}>
      <h1>{title}</h1>
      <ol><h3>Ingredients:</h3>
        {ingredients.map((ingre,idx) => (
          <li key={idx}>{ingre.text} </li>
        ))}
      </ol>
      <p><h4>Calories:</h4>{calories}</p>
      <img src={image} className={Styles.image}  />
    </div>
  );
}
export default Recipe;

// git branch -M "main"
// git remote add origin https://github.com/prajjwal81/Recipe-Book.git
// git push -u origin "main"
