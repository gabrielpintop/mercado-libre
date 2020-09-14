const { getRequest } = require('../../utilities/httpsHandler');

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
            if (result.available_filters) {
                categoryFilter = result.available_filters.find(filter => filter.id === 'category');
                if (categoryFilter && categoryFilter.values) {
                    categoryFilter.values.forEach(value => {
                        currentFilters.add(value.name);
                    });
                }
            }
            currentFilters.forEach(value => {
                response.categories.push(value);
            });

            // Items information extraction
            response.items = result.results.map(({ id, title, price, currency_id, thumbnail, attributes, shipping }) => {
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

                return { id, title, price: { price, currency: currency_id, decimals, }, picture: thumbnail, condition, free_shipping: shipping ? shipping.free_shipping : false };
            });

            return { data: response };
        }
    } catch (error) {
        return { error: true, data: error, message: 'Se presentó un error haciendo la petición' }
    }
};

const getItemById = async (id) => {
    return { data: { id } };
};

module.exports = { getItems, getItemById };