## 02-11-2023

## Arrays

1.  What is Array in JS

2.  Properties of Array

    - Dynamic
    - Mutable
    - Methods & Properties
    - Sparse or dense

3.  Difference between Sparse Array & Dense Array
    Dense Array :

    - A dense array ,also called as contiguos array, It stores elements in a seuential manner .
    - index starts with 0
      Sparse Array :

    - A sparse array in which the elements are not seuential,they don't always start at 0.

    - They are having holes /gaps in the seuence .
      const arr =[];
      arr[100] = 5;

4.  Different ways to create a Sparse Array

    a. Using Array Literal

    const arr = [item1,item2,....];

    b. Using Array Constructor

    const arr = new Array(10);

    c. Delete Any Array Item

    const arr =[i1,i2,i3,i4];
    delete arr[5]; // Not suggested

    d. By Increasing the Length of Array

    const arr =[1,2,3,4];
    arr.length = 100;

5.  Declaring Array

    a. Using Literal

    const arr = []; //Empty Array
    const arr2 = [10,20,30,40];

    b. Using Constructor Function with New Keyword
    const arr = new Array(); //Empty Array
    const arr = new Array(1,2,3);

6.  Accessing Elements in an Array

    const arr = [10,20,30,40,50];

    console.log(arr);
    console.log(arr[0]);
    console.log(arr[arr.length]); // undefined
    console.log(arr[arr.length-1]); // 50

    for(let i=0 ; i<arr.length;i++)
    {
    console.log(arr[i]);
    }

      <h2>Example :</h2>

      <div>
          const arr = [10, 20, 30, 40, 50];
          console.log(arr);
          console.log(arr[0]);
          console.log(arr[arr.length]); // undefined
          console.log(arr[arr.length - 1]); // 50

          for (let i = 0; i < arr.length; i++) {
          console.log("arr[" + i + "]=" + arr[i]);
          //String Literal / Template Literal /Template Strings
          console.log(`arr[${i}]=${arr[i]}`);
          }
          console.log("---------------FOR-IN LOOP-----------------");
          for (let i in arr) {
          console.log(arr[i]);
          }
          console.log("---------------FOR-OF LOOP-----------------");
          for (let i of arr) {
          console.log(i);
          }
          console.log(
          "---------------FOREACH LOOP USING NORMAL CALLBACK FUNCTION-----------------"
          );
          arr.forEach(function (i) {
          console.log(i);
          });

          console.log(
          "---------------FOREACH LOOP USING ARROW CALLBACK FUNCTION-----------------"
          );

          arr.forEach((i) => console.log(i));

      </div>

7.  Array Mutation on Array Copy

    const arr1 =[10,20,30];
    const arr2 =arr1;
    arr2[0]=80;
    console.log(arr1);

    //Exact Way to create a new copy of an existing array

    a. Using Slice

    Example:

        const arr1 = [10, 20, 30];
        const arr2 = arr1.slice();
        arr2[0] = 90;
        console.log(arr1);
        console.log(arr2);

    b. Using [...arr]

        const arr1 = [10, 20, 30];
        const arr2 = [...arr1];
        arr2[0] = 90;
        console.log(arr1);
        console.log(arr2);

    c. Array.from(arr)

        const arr1 = [10, 20, 30];
        const arr2 = Array.from(arr1);
        arr2[0] = 90;
        console.log(arr1);
        console.log(arr2);

8.  ## Array Methods & Properties :

    - There are two Property
      a. length
      b. Prototype
      - The prototype property of the global Array constructor itself.
      - It allows you to add custom properties and methods to the global Array.

9.  Methods of Array in JS

        1. at()
        2. concat()
        3. Array() ---> Constructor
        4. copyWithin()
        5. entries()
        6. every()
        7. fill()
        8. filter()
        9. find()

    findIndex
    :
    ƒ findIndex()
    findLast
    :
    ƒ findLast()
    findLastIndex
    :
    ƒ findLastIndex()
    flat
    :
    ƒ flat()
    flatMap
    :
    ƒ flatMap()
    forEach
    :
    ƒ forEach()
    includes
    :
    ƒ includes()
    indexOf
    :
    ƒ indexOf()
    join
    :
    ƒ join()
    keys
    :
    ƒ keys()
    lastIndexOf
    :
    ƒ lastIndexOf()
    length
    :
    0
    map
    :
    ƒ map()
    pop
    :
    ƒ pop()
    push
    :
    ƒ push()
    reduce
    :
    ƒ reduce()
    reduceRight
    :
    ƒ reduceRight()
    reverse
    :
    ƒ reverse()
    shift
    :
    ƒ shift()
    slice
    :
    ƒ slice()
    some
    :
    ƒ some()
    sort
    :
    ƒ sort()
    splice
    :
    ƒ splice()
    toLocaleString
    :
    ƒ toLocaleString()
    toReversed
    :
    ƒ toReversed()
    toSorted
    :
    ƒ toSorted()
    toSpliced
    :
    ƒ toSpliced()
    toString
    :
    ƒ toString()
    unshift
    :
    ƒ unshift()
    values
    :
    ƒ values()
    with
    :
    ƒ with()

10. Example of Usage of Methods :

---

a. push() & pop()

b. unshift() & shift();

c. toString();

d. slice()

- It is used to get copy of the array
- It is not disturbing Original Array
- const arr5 = [1, 2, 3, 4];
  const arr6 = arr5.slice();
  const arr7 = arr5.slice(1);
  const arr8 = arr5.slice(1, 3);
  const arr9 = arr5.slice(0, -2);

  console.log(arr5); //[1,2,3,4]
  console.log(arr6); //[1,2,3,4]
  console.log(arr7); //[2,3,4]
  console.log(arr8); //[2,3]
  console.log(arr9); //[1,2]

e.splice()

Difference between slice() and splice()

concat()

f. map() ,reduce() ,filter()

const arr = [3,4,5];

const arr2 = arr.map(function(a){
return a\*2;
});
console.log(arr1);
console.log(arr2);

=> Callback Function :

---

-

## Task For You

Complete all Array Function Concepts

Call back Functions

## 07-11-2023 (Tuesday)

map() Method :

The map() function is used to get modified version of the array.

map() applies a function to each array element and creates a new array of the returned
values.

The Syntax :

array.map(()=>{});

Example:

const arr =[10,20,30,40.50];
arr1 = arr.map(a=>a\*2);

Question :

const products =[
{name :'Laptop',price:50000,quantity:2},
{name :'Phone',price:10000,quantity:4},
{name :'Tablet',price:20000,quantity:5},
]

Calculate the total cost of all products.

# let , Var ,const

---

# Variable Scope :

    - Scope determines the visibility and accessibility of a variable.
    - There are three types of scope in JS

      a. The Global Scope

      b. Local Scope

      c. Block Scope (ES6)

# Global Scope :

    - When the javascript engine excutes a script ,it creates a global execution context.

    - Global execution context having 2 phase :

      1. Creation Phase
         In this pahse all memory allocation will takes place then varibales are
         assigned with undefined value.

      2. Execution Phase

         Execution of statement will takes place

# local Scope :

      - Scope within the function is called local scope.

      - Variable declared within the local scope is called local variable.

      - Functions are having there own execution context.

      - It is also having two phase.

    # Example :

     ```
        var count = 10;

        function test() {
        console.log(count);
        var count = 80;
        console.log(count);
        }

        test();
        console.log(count);
        ```

# local Scope :

       function getCounter() {
            counter = 10;
            return counter;
        }
        console.log(getCounter());
        console.log(counter);

NOTE: if we are not declaring a variable without any keyword then the variable
used inside the function will allocate memory in global execution context.

# Block Scope :

- The variable declared using let ,const keyword is having the scope within the block.

- The block may be Anonymous Block, Conditional block,Loop Block.

- This block scope has introduce in ES6.

var : Function Scope

let : Block Scope

const :Block Scope

- var vs let keyword

  ## let :

  - let is not hoisted

  - block-scoped
    var :

  ***

  - var is hoisted
  - function-scoped /local scope

  # What is Hoisting ? How many type of Hoisting are there ?

  x=5;
  var x;

  fun();
  function fun(){

  }

# Functions in Javascript :

---

Outlines :

1. Functions

2. Anonymous Function

3. Default Parameter

4. Function Type

5. call() ,Apply(),Bind()

6. Arrow Function

7. Rest Parameters

8. Closure

# 1.Function :

    -> Declare a function :

       function <function_name>(parameters){
          function body
          [return value;]
       }

       Example:

         function sum(a,b)
         {
             return a+b;
         }
    -> Calling a function


         const res = sum(4,5);

    -> Paramters and Arguments

       - Parameters are variable present in the function definition,which receives
       the value from funcion call.

       - Paramter always should be a variable.

       - Arguments are the  the values which we pass during function calling.

       - Arguments can be a value ,varibales or an expression.

            sum(4,5);
            let x=9,y=7;
            sum(x,y);
            sum(3+4,6+6);

    -> Return Keyword :

         - A function can return only one value at a time.

         - If you want that function shuld return multiple value
           then we may return an array or an object.

    -> The argument Object :

       ```
         function sum(x,y){
            console.log("Total Number of arguments:"+arguments.length);
            console.log("Total Number of arguments:"+JSON.stringify(arguments));
            return x+y;
        }
        let res=sum(1,2,3,4,5,6,7,8,9);
        console.log(sum.prototype);
        console.log("Name of the Function :"+sum.name);
        console.log("Total Number of Parameters :"+sum.length);

        console.log("Result :"+res);

        res=sum(1,2,3);
       ```

       -> Function Hoisting :

          sum(x,y);
          function sum(x,y){
            return x+y;
          }


       ->  Storing a Function in Variables:

          function sum(x,y){
            return x+y;
          }

          const add = sum;

          consoe.log(add(10,20));


          const sqr = function(n){
                return n * n;
          }

          console.log(sqr(5));

       -> Passing function to another function as an argument

          Example-1 :

           function even(n){
                return n%2 == 0 ? true : false;
           }
           function check(fn,n){
                return fn(n);
           }

           console.log(check(even,4));

       -> A function can return a function

          Example:


           function check(n){
                return  function(n){
                     return n%2 == 0 ? true : false;
                }
           }

           const fn=check(4);
           fn(6);

# 2. Anonymous Function :

      -> The function having no name is called anonymous function.

      -> Example:

          function(){

          }

      -> An anonymous function is not accessible after its initial creation,
         so, we need to assign it inot a variable.

         Example:

          const function_name =function(){

          }

          function_name();

       -> If we want to invoke anonymous function ,immediately after it's
          creation

          Example:

             function(){

             }();

             (function (a, b) {
                     return a + b;
            })(2, 3);

            https://www.udacity.com/blog/2023/03/immediately-invoked-function-expressions-iife-in-javascript.html#:~:text=An%20immediately%20invoked%20function%20expression,the%20code%20that%20we%20write.

        - Using anonymous function as arguments

            setTimeout(function(){
                 Console.log("Execution happen after 1 second");
            },1000);

    # 3. Default Parameters:

        function sum(x,y)
        {
            return x+y;
        }

        console.log(sum());
        console.log(sum(1,2));
        console.log(sum (1));

        OUTPUT:

        NaN
        3
        NaN

     -  To prevent result as NaN we can assign default value to the fucntion paramter.

        function sum(x=0,y=0)
        {
            return x+y;
        }

        console.log(sum());
        console.log(sum(1,2));
        console.log(sum (1));

        OUTPUT:

        0
        3
        1


    # 4. Function Type :

       -
          function test()
          {

          }

          console.log(typeof test);

       - In JS ,all function are objects.

       - They instance of function type.

       - Since they are object ,they have properties and methods.

       - length is a property which return number of paramter in the function.

       - prototype is a property ,which it the referencde to the actual function object.

       - Important Methods of Function Object

         a. apply()

         b. call()

         c. bind()
