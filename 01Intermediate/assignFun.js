let getMyGrade = function(currentmarks, totalmarks)
{
    let myPercent = (currentmarks/totalmarks) * 100

    let myGrade = ''

    if(myPercent >= 90)
    {
        myGrade = 'A'
    }
    else if(myPercent >= 80)
    {
        myGrade = 'B'
    }
    else if(myPercent >= 70)
    {
        myGrade = 'C'
    }
    else if(myPercent >= 60)
    {
        myGrade = 'D'
    }
    else{
        myGrade = 'E'
    }

    return ` Your Grade is ${myGrade} and percentage is ${myPercent}`
}

let yourResult = getMyGrade(92, 120)
console.log(yourResult)