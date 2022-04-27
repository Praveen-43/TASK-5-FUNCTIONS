//  Do the below programs in arrow functions
 //Print odd numbers in an array
 const odd= () =>{
         let a=[1,2,3,4]
         for(let i=0;i<a.length;i++)
         {
             if(a[i]%2 != 0)
             {
                 console.log(a[i])
            }
         }
     }
     odd()

    
// Convert all the strings to title caps in a string array
    const string= () => {
        function toTitleCase(str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            return str.join(' ');
          }
          console.log(toTitleCase("WELCOME TO JAVASCRIPT"));
    }
    string()


// Sum of all numbers in an array
            const sumNum= () => {
                    let a1=[1,2,3,4]
                    let sum=0
                    for(let i=0;i<a1.length;i++)
                    {
                        sum += + a1[i]
                    }
                    console.log(sum)
                }
                sumNum()


//Return all the prime numbers in an array
const prime= () => {
        var arr=[1,2,3,4,5,6,7];
        numArray = arr.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return false;
            }
            return true;
        })
        console.log(numArray)
        }
        prime()



