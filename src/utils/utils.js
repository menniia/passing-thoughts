const getNewExpirationTime = () => {
    return Date.now() + 15 * 1000;
}

let nextId = 0;
const generateId = () => {
    let result = nextId;
    nextId += 1;
    return result;
}

export { getNewExpirationTime, generateId }