import { TResponseBody } from '../utils/types';


export const config = {
    routes: {
        base_url: 'https://fakestoreapi.com/products'
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

export const getProducts = () => {
    return fetch(`${config.routes.base_url}`)
        .then((res) => {
            if (checkSuccess(res)) {
                console.log('Успешный ответ!');
                return res.json();
            } else {
                console.log('Ошибка!');
            }
        });
}

