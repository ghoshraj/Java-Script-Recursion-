function main(){
let n = Number(prompt());
fib(0 ,1,n)
}main();
function fib(a , b ,n){
    if(n == 0)
    return;
    let c = a + b;
    console.log(a);
    return fib(b , c , n-1);
}