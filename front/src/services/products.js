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
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.jpg',
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
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.jpg',
                        "condition": 'new',
                        "free_shipping": Boolean,
                        "city": "Prueba"
                    },
                    {
                        "id": 'MLA863294523',
                        "title": 'Microsoft Xbox One S 1tb Two-controller Bundle Blanco',
                        "price": {
                            "currency": 'ARS',
                            "amount": 55200,
                            "decimals": 0
                        },
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.jpg',
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
                        "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.jpg',
                        "condition": 'new',
                        "free_shipping": true
                    }]
            });
        }, 200);
        // getRequest(`${api}?id=${id}`, resolve, reject, true);
    });
};

const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "author": {
                    "name": String,
                    "lastname": String,
                },
                "categories": ['Consolas', 'Consolas y Videojuegos'],
                "item": {
                    "id": 'MLA863294524',
                    "title": 'Microsoft Xbox One S 1tb Two-controller Bundle Blanco',
                    "price": {
                        "currency": 'ARS',
                        "amount": 4332.22,
                        "decimals": 2
                    },
                    "picture": 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.jpg',
                    "condition": "Nuevo",
                    "free_shipping": true,
                    "sold_quantity": 220,
                    "description": 'asdasdasdasdasdasdas asdasfasfasf as fas d asd asdasdas fas d asd as d asd asdasdasdas as d asd as das d as',
                    "permalink": "https://articulo.mercadolibre.com.ar/MLA-857699593-ipod-touch-4-gen-16-gb-impecable-_JM"
                }
            });
        }, 200);
    });
};

module.exports = { getProducts, getProductById };