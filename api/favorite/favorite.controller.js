const Favorite = require('./favorite.model');

exports.getAll = async (req, res) => {
    try {
        const favorites =  await Favorite.find({}).exec();
        return res.status(200).json(favorites);
    } catch (e) {
        return res.status(500).json({
            message: 'Error retrieving favorites'
        });
    }
};

exports.addFavorite = async (req, res) => {
    try {
        const favoriteObj = new Favorite({
            fligthNumber: req.params.fligthNumber
        });
        await favoriteObj.save();
        return res.status(200).json({ success: true });
    } catch(e) {
        return res.status(500).json({
            message: 'Server error adding favorite'
        });
    }
};


exports.removeFavorite = async (req, res) => {
    try {
        await Favorite.remove({ fligthNumber: req.params.fligthNumber })
        return res.status(200).json({ success: true });
    } catch(e) {
        return res.status(500).json({
            message: 'Server error removing favorite'
        });
    }
};