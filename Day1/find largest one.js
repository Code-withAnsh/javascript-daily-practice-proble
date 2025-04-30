//create a function that finds the largest among three numbers
function findLargest(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else
    return c;
}
let numbers = findLargest(5,3,8);
console.log("the largest number is: ",numbers);