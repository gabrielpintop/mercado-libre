import { getRequest } from './httpHelper';
const api = 'items';

const getProducts = (q, offset = 0) => {
    return new Promise((resolve, reject) => {
        getRequest(`${api}?q=${q}&offset=${offset}`, resolve, reject, true);
    });
};

const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        getRequest(`${api}/${id}`, resolve, reject, true);
    });
};

export { getProducts, getProductById };