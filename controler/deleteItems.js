const mongoose = require('mongoose');
const Warehouse = require('../model/warehouseSchema.js');
const alert = require('alert');
require('dotenv').config();

const delItems = async (idW,itmRm,amtRm) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const data = await deleteItem(Number(idW),itmRm,Number(amtRm));
    } catch(err){
        console.log(err);
    }
}


const deleteItem = async (gID,gName, amtRemove) => {
    const house = await Warehouse.findOne({wID:gID});
   
    for (let i = 0; i < house.itemsStored.length; i++){
        console.log(house.itemsStored[i].itemName === String(gName));
        if (house.itemsStored[i].itemName === gName){
            let amtInHand = house.itemsStored[i].itemQuantity;
            if (amtInHand >= amtRemove){
                if (amtInHand === amtRemove){
                    await Warehouse.updateOne({wID:gID,'itemsStored.itemName':gName}, {$pull:{'itemsStored':{itemName:gName}}});
                    let tot = house.warehouseCapacity + amtRemove;
                    await Warehouse.updateOne({wID:gID},{warehouseCapacity:tot})
                    return;
                }else{
                    let subVal = amtInHand - amtRemove;
                    await Warehouse.findOneAndUpdate({wID:gID,"itemsStored.itemName":gName},{$set: {'itemsStored.$.itemQuantity':subVal}});
                    let tot = house.warehouseCapacity + amtRemove;
                    await Warehouse.updateOne({wID:gID},{warehouseCapacity:tot})
                    return;

                }

            }else{
                alert(`There is no enough amount of ${gName}`);
                return;
            }
        }
    }
    alert('Check The Id or Name');

}

module.exports = delItems;
    
