const parseArgs = () => {
    const argv = process.argv.slice(2);
    
    const outputArray = [];
    for (let i = 0; i < argv.length; i += 2) {
        outputArray.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
    }

    console.log(outputArray.join(', '));
};

parseArgs();