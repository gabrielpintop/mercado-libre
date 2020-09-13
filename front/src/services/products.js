import { getRequest } from './httpHelper';

const getProducts = (institution) => {
    return new Promise((resolve, reject) => {
        getRequest(`${api}?institution=${institution}`, resolve, reject, true);
    });
};

module.exports = {}