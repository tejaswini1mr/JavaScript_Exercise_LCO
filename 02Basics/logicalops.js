//  && - AND OPERATION 
//  || - OR OPERATION 


let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(isVerified && isLoggedIn && hasPaymentToken)
{
    console.log('Greetings message for user')
    console.log('Grant access for paid course')
}
else if(isVerified || isGuest)
{
    console.log('Allow free previews')
}
else{
    console.log('Message : contact your admin')
}