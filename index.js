var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() { // spelling must match!
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'SHie';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Ralph'; // this will fail, and that's expected
}


