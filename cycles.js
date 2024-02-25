let N
do {
    N = parseFloat(prompt('Введіть перше число:'))
} while (!Number.isInteger(N));
let M
do{
    M = parseFloat(prompt("Введіть друге число:"))
} while (!Number.isInteger(M))
 
let question = confirm("Пропускати парні числа?")

let sum = 0;
    for(let i = N; i <= M; i++){
        if(question == false){
            sum += i
        } else if(i % 2 !== 0){
            sum += i
        }
    } 
alert(sum)



