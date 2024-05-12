function main() {
    let a = Number(prompt());
    let b = count(a);
    let c = arm(a, b);
    console.log(c)
    if (a === arm(a, b))
        console.log("This is a armstrong number")
    else
        console.log("This is not a armstron Number")

}
main();

function count(a) {
    if (a === 0)
        return 0;
    return 1 + count(Math.trunc(a / 10))
}

function arm(a, b) {
    if (a === 0)
        return 0;
    return Math.pow(a % 10, b) + arm(Math.trunc(a / 10), b)
}