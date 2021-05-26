var isPalindrome = function(x) {
    let reverseredNumber =( x.toString().split('').reverse().join('')) * Math.sign(x);
    if ( x === reverseredNumber){
        return true;
    } else return false;
}

console.log(isPalindrome(121))