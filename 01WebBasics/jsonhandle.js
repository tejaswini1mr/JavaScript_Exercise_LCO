alert('welcome')

const student = {
    name : 'john',
    age : 23,
    isActive : true
}

//convert this object into a string to be stored in local storage

const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString);

//localStorage.setItem('student', studentObjToString)


const toJSONstudent = JSON.parse(studentObjToString);
console.log(typeof toJSONstudent);

console.log(toJSONstudent.age);