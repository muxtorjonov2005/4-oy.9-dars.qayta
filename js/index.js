// 1-masala
// let arr = [1, 2, 3, 4]
// function ikigaKopaytirish(arg){
//     arg.forEach(function(value){
//         console.log(value * 2);
//     })
// }
// ikigaKopaytirish(arr)

// 2-masala
// function xammasiniattaQilish(arg){
//     let res = []
//     arg.forEach(val => {
//         res.push(val.toUpperCase())
//     })
//     return res
// }
// console.log(xammasiniattaQilish(['olma', 'anor', 'xurmo', 'anjir']));

// 3-masala
// function beshQoshibArrYarat(arg){
//     let res = []
//     arg.forEach(val => {
//         res.push(val += 5)
//     })
//     return res
// }
// console.log(beshQoshibArrYarat([10, 15, 20, 25]));

// 4-masala
// function ismVaFamilyasiniChiqar(arg){
//     let res = []
//     arg.forEach(student =>{
//         res.push(`${student.name} : ${student.grade}`);
//     })
//     return res 
// }
// console.log(ismVaFamilyasiniChiqar([
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
//   ]
// ))


// 5-masala
// function ikkigaKopaytir(arg){
//     let res = arg.map(val => val * 2)
//     return res
// }
// console.log(ikkigaKopaytir([1, 2, 3, 4]));

// 6-masala
// function hammasiniKattaQilish(arg){
//     let res = arg.map(val => val.toUpperCase())
//     return res
// }
// console.log(hammasiniKattaQilish(['olma', 'anor', 'anjir', 'nexia']));

// 7-masala
// function beshQoshib(arg){
//     return arg.map(val => val + 5)
// }
// console.log(beshQoshib([10, 15, 20, 25]));

// 8-masala
// function studentBahosini(arg){
//     return arg.map(val => `${val.name} : ${val.grade + 10}`)
// }
// console.log(studentBahosini([
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
//   ]
// ));


// 1-masala
// function coupleArr(arg){
//     return arg.filter(val => val % 2 == 0)
// }
// console.log(coupleArr([1, 2, 3, 4, 5, 6]));

// 2-masala
// function beshdanUzunSozlar(arg){
//     return arg.filter(val => val.length > 5)
// }
// console.log(beshdanUzunSozlar(['apple', 'banana', 'cherry', 'date']));

// 3-masla
// function yoshiKatta(arg){
//     return arg.filter(val => val > 18)
// }
// console.log(yoshiKatta([12, 17, 18, 19, 21]));

// 4-masala
// function balliYuqorilariChiqarilsn(arg){
//     return arg.filter(val => `${val.grade}` > 80)
// }
// console.log(balliYuqorilariChiqarilsn( [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 72},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ]
// ));


// 1-masala
// function ondanKattaSonTop(arg){
//     return arg.find(val => val > 10)
// }
// console.log(ondanKattaSonTop([4, 9, 11, 2, 18]));

// 2-masala
// function birinchiYuqoriBall(arg){
//     return arg.find(val => `${val.grade}` > 85)
// }
// console.log(birinchiYuqoriBall( [
//     {name: 'Ali', grade: 80},
//     {name: 'Vali', grade: 90},
//     {name: 'Hasan', grade: 78},
//     {name: 'Olim', grade: 85}
//   ]
// ));


// 1-masala
// function musbatTekshir(arg){
//     return arg.some(val => val > 0)
// }
// console.log(musbatTekshir([-1, -2, 3, -4]));

// 2-masala
// function sozlarniUzuniBormi(arg){
//     return arg.some(val => val.length > 5)
// }
// console.log(sozlarniUzuniBormi(['cat', 'dog', 'elephant']));

// 3-masala
// function barchasiMusbatTekshir(arg){
//     return arg.every(val => val > 0)
// }
// console.log(barchasiMusbatTekshir([1, 2, 3, 4]));

// 4-masala
function bahoniTekshir(arg){
    return arg.every(val => `${val.grade}` > 50)
}
console.log(bahoniTekshir([
    {name: 'Ali', grade: 60},
    {name: 'Vali', grade: 70},
    {name: 'Hasan', grade: 80}
  ]
));