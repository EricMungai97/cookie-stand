'use strict';

let salessection = document.getElementById('Storesalesdata');

console.dir(salessection);

function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



let storeHours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  City: 'Seattle',
  Mincust: 23,
  Maxcust: 65,
  cookiesslh: [],
  Avgcookiesale: 6.3,
  getCustomers: function(){
    return randomCustomers(23,65);
  },
  getcookiessldperh: function(){
    for(let i = 0; i < storeHours.length; i++){
      let custthishour = this.getCustomers();
      this.cookiesslh.push(Math.floor(custthishour * this.Avgcookiesale));
    }
    console.log(this.cookiesslh);
  },

  render: function () {
    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.City;
    salessection.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    salessection.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesslh[i]} cookies`;
      ulElem.appendChild(liElem);
    }
  }
};

seattle.getcookiessldperh();
seattle.render();
seattle.getCustomers();



// let Tokyo =
//   Mincust: 3,
//   Maxcust: 24,
//   Avgcookiesale: 1.2
// }

// let Dubai = {
//   Mincust: 11,
//   Maxcust: 65,
//   Avgcookiesale: 6.3
// }

// let Paris = {
//   Mincust: 20,
//   Maxcust: 38,
//   Avgcookiesale: 2.3


// }

// let Lima = {
//   Mincust: 2,
//   Maxcust: 16,
//   Avgcookiesale: 4.6
//