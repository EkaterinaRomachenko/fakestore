import { store } from "../store";


// типизация для store
export type AppDispatch = typeof store.dispatch;

// типизация store
export type RootState = ReturnType<typeof store.getState>;

// типизация для products
export type TProduct = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

// типизация для getProducts
export type TResponseBody = {
    success: boolean,
    data: TProduct[]
}
