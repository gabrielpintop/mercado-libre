const formatNumber = (number) => {
    if (number) {
        const split = number.toString().split('.');
        return split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return '';
};

module.exports = { formatNumber };