'use strict';

// DOM MANIPULATION STEP 1: WINDOW INTO YOUR HTML DOCUMENT
// 1 WAY TO DO THIS: document.getElementById = method that will take a string for ID
// 2nd way: document.querySelector = method that takes in a string of either an ID, className, or element type

let salessection = document.getElementById('Storesalesdata');

console.dir(salessection);

function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  City: 'Seattle',
  Mincust: 23,
  Maxcust: 65,
  cookiesslh: [],
  Avgcookiesale: 6.3,
  salestotal: 0,
  getCustomers: function () {
    return randomCustomers(23, 65);
  },
  getcookiessldperh: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custthishour = this.getCustomers();
      this.cookiesslh.push(Math.floor(custthishour * this.Avgcookiesale));
      this.salestotal += this.cookiesslh[i];
    }
    console.log(this.cookiesslh);
  },

  // STEP 2: CREATE THE ELEMEN

  render: function () {
    let articleElem = document.createElement('article');
    salessection.appendChild(articleElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.City;
    articleElem.appendChild(h1Elem);
    // STEP 3: GIVE CONTEXT IF NECESSARY
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    // STEP 4: ADD IT TO THE DOM --> parent.appendChild(child to append);
    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesslh[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.salestotal} cookies`;
    ulElem.appendChild(liElem);
  }
};


let Tokyo = {
  City: 'Tokyo',
  Mincust: 3,
  Maxcust: 24,
  cookiesslh: [],
  Avgcookiesale: 1.2,
  salestotal: 0,
  getCustomers: function () {
    return randomCustomers(3, 24);
  },
  getcookiessldperh: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custthishour = this.getCustomers();
      this.cookiesslh.push(Math.floor(custthishour * this.Avgcookiesale));
      this.salestotal += this.cookiesslh[i];
    }
    console.log(this.cookiesslh);
  },

  render: function () {
    let articleElem = document.createElement('article');
    salessection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.City;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesslh[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.salestotal} cookies`;
    ulElem.appendChild(liElem);
  }
};

let Dubai = {
  City: 'Dubai',
  Maxcust: 11,
  Mincust: 38,
  Avgcookiesale: 3.7,
  cookiesslh: [],
  salestotal: 0,
  getCustomers: function () {
    return randomCustomers(11, 38);
  },
  getcookiessldperh: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custthishour = this.getCustomers();
      this.cookiesslh.push(Math.floor(custthishour * this.Avgcookiesale));
      this.salestotal += this.cookiesslh[i];
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    salessection.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.City;
    articleElem.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i<storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesslh[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.salestotal} cookies`;
    ulElem.appendChild(liElem);
  }

};

let paris = {
  City: 'Paris',
  Mincust: 23,
  Maxcust: 65,
  cookiesslh: [],
  Avgcookiesale: 6.3,
  salestotal: 0,
  getCustomers: function () {
    return randomCustomers(23, 65);
  },
  getcookiessldperh: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custthishour = this.getCustomers();
      this.cookiesslh.push(Math.floor(custthishour * this.Avgcookiesale));
      this.salestotal += this.cookiesslh[i];
    }
    console.log(this.cookiesslh);
  },

  render: function () {
    let articleElem = document.createElement('article');
    salessection.appendChild(articleElem);

    let h4Elem = document.createElement('h4');
    h4Elem.textContent = this.City;
    articleElem.appendChild(h4Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesslh[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.salestotal} cookies`;
    ulElem.appendChild(liElem);
  }
};

let Lima = {
  City: 'Lima',
  Mincust: 23,
  Maxcust: 65,
  cookiesslh: [],
  Avgcookiesale: 6.3,
  salestotal: 0,
  getCustomers: function () {
    return randomCustomers(23, 65);
  },
  getcookiessldperh: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custthishour = this.getCustomers();
      this.cookiesslh.push(Math.floor(custthishour * this.Avgcookiesale));
      this.salestotal += this.cookiesslh[i];
    }
    console.log(this.cookiesslh);
  },

  render: function () {
    let articleElem = document.createElement('article');
    salessection.appendChild(articleElem);

    let h5Elem = document.createElement('h5');
    h5Elem.textContent = this.City;
    articleElem.appendChild(h5Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesslh[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.salestotal} cookies`;
    ulElem.appendChild(liElem);
  }
};

seattle.getcookiessldperh();
seattle.render();
seattle.getCustomers();

Tokyo.getcookiessldperh();
Tokyo.render();
Tokyo.getCustomers();


Dubai.getcookiessldperh();
Dubai.render();
Dubai.getCustomers();

paris.getcookiessldperh();
paris.render();
paris.getCustomers();

Lima.getcookiessldperh();
Lima.render();
Lima.getCustomers();
