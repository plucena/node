const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect("mongodb://localhost/api");
    }
    catch(error) {
        console.log(error);
    }

    }
    