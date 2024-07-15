//  ===========================     Arrow Functions     ===========================

let Title = '== Arrow Function Assignments =='

console.log('='.repeat(Title.length))
console.log(Title)
console.log('='.repeat(Title.length))


// 01:)

// function getDetails(zName, zAge, zCountry) {
//     function namePattern() {
//       // Write Your Code Here
//       // Osama Mohamed => Osama M.
//       // Ahmed ali => Ahmed A.
//       return `Hello ${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`
//     }
//     function ageWithMessage() {
//       // Write Your Code Here
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//       return `Your Age Is ${Number.parseInt(zAge)}`
//     }
//     function countryTwoLetters() {
//       // Write Your Code Here
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//       return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`
//     }
//     function fullDetails() {
//       // Write Your Code Here
//       return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
//     }
//     return fullDetails(); // Do Not Edit This
// }
  
//   console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// //   Hello Osama M., Your Age Is 38, You Live In EG
  
//   console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// //   Hello Ahmed A., Your Age Is 32, You Live In SY


// 02:)

// let itsMe = _ => `Iam A Normal Function`
// console.log(itsMe()); // Iam A Normal Function
// // ============
// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



// 03:)

// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// 04:)


// function specialMix(...data) {
//     let result = 0;
//     // Your Code Here
//     for(let i = 0 ; i< data.length ; i++){
//         let num = Number.parseInt(data[i]);
//         if(!isNaN(num)){
//             result +=num
//         }
//     }
//     if(result === 0){
//         result = "All Is Strings"
//     }
//     return result;
// }

// Conver To Arrow Function

// let specialMix = (...data) => {
//     let result = 0;
//     // Your Code Here
//     for(let i = 0 ; i< data.length ; i++){
//         let num = Number.parseInt(data[i]);
//         if(!isNaN(num)) result +=num
//     }
//     if(result === 0) result = "All Is Strings"
//     return result;
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

