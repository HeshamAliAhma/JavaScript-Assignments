// //  ===========================     For Loop     ===========================

let Title = '== For Loop Assignments =='

console.log('='.repeat(Title.length))
console.log(Title)
console.log('='.repeat(Title.length))

// // 01:)

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start ; i <= end ; i+=start){
//     if(i === exclude){
//         continue
//     }
//     console.log(i)
// }

// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// // 02:)


// let start = 10;
// let end = 0;
// let stop = 3;


// for(let i = start ; i > end ; i--){
//     if(i < 10){
//         console.log(`0${i}`)
//         // console.log(`0` + i)
//     }else{
//         console.log(i)
//     }
//     if(i === 3){
//         break
//     }
// }


// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03




// // 03:)

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start ; i <= end ; i++){
//     console.log(i)
//     for(let j = breaker ; j < end ; j+=2){
//         console.log(`-- ${j}`)
//     }
// }

// // Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4





// // 04:)
// let index = 10;
// let jump = 2;
// let i = index
// for(;;){
//     if(i> jump){
//         console.log(i)
//     }else{
//         break
//     }
//     i-=2
// }

// // Output
// 10
// 8
// 6
// 4

// // 05:)

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let count = friends.length / friends.length
// for(let i = (friends.length - friends.length) ; i < friends.length ; i++){
//     if(friends[i][0] === 'A'){
//         continue
//     }
//     console.log(`${count} => ${friends[i]}`)
//     count++
// }

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


// // 06:)

// let start = 0;
// let swappedName = "elZerO";
// let newString = []
// for(let i = start ; i < swappedName.length ; i++){
//     if(swappedName[i][0] === swappedName[i][0].toLowerCase()){
//         newString.push(swappedName[i][0].toUpperCase())
//     }else {
//         newString.push(swappedName[i][0].toLowerCase())
//     }
// }
// console.log(newString.join(''))

// // Output
// "ELzERo"






// // 07:)

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let i = start ; i < mix.length ; i++){
//     if(mix[i] === 1 || typeof mix[i] === 'string') continue
//     console.log(mix[i])
// }

// // Output
// 2
// 3
// 4
