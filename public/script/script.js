
function addWarehouse(){
  document.getElementById("add-warehouse").style.display = "block";
  closeaddItem();
  closeRmvItem();
  closeItem();
  closeEast();
  closeNorth();
  closeWest();
}
function closeAddWarehouse(){
  document.getElementById("add-warehouse").style.display = "none";
}

function addItem(){
  document.getElementById("add-item").style.display = "block";
  closeAddWarehouse();
  closeRmvItem();
  closeItem();
  closeEast();
  closeNorth();
  closeWest();
}
function closeaddItem(){
  document.getElementById("add-item").style.display = "none";
}

function rmvItem(){
  document.getElementById("rmv-item").style.display = "block";
  closeAddWarehouse();
  closeaddItem();
  closeItem();
  closeEast();
  closeNorth();
  closeWest();
}
function closeRmvItem(){
  document.getElementById("rmv-item").style.display = "none";
}

function displayItem(){
  document.getElementById("display-item").style.display = "block";
  closeAddWarehouse();
  closeaddItem();
  closeRmvItem();
  closeEast();
  closeNorth();
  closeWest();
}

function closeItem(){
  document.getElementById("display-item").style.display = "none";

}

function addEast(){
  document.getElementById("east-branch").style.display = "block";
  closeaddItem();
  closeRmvItem();
  closeItem();
  closeAddWarehouse();
  closeWest();
  closeNorth();
}
function closeEast(){
  document.getElementById("east-branch").style.display = "none";
}

function addWest(){
  document.getElementById("west-branch").style.display = "block";
  closeaddItem();
  closeRmvItem();
  closeItem();
  closeAddWarehouse();
  closeEast();
  closeNorth();
}
function closeWest(){
  document.getElementById("west-branch").style.display = "none";
}

function addNorth(){
  document.getElementById("north-branch").style.display = "block";
  closeaddItem();
  closeRmvItem();
  closeItem();
  closeAddWarehouse();
  closeEast();
  closeWest();
}
function closeNorth(){
  document.getElementById("north-branch").style.display = "none";
}








function getItems(){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
    const items = JSON.parse(xhr.response);
    const itemConatiner = document.getElementById('see-item');
    const div = document.createElement('div');
    let output = '<table><tr><th> WareHouse ID </th><th> WareHouse Name </th><th>WareHouse Capacity</th><th> Item Type </th><th> Item </th><th> Item Amount </th></tr>';
    if (xhr.status === 200){
      for (item of items){
        output += '<tr><td>' + item.wID + '</td><td>' + item.warehouseName + '</td><td>'+ item.warehouseCapacity+'</td></tr>';
        for (let i = 0; i < item.itemsStored.length; i++) {
          output += '<tr><td>'+'</td>'+'<td>'+'</td>'+'<td>'+'</td>'+'<td>' + item.itemsStored[i].itemType + '</td>' + '<td>' + item.itemsStored[i].itemName + '</td>' + '<td>' + item.itemsStored[i].itemQuantity + '</td>';
          output += '</tr>';
        }
       

      }
      output += '</table>';
      
      console.log(output);
    }
    itemConatiner.innerHTML = output;
  }

  xhr.open('GET','/showItems');
  xhr.send();
}

function getEast(){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
    const items = JSON.parse(xhr.response);
    const eastCont = document.getElementById('east-item');
    const div = document.createElement('div');
    let output = '<table><tr><th> WareHouse ID </th><th> WareHouse Name </th><th>WareHouse Capacity</th><th> Item Type </th><th> Item </th><th> Item Amount </th></tr>';
    if (xhr.status === 200) {
      for (item of items) {
        if (item.branch === 'EastSide') {
          output += '<tr><td>' + item.wID + '</td><td>' + item.warehouseName + '</td><td>'+ item.warehouseCapacity+'</td></tr>';
          for (let i = 0; i < item.itemsStored.length; i++) {
            output += '<tr><td>'+'</td>'+'<td>'+'</td>'+'<td>'+'</td>'+'<td>' + item.itemsStored[i].itemType + '</td>' + '<td>' + item.itemsStored[i].itemName + '</td>' + '<td>' + item.itemsStored[i].itemQuantity + '</td>';
            output += '</tr>';
          }

        }
      }
      output += '</table>';
    }
    eastCont.innerHTML = output;
  }
  xhr.open('GET','/showItems');
  xhr.send();
}

function getWest(){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
    const items = JSON.parse(xhr.response);
    const westCont = document.getElementById('west-item');
    const div = document.createElement('div');
    let output = '<table><tr><th> WareHouse ID </th><th> WareHouse Name </th><th>WareHouse Capacity</th><th> Item Type </th><th> Item </th><th> Item Amount </th></tr>';
    if (xhr.status === 200) {
      for (item of items) {
        if (item.branch === 'WestSide') {
          output += '<tr><td>' + item.wID + '</td><td>' + item.warehouseName + '</td><td>'+ item.warehouseCapacity+'</td></tr>';
          for (let i = 0; i < item.itemsStored.length; i++) {
            output += '<tr><td>'+'</td>'+'<td>'+'</td>'+'<td>'+'</td>'+'<td>' + item.itemsStored[i].itemType + '</td>' + '<td>' + item.itemsStored[i].itemName + '</td>' + '<td>' + item.itemsStored[i].itemQuantity + '</td>';
            output += '</tr>';
          }

        }
      }
      output += '</table>';
    }
    westCont.innerHTML = output;
  }
  xhr.open('GET','/showItems');
  xhr.send();
}

function getNorth(){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
    const items = JSON.parse(xhr.response);
    console.log(items);
    const northCont = document.getElementById('north-item');
    const div = document.createElement('div');
    let output = '<table><tr><th> WareHouse ID </th><th> WareHouse Name </th><th>WareHouse Capacity</th><th> Item Type </th><th> Item </th><th> Item Amount </th></tr>';
    console.log(xhr.status === 2000);
    if (xhr.status === 200) {
      console.log('Hello');
      for (item of items) {
        console.log(item.branch === 'NorthSide');
        if (item.branch === 'NorthSide') {
          output += '<tr><td>' + item.wID + '</td><td>' + item.warehouseName + '</td><td>'+ item.warehouseCapacity+'</td></tr>';
          for (let i = 0; i < item.itemsStored.length; i++) {
            output += '<tr><td>'+'</td>'+'<td>'+'</td>'+'<td>'+'</td>'+'<td>' + item.itemsStored[i].itemType + '</td>' + '<td>' + item.itemsStored[i].itemName + '</td>' + '<td>' + item.itemsStored[i].itemQuantity + '</td>';
            output += '</tr>';
          }

        }
      }
      output += '</table>';
    }
    northCont.innerHTML = output;
  }
  xhr.open('GET','/showItems');
  xhr.send();
}

window.addEventListener('DOMContentLoaded', () => {
  getItems();
  getEast();
  getWest();
  getNorth();
})






