function CheckIfEmptyObject(obj) {
    const keys = Object.keys(obj);
    console.log(obj);
    return keys.length === 0;
}

export default CheckIfEmptyObject;
