# js-tdd-master-class-ava
A boilerplate project for performing a master class about JS TDD using AVA

How to start

* Get dependencies 
`npm i`

* Run tests 
`npm t`

* Run tests in watch mode 
`npm t -- --watch`

Follow RED-GREEN-REFACTOR cycle
** Start implementing tests in `src/fizzBuzz.test.js` file
** Add some code to `src/fizzBuzz.js` to fulfil the tests (specs actually)
** Refactor your code and tests


### KATA 1 - Fizz Buzz
Implement a function which takes a number
* return `Fizz` if number is devided by 3
* return `Buzz` if number is devided by 5
* return `FizzBuzz` if number is devided both by 3 and 5
* return number itself in other cases


### KATA 2 - String Calculator

1. Create a simple String calculator with a method int Add(string numbers)
* The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
* Start with the simplest test case of an empty string and move to 1 and two numbers
* Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
* Remember to refactor after each passing test

2. Allow the Add method to handle an unknown amount of numbers
3. Allow the Add method to handle new lines between numbers (instead of commas).
* the following input is ok:  “1\n2,3”  (will equal 6)
* the following input is NOT ok:  “1,\n” (not need to prove it - just clarifying)

4. Support different delimiters 
* to change a delimiter, the beginning of the string will contain a separate line that looks like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
* the first line is optional. all existing scenarios should still be supported

5. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message

~~~
stop here if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.
~~~

6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2
7. Delimiters can be of any length with the following format:  “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6
8. Allow multiple delimiters like this:  “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.
9. Make sure you can also handle multiple delimiters with length longer than one char
