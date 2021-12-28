/*

You are given two numbers a and b where 0 ≤ a ≤ b. 
Imagine you construct an array of all the integers from a to b inclusive. 
You need to count the number of 1s in the binary representations of all the numbers in the array.

*/

function solution(a, b) {
    let i = a;
    let array = [];
    let bits = '';
    while(i <= b){
        array.push(i)
        i++;
    }
    
    array.map((value)=>{
        bits = bits.concat(value.toString(2).replaceAll('0',''))
        })
    return bits.length;
}

// console.log(solution(1,10))


/*

Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
solution(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
solution(a) = 1.

*/

function solution(a) {
    let bits = a.toString(2).split('').reverse().join('');
    return parseInt(bits, 2)
}

// console.log(solution(97))


/*

Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.


*/

function solution(n) {
    return (((0xaaaaaaaa&n)>>1)|((0x55555555&n)<<1));
  }
  
  
// console.log(solution(13))

  
/*
You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit (0-based).
*/



function solution(n, m) {
    return ((n-m))&(~(n-m-1));
  }

  // (n&~(n-1)) always return the binary number containing rightmost set bit as 1.


  /*
  You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of 2position_of_the_found_pair (0-based).
*/

function solution(n, m) {
    return ((~n)-m)&~(~n-m-1);
  }
  