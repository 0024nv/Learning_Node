const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}

const name = 'Programmer';
// module.exports.add = add;
// module.exports.sub = sub;

// or

module.exports = {add,sub,name};
