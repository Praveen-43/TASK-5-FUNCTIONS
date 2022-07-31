// Print odd numbers in an array - anonymous function
var odd= function() {
    let a=[1,2,3,4];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2 !== 0)
        {
            console.log(a[i]);
        }
    }
}

// const odd = function() {
//     const a=[1,2,3,4,5,6].filter(num => num % 2 !== 0)
//     return a;
// }
// console.log(odd().join(', '))

odd()


//  Sum of all numbers in an array - anonymous function

const sumNum= function() {
    let a1=[1,2,3,4]
    let sum=0
    for(let i=0;i<a1.length;i++)
    {
        sum += + a1[i]
    }
    console.log(sum)
}
sumNum()

//  Return all the prime numbers in an array - anonymous function 

const prime=function()  {
    var a2=[1,2,3,4,5,6,7];
    numArray = a2.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
    })
    console.log(numArray)
    }
    prime()


