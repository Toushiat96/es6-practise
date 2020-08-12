function add (num1,num2=14){
    // num2 = num2 || 10;
    return num1+num2;
}

const res = add(15,10);
console.log(res);