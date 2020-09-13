// import { getRequest } from './httpHelper';

const getProducts = (q) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "author": {
                    "name": 'String',
                    "lastname": 'String'
                },
                categories: ['Consolas', 'Consolas y Videojuegos'],
                items: [
                    {
                        "id": 'MLA863294521',
                        "title": 'Microsoft Xbox One S 1tb Two-controller Bundle Blanco',
                        "price": {
                            "currency": 'ARS',
                            "amount": 55200,
                            "decimals": 0
                        },
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.webp',
                        "condition": 'new',
                        "free_shipping": Boolean
                    },
                    {
                        "id": 'MLA863294522',
                        "title": 'Microsoft Xbox One S 1tb Two-controller Bundle Blanco',
                        "price": {
                            "currency": 'ARS',
                            "amount": 55200,
                            "decimals": 0
                        },
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.webp',
                        "condition": 'new',
                        "free_shipping": Boolean
                    },
                    {
                        "id": 'MLA863294523',
                        "title": 'Microsoft Xbox One S 1tb Two-controller Bundle Blanco',
                        "price": {
                            "currency": 'ARS',
                            "amount": 55200,
                            "decimals": 0
                        },
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.webp',
                        "condition": 'new',
                        "free_shipping": Boolean
                    },
                    {
                        "id": 'MLA863294524',
                        "title": 'Microsoft Xbox One S 1tb Two-controller Bundle Blanco',
                        "price": {
                            "currency": 'ARS',
                            "amount": 55200,
                            "decimals": 0
                        },
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.webp',
                        "condition": 'new',
                        "free_shipping": Boolean
                    }]
            });
        }, 200);
        // getRequest(`${api}?id=${id}`, resolve, reject, true);
    });
};

module.exports = { getProducts };