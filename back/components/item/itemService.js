const { getRequest } = require('../../utilities/httpsHandler');


const extractProductData = ({ id, title, price, sold_quantity, currency_id, thumbnail, attributes, shipping, pictures, secure_thumbnail, permalink, seller_address }, full = false) => {
    const stringPrice = String(price)
    let decimals = 0;
    if (stringPrice.indexOf('.') !== -1) {
        decimals = stringPrice.split('.')[1].length;
    }

    let condition = '';
    if (attributes) {
        const conditionAttribute = attributes.find(attribute => attribute.id === 'ITEM_CONDITION');
        if (conditionAttribute && conditionAttribute.values && conditionAttribute.values.length > 0) {
            condition = conditionAttribute.values[0].name;
        }
    }

    let picture = thumbnail;
    let fallbackPicture = '';
    const imageIndex = picture.indexOf('I.jpg')
    if (imageIndex !== -1) {
        fallbackPicture = picture;
        picture = picture.substring(0, imageIndex) + 'E.jpg';
    }

    let product = { id, title, price: { amount: price, currency: currency_id, decimals, }, picture, fallbackPicture, condition, free_shipping: shipping ? shipping.free_shipping : false };

    if (seller_address && seller_address.city) {
        Object.assign(product, { city: seller_address.city.name });
    }

    if (full) {
        const newPictures = pictures.map(pic => (pic.secure_url));
        Object.assign(product, { sold_quantity: sold_quantity, permalink, pictures: newPictures });
        if (newPictures.length > 0) {
            product.picture = newPictures[0];
        }
    }

    return product;
};

const extractCategories = (attributes = []) => {
    const attributeValues = attributes.filter(attribute => attribute.id === 'BRAND' || attribute.id === 'LINE' || attribute.id === 'MODEL' || attribute.id === 'INTERNAL_MEMORY' || attribute.id === 'OPERATING_SYSTEM_NAME');
    return attributeValues.map(attributeValue => attributeValue.value_name);
};

const getItems = async ({ q, offset = 8 }) => {
    try {
        let offsetQuery = '';
        if (offset) {
            offsetQuery += `&offset=${offset}`;
        }
        const result = await getRequest(`sites/MLA/search?q=${q}&limit=4${offsetQuery}`);
        if (result.error) {
            return { data: result, error: true, message: 'Se presentó un error cargando los productos' };
        } else {
            const response = { categories: [], items: [], hasNext: false, total: 0, hasBefore: false, offset: 0 };
            if (!result.results || result.results.length === 0) {
                return { data: response };
            }

            // Pagination handle
            response.total = result.paging.total;
            if (result.paging.offset + 4 < result.paging.total) {
                response.hasNext = true;
            }
            if (result.paging.offset > 0) {
                response.hasBefore = true;
                response.offset = result.paging.offset;
            }

            // Categories extraction
            const currentFilters = new Set([]);
            let categoryFilter;
            if (result.filters) {
                categoryFilter = result.filters.find(filter => filter.id === 'category');
                if (categoryFilter && categoryFilter.values) {
                    categoryFilter.values.forEach(value => {
                        currentFilters.add(value.name);
                        if (value.path_from_root) {
                            value.path_from_root.forEach(val => {
                                currentFilters.add(val.name);
                            });
                        }
                    });
                }
            }

            currentFilters.forEach(value => {
                response.categories.push(value);
            });

            // Items information extraction
            response.items = result.results.map((product) => extractProductData(product));

            return { data: response };
        }
    } catch (error) {
        return { error: true, data: error, message: 'Se presentó un error haciendo la petición' };
    }
};

const getItemById = async (id) => {
    try {
        const results = await Promise.all([getRequest(`items/${id}`), getRequest(`items/${id}/description`)]);
        if (results[0] !== null && results[1] !== null) {
            if (results[0].error === 'resource not found' || results[1].error === 'not_found') {
                throw new Error('No se encontró el elemento con el identificador ingresado');
            }
            const product = extractProductData({ ...results[0] }, true);
            Object.assign(product, { description: results[1].plain_text });
            return { data: { item: product, categories: extractCategories(results[0].attributes), result: results[0] } };
        }

        throw new Error('Se presentó un error haciendo la petición');
    } catch (error) {
        console.log(error);
        return { error: true, data: error, message: error.message ? error.message : 'Se presentó un error haciendo la petición' };
    }
};

module.exports = { getItems, getItemById };