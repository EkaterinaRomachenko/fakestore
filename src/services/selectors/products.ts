import { RootState } from "../utils/types";

// извлекаем список продуктов из store
export const getProductsData = (store: RootState) => store.productsSlice.products;
