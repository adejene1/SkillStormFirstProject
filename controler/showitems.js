const mongoose = require('mongoose');
const Warehouse = require('../model/warehouseSchema.js');
require('dotenv').config();


const getAllItems = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const items = await Warehouse.find();
        if (items.length === 0) throw {status:500, error:'Could not find any item'};
        mongoose.connection.close();
        return items;
    } catch(err) {
        mongoose.connection.close();
        throw error;
    }
}


module.exports = getAllItems;