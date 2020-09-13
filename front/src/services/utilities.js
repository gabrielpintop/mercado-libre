const formatNumber = (number) => {
    if (number) {
        const split = number.toString().split('.');
        return split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (split[1] ? (',' + split[1].slice(0, 2)) : '');
    }
    return '';
};

module.exports = { formatNumber };