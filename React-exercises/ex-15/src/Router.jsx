import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories"; 
import RecipeDetail from "./pages/RecipeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: "recipes",
        element: <Recipes /> 
      },
      {
        path: "recipes/:id",
        element: <RecipeDetail />
      },
      { 
        path: "categories", 
        element: <Categories /> 
      },
      { path: "categories/:categoryName", element: <Categories /> }
    ]
  }
]);

export default router;