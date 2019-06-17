/****** 
* Variables and Data Types
*/

// var firstName = 'Nic';
// console.log(firstName);

// var lastName = 'Headlee';
// var age = 31;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);
 
// job = 'Teacher';
// console.log(job);


/*********************
 * Variable Mutation and Type Coercion
 */

//  var firstName = 'Nic';
//  var age = 31;

//  console.log(firstName + ' ' + age);

// //  Type coercion
//  var job, isMarried; 
//  job = 'teacher';
//  isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//  // Variable mutation
//  age = 'thirty one';
//  job = 'driver';
 
//  alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//  var lastName = prompt('What is his last name?');
//  console.log(firstName + ' ' + lastName);

/**************
 * Basic Operators
 */

// var year, yearNic, yearMark;
// now = 2018;
// ageNic = 31;
// ageMark = 44;
// yearNic = now - 31;
// yearMark = now - 40;

//  console.log(yearNic);
 
//  // Math Operators
//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

// // Logical Operators
//  var markOlder = ageMark < ageNic;
//  console.log(markOlder);

//  // Typeof Operator
//  console.log(typeof markOlder);
//  console.log(typeof ageNic);
//  console.log(typeof 'Nic is younger than Mark');
//  var x;
//  console.log(typeof x);



/***************
 * Operator Precedence
 */

//  var now = 2018;
//  var yearNic = 1987;
//  var fullAge = 18;

//  // Multiple Operators
//  var isFullAge = now - yearNic >= fullAge; // true
//  console.log(isFullAge);

//  // Grouping
//  var ageNic = now - yearNic;
//  var ageMark = 40;
//  var average = (ageNic + ageMark) / 2;
//  console.log(average);

//  // Multiple Assignments
//  var x, y; 
//  x = y = (3 + 5) * 4 - 6; //26
//  console.log(x, y);

//  // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// var heightNic, heightJohn, massMark, massJohn;
// heightNic = 5;
// heightJohn = 5;
// massNic = 5;
// massJohn = 5;

// var bmiNic = massNic / (heightNic * heightNic);
// var bmiJohn = massJohn / (heightJohn * heightJohn);

// var markFat = bmiNic > bmiJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markFat);

/************
 * If / else statements
 */

//  var firstName = 'Nic';
//  var civilStatus = 'single';

//  if (civilStatus === 'married') {
//      console.log(firstName + ' is married!')
//  } else {
//      console.log(firstName + ' will hopefully marry soon :)');
//  }


//  var isMarried = true;
//  if (isMarried) {
//      console.log(firstName + ' is married!')
//  } else {
//      console.log(firstName + ' will hopefully marry soon :)');
//  }


// var heightNic, heightJohn, massMark, massJohn;
// heightNic = 5;
// heightJohn = 5;
// massNic = 20;
// massJohn = 5;

// var bmiNic = massNic / (heightNic * heightNic);
// var bmiJohn = massJohn / (heightJohn * heightJohn);

// if (bmiNic > bmiJohn) {
//     console.log('Nic\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Nic\'s.');
// }

// var markFat = bmiNic > bmiJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markFat);


//  var firstName = 'Nic';
//  var age = 20;

//  if (age < 13) {
//      console.log(firstName + ' is a boy.');
//  } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
//  } else if (age >= 20 && age < 38) {
//      console.log(firstName + ' is a young man.');
//  } else {
//      console.log(firstName + ' is a man.');
//  }


/*************
 * Ther Ternary Operator and Switch Statements
 */

//  var firstName = 'Nic';
//  var age = 14;

//  // Ternary Operator
//  age >= 18 ? console.log(firstName + ' drinks beer.')
//  : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch Statement
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives a car');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs websites');
//         break;
//     default:
//             console.log(firstName + ' does something else.');
// }

// age = 18;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');     
//         break;
//     case age >= 20 && age < 38:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');       
// }

/**************
 * Truthy and Falsey values and equality operators
 *
 */

// falsy values: undefined, null, 0, '', Nan
// truthy values: Not falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has not been defined');
// }

// // Equality operators
// if (height === 23) {
//     console.log('The == operator does type coercion');
// }


// John = 89, 120,103
// Mike = 116, 94, 123

// var averageJohn = (116 + 96 + 123) / 3;
// var averageMike = (116 + 95 + 123) / 3;
// var averageMary = (116 + 95 + 123) / 3;

// if (averageJohn > averageMike && averageJohn > averageMary) {
//     console.log('John is the winner with an average score of ' + averageJohn);
// } else if (averageMike > averageJohn && averageMike > averageMary) {
//     console.log('Mike is the winner with an average score of ' + averageMike);
// } else if (averageMary > averageJohn && averageMary > averageMike) {
//     console.log('Mary is the winner with an average score of ' + averageMary);  
// }
// else {
//     console.log('they all have the same average of ' + averageJohn);
// }


/************************
 * FUNCTIONS
 */

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1949);
// var ageJane = calculateAge(1973);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year)
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else {
//         console.log(firstName + ' is retired.')
//         }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1987, 'Nic');
// yearsUntilRetirement(1969, 'Mike');
// yearsUntilRetirement(1940, 'Bill');


/************************
 * Function Statements and expressions
 */

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives cars';
        case 'designer':
            return firstName + ' designs cool shit';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));



























