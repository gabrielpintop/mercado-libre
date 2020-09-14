const ItemService = require('./itemService');

// Gets a specific item by id
const GetItem = async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next({ error: true, message: 'No se ingresó un id válido' });
    }
    const result = await ItemService.getItemById(id);
    next(result);
};

// Gets all the items
const GetItems = async (req, res, next) => {
    const { q } = req.query;
    if (!q) {
        return next({ error: true, message: 'No se ingresaron paramétros de busquéda válidos' });
    }

    let offset = 0;
    if (req.query.offset) {
        let number = Number(req.query.offset);
        if (typeof offset === 'number' && !isNaN(number)) {
            offset = number;
        }
    }

    const result = await ItemService.getItems({ q, offset });
    next(result);
};

module.exports = { GetItem, GetItems };