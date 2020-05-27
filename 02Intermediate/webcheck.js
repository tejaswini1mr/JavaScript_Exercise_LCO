let userEmail = 'suraj123@singh'
let password = '1234'

let userChecker = function(mystring)
{
    if((mystring.includes(123)) && (mystring.length > 6))
    {
        return true
    }
    else{
        return false
    }
}

let passChecker = function(pass)
{
    if((pass.includes(1234)) && (pass.length > 8))
    {
        return true
    }  else {
        return false 
    }
}

console.log(userChecker(userEmail))
console.log(passChecker(password))
