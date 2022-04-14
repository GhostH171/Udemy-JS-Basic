1. What is JS
    - High lever : dont have to think about complex stuff like memory management 
    - Object-oriented : Base on objects for storing most kind of Data
    - Multi-paradigm : Use different programme's styles

* 2 ways to add js file in a HTML
1. Write Script directly in HTML
2. Link through src external file

2. Variable

- Variable name can not be started with a number.
- Can only contain number, letter, underscores, dolar sign

*Primitive value
- & types of Primitive value
    + number
    + string 
    + boolean
    + undefine
    + null
    + symbol
    + Bigint

let can re-declare
const can not re declare or empty value
* Note: use const by default and let when Variable needs to change, avoid to use var

* convert string to number
const inputYear = '1999'
console.log(Number(inputYear)); 

* falsy value : value that are not exactly false but will fase when we try to convert them to boolean
    5 falsy value: 0, '', undefine, null, NaN
* truthy value : values become true when convert them to boolean
    every other types of value

3. Comparison operators
- Equality operator == and ===
alway use === to avoid bugs

parameter : tham so
4. Function

- function declaration :

    function calcMarble(hoang)
    //hoang here is a parameter
    {
        return 29 - hoang;
    }
    console.log(calcMarble(10))
    //10 here is an arguement

-function expression
    const calcMarble2 = function (hoang) {
        return 23 - hoang;
    }
- Arrow function

5. Array 
- Array is not a Primitive value so It can change value when it is declared with const.
- Array can not be change completely
- Can not put array into a function invocation

*Array method:
- push(): add element

- pop(): remove last element
- shift(): remove first element
- indexOf(): display the position of a value
- includes(): check whether a value in the array or not and return true/false
* distigush dot notation and bracket notation
-[push expression here]
- dot.propety but not an expression

Computation: thuat toan

6. Loops
- continue and break
    + continue : tim kiem cac gia tri thoa man 1 dieu kien nao do va loc bo cac gia tri khac
    + break : thuc hien vong lap cho den khi tim duoc gia tri thoa man dieu kien sau do huy luon vong lap
a. for
    - push(): add element at the end of the array.
    syntax: for(variable starts; condition; direction of variable ++/--)

decimal : so thap phan

