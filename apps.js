function mindGame(number){
    const multiplication = number * 3;
    const addition = multiplication	+ 10;
    const division = addition / 2;
    const subtraction = division - 5;

    return subtraction;
}

const ret= mindGame(5)
console.log(ret)