const getItems = ({ q }) => {
    return { data: { q } };
};

const getItemById = (id) => {
    return { data: { id } };
};

module.exports = { getItems, getItemById };