
function calculator(b, c, a) {
    switch (a) {
        case '-':
            let d = b - c
            console.log(d);
            break;
        case '+':
            d = b + c
            console.log(d)
            break;
        case '*':
            d = b * c
            console.log(d)
            break;

        default:
            console.log("faah")
            break;
    }
}
calculator(4,4,'*');