const mongoose = require('mongoose');


const schemaWarehouse = mongoose.Schema({
    wID:Number,
    warehouseName:String,
    warehouseCapacity:Number,
    branch:String,
    itemsStored:[
        {
            itemType:String,
            itemName:String,
            itemQuantity:Number
        }
    ]
});

const Warehouse = mongoose.model('Warehouse',schemaWarehouse);
module.exports = Warehouse;