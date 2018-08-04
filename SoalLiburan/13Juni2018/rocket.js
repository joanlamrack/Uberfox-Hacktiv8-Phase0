//Rocket

function rocket(param) {
    var output = [];
    var buffer = [];
    for (var i = 0; i < param; i++) {
        for (var j = 0; j < param; j++) {
            if (
                (param % 2 === 0 &&
                    (j === param / 2 - 1 || j === param / 2) &&
                    (i === param / 2 - 1 || i === param / 2)) ||
                (param % 2 !== 0 &&
                    (i === Math.trunc(param / 2) && j === Math.trunc(param / 2)))
            ) {
                buffer.push('*');
            } else {
                buffer.push('');
            }
        }
        output.push(buffer);
        buffer = [];
    }
    return output;
}

console.log(rocket(5));
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3));
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4));
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2));
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1));
/*
    [
        ['*']
    ]
*/
