const requestHandler = ({ error, data, message, status }, req, res, next) => {
    if (error) {
        console.error(error, message, data);
        let errors = []
        if (Array.isArray(message)) {
            errors = errors.concat(message);
        } else {
            errors = data ? [message || 'Se presentó un error realizando la petición', data] : [message || 'Se presentó un error realizando la petición'];
        }
        res.status(400).json({ errors });
    } else {
        res.status(status || 200).json({ ...data, author: { name: 'Gabriel', lastName: 'Pinto' } });
    }
};

module.exports = requestHandler;
