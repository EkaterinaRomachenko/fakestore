import { store } from "../store";


// типизация для store
export type AppDispatch = typeof store.dispatch;

// типизация store
export type RootState = ReturnType<typeof store.getState>;

// типизация для products
export type TProduct = {
    id: number,
    name : string,
    category: string,
    brand: string,
    description: string,
    imageUrl: string,
    price: number,
    application : string,
    aboutBrand : string,
    compound : string,
    rating: number
}

// типизация для getProducts
export type TResponseBody = {
    success: boolean,
    data: TProduct[]
}

// типизация для getProducts
export type IProps = {
    product: TProduct;
}

export type Reviews = {
    advantages: string;
    disadvantages: string;
    description: string;
    images: File[];
};


