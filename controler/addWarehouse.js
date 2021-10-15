const mongoose = require('mongoose');
const Warehouse = require('../model/warehouseSchema.js');
const alert = require('alert');
require('dotenv').config();

const addWarehouse = async ({wID,warehouseName,warehouseCapacity,branch}) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const warehouseExist = await Warehouse.exists({wID:wID});
        if (warehouseExist === true){
            alert('Warehouse already existed');
        }else{
           const warehouses = Warehouse({wID,warehouseName,warehouseCapacity,branch});
           await warehouses.save(); 
        }
        mongoose.connection.close();
        
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    addWarehouse
}
