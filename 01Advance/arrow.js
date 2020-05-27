// const sayHello = function(name) {
//     return `Hey there, ${name} !`
// }
// console.log(sayHello('suraj'))



// const sayHello = (name) => {
//     return `Hey there, ${name} !`
// }
// console.log(sayHello('suraj')) 

const sayHello = (name) => `Hey there ${name}!`

//console.log(sayHello('suraj'))


const todos = [{
    title: 'Buy Bread',
    isDone: true,
}, {
    title: 'Go to Gym',
    isDone: true,
}, {
    title: 'Record Youtube Videos',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

//console.log(thingsDone)



const cameras = {
    price: 600,
    weight: 2000,
    myDes: function() {
        return `This canon camera is of ${this.price}`
    }
}

console.log(cameras.myDes())