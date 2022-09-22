'use strict';

// DOM MANIPULATION STEP 1: WINDOW INTO YOUR HTML DOCUMENT
// 1 WAY TO DO THIS: document.getElementById = method that will take a string for ID
// 2nd way: document.querySelector = method that takes in a string of either an ID, className, or element type

let salessection = document.getElementById('Storesalesdata');

let tableElem = document.getElementById('class');

console.dir(salessection);

let SalesStandData = [];

function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ************ CONSTRUCTOR FUNCTION **********

function Location(City, Mincust, Maxcust,Avgcookiesale){
  this.City = City;
  this.Mincust = Mincust;
  this.Maxcust = Maxcust;
  this.Avgcookiesale = Avgcookiesale;
  this.salestotal = 0;
  this.cookiesslh = [];
  SalesStandData.push(this);

}

// ******* PROTOTYPE METHODS ********

Location.prototype.getCustomers = function(){
  return randomCustomers(this.Mincust, this.Maxcust);
};

Location.prototype.getcookiessldperh = function(){
  for (let i = 0; i < storeHours.length; i++) {
    let custthishour = this.getCustomers();
    this.cookiesslh.push(Math.floor(custthishour * this.Avgcookiesale));
    this.salestotal += this.cookiesslh[i];
  }
};

// ****** TABLE DOM RENDERING ******
// YOU SHOULD ALREADY HAVE A TABLE IN YOUR SALES.HTML -- NO NEED FOR YOU TO CREATE A TABLE FOR LAB

function renderHeader(){
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = ' ';
  row1.appendChild(th1Elem);

  for(let i = 0; i < storeHours.length; i++){
    let h2Elem = document.createElement('th');
    h2Elem.textContent = storeHours[i];
    row1.appendChild(h2Elem);
  }

  let th4Elem = document.createElement('th');
  th4Elem.textContent = 'Daily Location Total';
  row1.appendChild(th4Elem);

}

renderHeader();

Location.prototype.render = function(){

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let cityElem = document.createElement('td');
  cityElem.textContent = this.City;
  row2.appendChild(cityElem);

  for(let i = 0; i < this.cookiesslh.length; i++){
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.cookiesslh[i];
    row2.appendChild(td1Elem);
  }

  let dailysaletotElem = document.createElement('td');
  dailysaletotElem.textContent = this.salestotal;
  row2.appendChild(dailysaletotElem);
};


function renderfooter (){
  let row3 = document.createElement('tr');
  row3.textContent = 'Totals';
  tableElem.appendChild(row3);

  let Grandtotal = 0;

  for (let i = 0; i < storeHours.length; i++){

    let Total = 0;
    for(let j = 0; j < SalesStandData.length; j++){
      Total += SalesStandData[j].cookiesslh[i];

    }
    console.log(Total);
    Grandtotal += Total;

    let td1Elem = document.createElement('td');
    td1Elem.textContent = Total;
    row3.appendChild(td1Elem);
  }

  let td2Elem = document.createElement('td');
  td2Elem.textContent = Grandtotal;
  row3.appendChild(td2Elem);
}


// ***** CREATE OUR OBJECTS USING OUR CONSTRUCTOR ********

new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

console.log(SalesStandData);

function renderAll(){
  for(let i = 0; i < SalesStandData.length; i++){
    SalesStandData[i].getcookiessldperh();
    SalesStandData[i].render();
  }
}

renderAll();
renderfooter();
