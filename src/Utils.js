const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr.length > 0){
        return false;
    }

    return false;
}

const dumpLogs = (message) => {
    console.log(message);

    // sends it to a tool for tracking
}

export {isArrayEmpty, dumpLogs}


