/*
476. Number Complement

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer num, return its complement.

*/

// brutal force: 

const findComplement_brutalForce = function(num) {
    let binaryString = [];
    while(Math.round(num/2)!=0){
        if(num % 2 == 0) binaryString.push('1');
        else binaryString.push('0');
        num = Math.floor(num / 2);
    }
    let output = 0;
    binaryString.map((value,index) =>{
        if(value === '1'){
            output += Math.pow(2,index)
        }
    })

    return output;
};

// one linere: 

const findComplement_bitOperator = function(num){
    
}

// console.log(findComplement(5))

