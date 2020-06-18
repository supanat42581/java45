// ข้อ 1
// let a=prompt('first num')
// let b=prompt('second num')
//     if( a<b && b%a==0 ){
//         alert((a/a) + '/'+ (b/a))
//     }else if (b<a && b%a==0){
//     }else{
//         alert(a+'/'+b)}

// ข้อ 2 
// function autosum(){
//     let sum=0;
//     for(let i = 160;i<=2048;i+=2){
//         sum+=i
//     }
//     alert (sum);
// }
// autosum();

// ข้อ 3
// let sum=0
// for(i=163; i<=815; i+=4){
//     sum+=i
// }
// alert (sum);


// ข้อ 4
// let n = prompt('Enter num')
// let x = 0;
// let y = 1;
// let newy;
// for (let i = 2; i < n; i++) {
//     newy = x + y
//     x = y
//     y = newy
// }
// console.log(y)

// ข้อ 5
// let sum=0;
//     for(i=1; i<=18954; i++){
//     if(i%2==0){
//         sum-=i
//     }else{
//         sum+=i}
//      }console.log(sum)


// ข้อ 6
// let sum=0
// for(let i=1;i<=87;i++){
//     sum+=(i*(i+1))
// }console.log(sum)


// ข้อ 7
// let sum=0
// for(let i=1;i<=87;i++){
//     sum+=(i*(i+1)*(i+2))
// }console.log(sum)

// ข้อ 8 + 9
// let sum =0;
// for(i=1; i<=155; i+=2){
//     sum+=i*(i+2)*(i+4)
// }alert(sum)

// ข้อ 10
// let firstnum = prompt('enter a number')
// while(true){
//     let minnum = prompt('enter a number')
//     if(minnum=="stop"|| firstnum == "stop"){
//         break;
//     }
//     else if(firstnum > minnum){
//         firstnum = minnum} 
// }
// console.log(firstnum)

// ข้อ 11

// let num1 = Infinity;
// let num2 = Infinity;
// let num3 = Infinity;
// while (true) {
//     let minnum = prompt('enter a number')
//     if (minnum == "stop") {
//         break;
//     }
//     else if (+minnum < num1 && +minnum < num2 && +minnum < num3 ) {
//         num1 = num2
//         num2 = num3
//         num3 = minnum 
//     } else if ( +minnum > num3 && +minnum < num2) {
//         num1 = num2
//         num2 = minnum
//     } else if (+minnum > num2 && +minnum < num1) {
//         num1=minnum
//     }
// }
// console.log(`${num1}${num2}${num3}`)


// ข้อ 12
// let firstnum = prompt('enter a number')
// let maxxy = +firstnum;
// let minnum = +firstnum;
// while (true) {
//     let minnum1 = prompt('enter a number')
//     if (minnum1 == "stop" ) {
//         break;
//     }
//     else if (+minnum1< +minnum) {
        
//         minnum = minnum1
//     }
//     else if (+minnum1 > +maxxy) {

//         maxxy = minnum1
//     }
// }
// console.log(minnum, maxxy)


// ข้อ 13
// let firstnum = prompt('enter a number')
// let maxxy = +firstnum;
// let minnum = +firstnum;
// while (true) {
//     let minnum1 = prompt('enter a number')
//     if (minnum1 == "stop" ) {
//         break;
//     }
//     else if (+minnum1< +minnum) {
        
//         minnum = minnum1
//     }
//     else if (+minnum1 > +maxxy) {

//         maxxy = minnum1
//     }
// }
// console.log(minnum-maxxy)


ข้อ 14
let count = 0
let average = 0
while (true) {
    let newNum = prompt('enter a number')
    if (Number(newNum)) {
        average += Number(newNum)
        count++
    }
    else if (newNum == "stop") {
        console.log(average / count)
        break;
    }
}

ข้อ 15
let input = prompt('enter num')
let box = ""
let New=""
if(Number(input)>=0){
for(let i=0; i < input.length; i++){
    New = input.slice(i,i+1)
    box=New+box   

}

console.log(Number(box))
}else{
    for(let i=1; i < input.length; i++){
        
        New = input.slice(i,i+1)
        box=New+box   
    
    }
console.log("-" + Number(box))
}












