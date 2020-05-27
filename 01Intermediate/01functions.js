
let sayhello = function(name) 
{
    console.log(`Greetings message for ${name}`)
    console.log(`hey ${name}`)
}

// sayhello('suraj')

let fullnamemaker = function(firstname, lastname)
{
    console.log('Welcome to LCo')
    console.log(`Happy to have you, ${firstname} ${lastname}`)
}

// fullnamemaker('suraj', 'singh')

let myAdder = function(num1, num2)
{
    let added = num1 + num2
    return added
}

// let result = myAdder(3,6)
// console.log(result)

//Default Parameters
let gestUser = function(name = 'unName', userCount = 0)
{
    return 'Hello ' + name + ' and your user count is : ' + userCount
}

console.log(gestUser())
console.log(gestUser('suraj', 6))