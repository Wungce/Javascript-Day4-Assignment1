
function myFunction(num){

    for(let i = 1; i <= num; i++ ){

        switch(i <= num ){
            case (i % 3 == 0 && i % 5 == 0):
                console.log("FizzBuzz");
                break;
    
            case (i % 3 == 0):
                console.log("Fizz");
                break;
            case (i % 5 == 0) :
                console.log("Buzz");
               break;
            default:
                console.log(i);
    
        }

    }

 

}

myFunction(20);