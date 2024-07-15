//  ===========================     Basic Functions     ===========================

let Title = '== Basic Function Assignments =='

console.log('='.repeat(Title.length))
console.log(Title)
console.log('='.repeat(Title.length))


// 01:)

// function sayHello(theName, theGender) {
//     // Your Code Here
//     let gender;
//     if(theGender === 'Male'){
//         gender = 'Mr.'
//     }else if(theGender === 'Female'){
//         gender = 'Mrs.'
//     }else{
//         gender = ''
//     }
//     console.log(`Hello ${gender}${theName}`)
//   }
  
  // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"



// 02:)

// function calculate(firstNum, secondNum, operation='add') {
//     // Your Code Here
//     if(secondNum){
//         if(operation === 'add'){
//             console.log( firstNum + secondNum)
//         }
//         else if(operation === 'subtract'){
//             console.log( firstNum - secondNum)
//         }else if(operation === 'multiply'){
//             console.log( firstNum * secondNum)
//         }else{
//             console.log( `I Dont UnderStand This-> ${operation}`)
//         }
//     }else{
//         console.log( `Second Number Not Found`)
//     }

// }
  
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600


// 03:)

// function ageInTime(theAge) {
//     if(theAge < 100 && theAge > 10 ){
//         // Your Code Here
//         console.log(`Your Age In Months [${theAge * 12}] M`)
//         console.log(`Your Age In Weeks [${(theAge * 12) * 4}] W`)
//         console.log(`Your Age In Days [${((theAge * 12) * 4) * 7}] D`)
//         console.log(`Your Age In Hours [${(((theAge * 12) * 4) * 7) * 24}] H`)
//         console.log(`Your Age In Minutes [${((((theAge * 12) * 4) * 7) * 24)*60}] M`)
//         console.log(`Your Age In Seconds [${(((((theAge * 12) * 4) * 7) * 24)*60)*60}] S`)

//     }else{
//         console.log(`Age Out Of Range`)
//     }

// }
  
//   // Needed Output
//   ageInTime(110); // 
//   ageInTime(38); // Months Example => 456 Months








// 05:)

// function createSelectBox(startYear, endYear) {
//     // Your Code Here
//     document.write(`<select>`)
//     for(let i = startYear ; i <= endYear ;i++){
//         document.write(`<option value=${i}>${i}</option>`)
//     }
//     document.write(`</select>`)
//   }
//   createSelectBox(2000, 2021);