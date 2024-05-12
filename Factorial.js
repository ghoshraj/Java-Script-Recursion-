function fact(a) {
    if (a === 1) {
        return 1;
    }
    return a * fact(a - 1);
}
function main() {
    console.log(fact(5));
}main();