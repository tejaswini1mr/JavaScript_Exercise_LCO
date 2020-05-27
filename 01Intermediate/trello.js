// for loops

// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']


// days.forEach(function ( day, index) {
//     console.log(`starts with ${index+1} -- ${day}`);
// })

// for(let index = 0; index <= days.length; index++)
// {
//     console.log(days[index]);
// }

// for(let index = days.length-1; index >=0; index --)
// {
//     console.log(days[index]);
// }


const myTodos = []
myTodos.push('Wake up at 6 am')
myTodos.push('Go to exercise')
myTodos.push('Have Breakfast')
myTodos.push('Watch Purchased Videos')

myTodos.forEach(function(todo, index) {
    console.log(`Your task number ${index+1} is : ${todo}`)
})