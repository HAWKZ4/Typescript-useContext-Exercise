import { useContext } from "react";
import ProductsContext, {
  UseProductsContextType,
} from "../context/ProductsContext";

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
