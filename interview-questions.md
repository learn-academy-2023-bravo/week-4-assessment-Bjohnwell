# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object oriented programming is organized around objects where functional programing is organized around logics an functions. Such as Ruby being object oriented and JS (prior to ES6) being functional.

Researched answer:
(the source: https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526)

(Source Language: "Functional programming is the form of programming that attempts to avoid changing state and mutable data. In a functional program, the output of a function should always be the same, given the same exact inputs to the function...."

"Object oriented programming is a programming paradigm in which you program using objects to represent things you are programming about (sometimes real world things). These objects could be data structures. The objects hold data about them in attributes. The attributes in the objects are manipulated through methods or functions that are given to the object...")

(My interpetation: Functional programming is programming based around logic and functions. That is something we know. This has its benefits by providing things like efficiency nested functions and the ability to parallel program. Functional programming seems to be very straightforward. Each function does its part and just that. The functions are easily invoked and can be reused multiple times. All of this helps with managing the code and allows it to be cleaner and more modular.

Object-oriented programming or OPP is programming organized around objects. It allows you to try and code real world scenarios. Such as having an object that has all the attributes of your dream car. I.e the make model and year and color. We can use that objects to input that information into a real world scenario such as driving your dream car or buying your dream car etc.

It seems that the biggest difference is that with OOP data and behavior are combined into objects while with with functional programing data and behavior are treated seperatley. **I also highly recommend the source that provided this answer it was really helpful)

1. What is the difference between a Float and an Integer in Ruby?

Your answer: an interger is a whole number and float is a fraction of a number.

Researched answer:
(the source: https://www.digitalocean.com/community/tutorials/understanding-data-types-in-ruby)

(source language: "Like in math, integers in computer programming are whole numbers"

"A floating-point number or a float represents a real number. Real numbers can be either a rational or an irrational number; numbers that contain a fractional part")

(My interpretation: an interger is a whole number that can be positive, negative or 0. When using large intergers that would normally use a comma insted we would use an underscore ie: 1,200,300 would read 1_200_300

Floats are fractions of numbers that contain a decimal points that can also be positive or negative but cannot be 0 )

1. Ruby has an implicit return. What does that mean?

Your answer: an implicit return means that there is a built in return. This means that you do not need a return statement

Researched answer:
(the source: https://dev.to/ting682/implicit-vs-explicit-returns-14j5)

(source language: "In Ruby, every method provides a return value. Ruby will return the last evaluated statement.")

(My interpretation: Implicit return will automatically return the last line of every statement. this allows for less code and keeps the code cleaner)

1. What is a block in Ruby?

Your answer: Blocks are anonymous functions that can be passed into methods

Researched answer:
(the source: https://www.tutorialspoint.com/ruby/ruby_blocks.htm#:~:text=Similarly%2C%20Ruby%20has%20a%20concept,as%20that%20of%20the%20block.)

(source language: "A block looks similar to a method in Ruby. Methods consist of a name, but with blocks we don’t need to write a name, and always pass to a method call.

Blocks are anonymous pieces of code that accept input from arguments and return a value.")

(My interpretation: Blocks are a pieces of code that take in input from arguments and return a value. Blocks are usually defined by "do" and "end" but can also be defined using {} but only for a single line. i.e: my_number.times{'polyglots'} from our lesson on Ruby blocks and iterables.)

1. How do you extract a value in a Ruby hash?

Your answer: You extract a value from a ruby hash by using bracket notation.

Researched answer: I could not find a good source to explain this. Many of the sources demostrated how to extract a value but didn't really talk about using bracket notation. The only reference I could find was the lesson we did about hashes.

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a testing framework for Ruby that allows developers to write automated tests for their Ruby code.

2. Test-driven development: is a software development approach where tests are written before writing the actual code.

3. PostgreSQL: is an open-source relational database management system (RDBMS) that uses and extends the SQL language to provide a flexible and scalable platform for managing large amounts of structured data. 

4. CRUD: Create, Read, Update, Delete

5. HTTP:Hypertext Transfer Protocol. is a protocol used to transfer data over the web. 
