import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";

const AddRecipePage = () => {
  return (
    <div style={{ display: "flex", padding: "40px 20px" }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Add a Recipe</h1>
        <AddRecipeForm />
      </div>
      <RecipeList />
    </div>
  );
};

export default AddRecipePage;
