export default function App() {
  const recipes = [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      recipe: {
        // recipe data
      }
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
            {recipe.dishTypes.map((type, index) => {
              return <span key={index}>{type}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
}
