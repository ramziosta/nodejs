
process.stdin.on('data', (chunk) => {
    const input =chunk.toString().trim();
    if (input === 'exit') {
        process.exit(0);
    }
    try {
        const value = eval(input);
        console.log("value: " + value);
    }
    catch(exception) {
        console.log("exception: " );
    }
})
process.stdout.write("enter equation");
