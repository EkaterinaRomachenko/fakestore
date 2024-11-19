import { TResponseBody } from '../utils/types';


export const config = {
    routes: {
        // base_url: 'https://fakestoreapi.com/products'
        base_url: 'https://673356fb2a1b1a4ae1132adc.mockapi.io/fakestore/Store'
    }
}

//универсальная ф-я проверки ответа от сервера
export const checkResponse = (res: Response): Promise<TResponseBody> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}
// универсальная ф-я проверки на success от сервера
export const checkSuccess = (res: Response): boolean => {
    return res.ok && res.status >= 200 && res.status < 300;
}

export const getProducts = async () => {
    try {
        const response = await fetch(`${config.routes.base_url}`);
        if (checkSuccess(response)) {
            console.log('Успешный ответ!');
            return await response.json();
        } else {
            console.log('Ошибка!');
        }
    } catch (err) {
        console.log(err);
    }
}
