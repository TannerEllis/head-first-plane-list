let passengers = [{ name: 'Jane Doloop',  paid: true, ticket: 'firstclass'},
                    { name: 'Dr. Evel', paid: true, ticket: 'maincabin'}, 
                    { name: 'Sue Property', paid: false, ticket: 'firstclass'}, 
                    { name: 'John Funcall', paid: true, ticket: 'pilot'}]

function checkNoFlyList(passenger){
    return (passenger.name === 'Dr. Evel')
}
    


function checkNotPaid(passenger){
    return (!passenger.paid)
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++){
        if(testFunction(passengers[i])) {
            return false
        }
    }
    return true
}

let allCanFly = processPassengers(passengers, checkNoFlyList)
if(!allCanFly) {
    console.log('The plane can not take off: we have a passenger on the no fly list')
}

let allPaid = processPassengers(passengers, checkNotPaid)
if(!allPaid) {
    console.log('The plane can not take off: not everyone has paid.')
}

function createDrinkOrder(passenger){
 let orderFunction;
    if(passenger.ticket === 'firstclass') {
        orderFunction = function(){
            alert('Would you like a cocktail or wine?')
        }
        }else {
            orderFunction = function(){
                alert('Your choice is cola or water.')
            }
        }
        return orderFunction
    }

    console.log(createDrinkOrder(passengers[1]))
