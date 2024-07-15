// //  ===========================     Strings     ===========================

let Title = '== Strings Assignments =='

console.log('='.repeat(Title.length))
console.log(Title)
console.log('='.repeat(Title.length))


let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(userName.search('E')).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName[userName.length - userName.length].toLowerCase().repeat(3)); // eee