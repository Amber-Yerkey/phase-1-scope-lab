var customerName = 'bob'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}


function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'amber'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'scott'
}



/*
  
    describe('changeLeastFavoriteCustomer()', function() {
      it('unsuccessfully tries to reassign the least favorite customer', function() {
        expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
      });
    });
  });
*/