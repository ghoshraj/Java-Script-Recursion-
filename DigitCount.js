function main() {
    let a = Number(prompt());
    console.log(counts(a));
} main();
function counts(a) {
    if (a <= 0)
        return 0;
    return 1 + counts(Math.trunc(a / 10));
}