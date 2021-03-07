export const typeOf = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

export const isFun = (fun) => {
    return typeOf(fun) === 'function';
}