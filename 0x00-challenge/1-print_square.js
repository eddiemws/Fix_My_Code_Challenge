#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/




size = parseInt(process.argv[2], 10)

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
