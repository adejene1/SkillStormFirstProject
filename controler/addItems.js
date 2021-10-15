const mongoose = require('mongoose');
const Warehouse = require('../model/warehouseSchema.js');
const alert = require('alert');
require('dotenv').config();


const addItems = async (iType,iName,itemQ,itemWID,itemWName) => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        const data = await addNewItem(iType,iName,itemQ,itemWID,itemWName);

    }catch(err){
        console.log(err);
    }
}

const addNewItem = async (iType,iName,itemQ,itemWID,itemWName) => {
    const currWarehouse = await Warehouse.findOne({wID:Number(itemWID)});
    if (currWarehouse.warehouseCapacity < Number(itemQ)){
        alert('Warehouse Capacity is Not Enough');
        return;
    }


    const val = await Warehouse.find({"itemsStored.itemName":iName}).count();

    if (val > 0){
        const house = await Warehouse.findOne({wID:Number(itemWID)});
        if (house.warehouseName !== itemWName){
            alert('Wrong ID and Warehouse match check it again');
            return;
        }
        for(let i = 0; i < house.itemsStored.length; i++){
            if (house.itemsStored[i].itemName === iName){
                let value = house.itemsStored[i].itemQuantity + Number(itemQ);
                await Warehouse.findOneAndUpdate({wID:Number(itemWID),"itemsStored.itemName":iName},{$set: {'itemsStored.$.itemQuantity':value}});
                let tot = house.warehouseCapacity - Number(itemQ);
                await Warehouse.updateOne({wID:Number(itemWID)},{warehouseCapacity:tot});

            }
        }
    }else {
        const warehouse = await Warehouse.find();
            for (i in warehouse){
                if (warehouse[i].wID === Number(itemWID) && warehouse[i].warehouseName === itemWName){
                    await Warehouse.updateOne({wID:Number(itemWID),warehouseName:itemWName},{$push:{itemsStored:[{
                        itemType:iType,
                        itemName:iName,
                        itemQuantity:itemQ
                    }]}})
                    const house = await Warehouse.findOne({wID:Number(itemWID)});
                    let tot = house.warehouseCapacity - Number(itemQ);
                    await Warehouse.updateOne({wID:Number(itemWID)},{warehouseCapacity:tot});
                    return;
                }
            }
        alert('Warehouse not exist, add the warehouse first');
        }
}

module.exports = addItems;


