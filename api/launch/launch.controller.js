const service =  require('./launch.service');

exports.getAll = async (req, res) => {
    try {
        const response =  await service.getLauches();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            message: 'Error retrieving launches'
        });
    }
};