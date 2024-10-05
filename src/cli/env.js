const parseEnv = () => {
    const outputArray = [];
    for (let envKey in process.env) {
        if (envKey.startsWith('RSS_')) {
            outputArray.push(`${envKey}=${process.env[envKey]}`);
        }
    }

    console.log(outputArray.join('; '));
};

parseEnv();