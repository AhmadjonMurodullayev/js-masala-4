// 1.N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing input: 3 output: [1,3,5]
// function getInitialOdds(n){
//     let result = []
//     let number = 1
//     for( let i = 0; i < n; i++){
//         if(number % 2 !== 0 ){
//             result.push(number)
//         }
//         number++
//     }
//     return result
// }
// console.log(getInitialOdds(5));

// 2. string da nechta unli harf borligini toping bunda unli harflar ro'yxatini alohida array ko'rinishida shakllantirib olib keyin loop qilib bajaring
let str = "ahmadjon"
let neme = ["a", "e" ,"o","o'","u","i"]

function namBers(str){
    let count = 0;
   let name_a =[]
    for(let i = 0 ;i < str.length; i++){
        if(neme.includes(str[i])){
       count++
            name_a.push(str[i])
        }
    }
    
    console.log(name_a);
    return count 
   
}
namBers(str)


// 3.N ta element dan iborat bo’lgan array yarating va arraydagi eng katta va eng kichkina sonlar o’rnini almashtiring: arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0] 
let arr = [1, 3, 2, 0,4, 5];
let result = swapMinMax(arr);
function swapMinMax(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let maxIndex = 0;
    let minIndex = 0;
    let maxValue = arr[0];
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }
    let temp = arr[maxIndex];
    arr[maxIndex] = arr[minIndex];
    arr[minIndex] = temp;

    return arr;
}
console.log(result);


//  4. argument sifatida berilgan so'z da nechta a harfi ishtirok etganini aniqlaydigan function tuzing 

function namBers(str){
    let count = 0 
    for(let i = 0 ; i < str.length;i++){
        if(str[i] == "a" || str[i] == "A"){
               count++
        }
    }
    return count
}
console.log(namBers("Ahmadjon"));


// 5. nums = [2,7,11,15], target = 9 => ixtiyoriy array va biron bir target nomli o'zgaruvchi olinsin. Array ichidagi sonlar yig'indisi target ga teng bulgan sonlarni index si topilsin Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin
function findIndices(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(`[${i}, ${j}]`);
                return;
            }
        }
    }
    console.log("No two numbers add up to the target.");
}

const nums = [2, 7, 11, 15];
const target = 9;

findIndices(nums, target);

